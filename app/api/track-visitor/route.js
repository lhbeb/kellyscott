import { NextResponse } from 'next/server';

function getTelegramConfig() {
    return {
        botToken: process.env.TELEGRAM_BOT_TOKEN,
        chatId: process.env.TELEGRAM_CHAT_ID
    };
}

function normalizeIp(rawIp) {
    if (!rawIp) return null;

    const firstIp = rawIp.split(',')[0].trim();

    if (!firstIp) return null;
    if (firstIp.startsWith('::ffff:')) return firstIp.replace('::ffff:', '');

    return firstIp;
}

function getRequestIp(request) {
    const headerNames = [
        'cf-connecting-ip',
        'x-vercel-forwarded-for',
        'x-forwarded-for',
        'x-real-ip',
        'fastly-client-ip',
        'true-client-ip',
        'x-client-ip'
    ];

    for (const headerName of headerNames) {
        const ip = normalizeIp(request.headers.get(headerName));
        if (ip) return ip;
    }

    return 'Unknown';
}

async function getIpLocation(ip) {
    if (!ip || ip === 'Unknown' || ip === '::1' || ip === '127.0.0.1') {
        return null;
    }

    const ipWhoLocation = await getIpWhoLocation(ip);
    if (ipWhoLocation) return ipWhoLocation;

    return getIpApiLocation(ip);
}

async function getIpWhoLocation(ip) {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2500);
        const response = await fetch(`https://ipwho.is/${ip}`, {
            signal: controller.signal,
            headers: { Accept: 'application/json' }
        });
        clearTimeout(timeout);

        if (!response.ok) return null;

        const data = await response.json();

        if (!data.success) return null;

        return {
            country: data.country || null,
            countryCode: data.country_code || null,
            region: data.region || null,
            city: data.city || null,
            postal: data.postal || null,
            latitude: data.latitude || null,
            longitude: data.longitude || null,
            timezone: data.timezone?.id || null,
            org: data.connection?.org || data.connection?.isp || null,
            asn: data.connection?.asn ? `AS${data.connection.asn}` : null,
            source: 'ipwho.is'
        };
    } catch {
        return null;
    }
}

async function getIpApiLocation(ip) {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2500);
        const response = await fetch(`https://ipapi.co/${ip}/json/`, {
            signal: controller.signal,
            headers: { Accept: 'application/json' }
        });
        clearTimeout(timeout);

        if (!response.ok) return null;

        const data = await response.json();

        if (data.error) return null;

        return {
            country: data.country_name || null,
            countryCode: data.country_code || null,
            region: data.region || null,
            city: data.city || null,
            postal: data.postal || null,
            latitude: data.latitude || null,
            longitude: data.longitude || null,
            timezone: data.timezone || null,
            org: data.org || null,
            asn: data.asn || null,
            source: 'ipapi.co'
        };
    } catch {
        return null;
    }
}

function formatValue(value) {
    if (value === null || value === undefined || value === '') return 'Unknown';
    if (Array.isArray(value)) return value.length ? value.join(', ') : 'Unknown';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
}

export async function GET() {
    const { botToken, chatId } = getTelegramConfig();

    return NextResponse.json({
        ok: true,
        configured: Boolean(botToken && chatId)
    });
}

export async function POST(request) {
    try {
        const { botToken, chatId } = getTelegramConfig();

        if (!botToken || !chatId) {
            return NextResponse.json(
                {
                    ok: false,
                    error: 'Telegram notifier is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.'
                },
                { status: 500 }
            );
        }

        const { userAgent, page, referrer, domain, origin, url, fingerprint, fingerprintHash, userAgentData } = await request.json();

        const ip = getRequestIp(request);
        const location = await getIpLocation(ip);

        const ua = userAgent || '';
        let device = 'Desktop';
        if (/Mobile|Android|iPhone|iPad|iPod/i.test(ua)) {
            device = /iPad/i.test(ua) ? 'Tablet' : 'Mobile';
        }

        let browser = 'Unknown';
        if (/Edg\//i.test(ua)) browser = 'Edge';
        else if (/Chrome/i.test(ua)) browser = 'Chrome';
        else if (/Firefox/i.test(ua)) browser = 'Firefox';
        else if (/Safari/i.test(ua)) browser = 'Safari';
        else if (/Opera|OPR/i.test(ua)) browser = 'Opera';

        let os = 'Unknown';
        if (/Windows/i.test(ua)) os = 'Windows';
        else if (/Mac OS X/i.test(ua)) os = 'macOS';
        else if (/Android/i.test(ua)) os = 'Android';
        else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
        else if (/Linux/i.test(ua)) os = 'Linux';

        const now = new Date().toLocaleString('en-US', {
            timeZone: 'Africa/Casablanca',
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        const message = [
            'New Visitor - Ballard Kelly Scott',
            '',
            `Time: ${now} (Morocco)`,
            `Domain: ${formatValue(domain)}`,
            `Origin: ${formatValue(origin)}`,
            `URL: ${formatValue(url)}`,
            `Page: ${page || '/'}`,
            `Referrer: ${referrer || 'Direct'}`,
            '',
            `IP Address: ${ip}`,
            `Country: ${formatValue(location?.country)}${location?.countryCode ? ` (${location.countryCode})` : ''}`,
            `Region: ${formatValue(location?.region)}`,
            `City: ${formatValue(location?.city)}`,
            `Postal: ${formatValue(location?.postal)}`,
            `Coordinates: ${location?.latitude && location?.longitude ? `${location.latitude}, ${location.longitude}` : 'Unknown'}`,
            `IP Timezone: ${formatValue(location?.timezone)}`,
            `Network: ${formatValue(location?.org)}`,
            `ASN: ${formatValue(location?.asn)}`,
            `Geo Source: ${formatValue(location?.source)}`,
            '',
            `Device: ${device}`,
            `OS: ${os}`,
            `Browser: ${browser}`,
            '',
            'Fingerprint',
            `Hash: ${formatValue(fingerprintHash)}`,
            `Platform: ${formatValue(fingerprint?.platform)}`,
            `Language: ${formatValue(fingerprint?.language)}`,
            `Languages: ${formatValue(fingerprint?.languages)}`,
            `Browser Timezone: ${formatValue(fingerprint?.timezone)}`,
            `Timezone Offset: ${formatValue(fingerprint?.timezoneOffset)}`,
            `CPU Cores: ${formatValue(fingerprint?.hardwareConcurrency)}`,
            `Device Memory: ${formatValue(fingerprint?.deviceMemory)}`,
            `Max Touch Points: ${formatValue(fingerprint?.maxTouchPoints)}`,
            `Cookies Enabled: ${formatValue(fingerprint?.cookieEnabled)}`,
            `Do Not Track: ${formatValue(fingerprint?.doNotTrack)}`,
            `Vendor: ${formatValue(fingerprint?.vendor)}`,
            `Screen: ${fingerprint?.screen ? `${fingerprint.screen.width}x${fingerprint.screen.height}` : 'Unknown'}`,
            `Available Screen: ${fingerprint?.screen ? `${fingerprint.screen.availWidth}x${fingerprint.screen.availHeight}` : 'Unknown'}`,
            `Color Depth: ${formatValue(fingerprint?.screen?.colorDepth)}`,
            `Pixel Depth: ${formatValue(fingerprint?.screen?.pixelDepth)}`,
            `Viewport: ${fingerprint?.viewport ? `${fingerprint.viewport.width}x${fingerprint.viewport.height}` : 'Unknown'}`,
            `Device Pixel Ratio: ${formatValue(fingerprint?.viewport?.devicePixelRatio)}`,
            `UA Brands: ${formatValue(userAgentData?.brands?.map((brand) => `${brand.brand} ${brand.version}`))}`,
            `UA Mobile: ${formatValue(userAgentData?.mobile)}`,
            `UA Platform: ${formatValue(userAgentData?.platform)}`,
            '',
            `User Agent: ${ua || 'Unknown'}`
        ].join('\n');

        const telegramRes = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            }
        );

        if (!telegramRes.ok) {
            const err = await telegramRes.text();
            console.error('Telegram error:', err);
            return NextResponse.json({ ok: false, error: err }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Visitor track error:', err);
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}
