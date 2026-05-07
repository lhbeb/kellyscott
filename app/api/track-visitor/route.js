import { NextResponse } from 'next/server';

function getTelegramConfig() {
    return {
        botToken: process.env.TELEGRAM_BOT_TOKEN,
        chatId: process.env.TELEGRAM_CHAT_ID
    };
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

        const { userAgent, page, referrer } = await request.json();

        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0].trim() : (request.headers.get('x-real-ip') || 'Unknown');

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
            `Page: ${page || '/'}`,
            `Referrer: ${referrer || 'Direct'}`,
            '',
            `IP Address: ${ip}`,
            `Device: ${device}`,
            `OS: ${os}`,
            `Browser: ${browser}`
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
