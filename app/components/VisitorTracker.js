'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

async function createFingerprint(payload) {
    if (!window.crypto?.subtle) return null;

    const encoded = new TextEncoder().encode(JSON.stringify(payload));
    const digest = await window.crypto.subtle.digest('SHA-256', encoded);

    return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
}

export default function VisitorTracker() {
    const pathname = usePathname();

    useEffect(() => {
        const trackVisitor = async () => {
            const fingerprint = {
                userAgent: navigator.userAgent,
                platform: navigator.platform || null,
                language: navigator.language || null,
                languages: navigator.languages || [],
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
                timezoneOffset: new Date().getTimezoneOffset(),
                hardwareConcurrency: navigator.hardwareConcurrency || null,
                deviceMemory: navigator.deviceMemory || null,
                maxTouchPoints: navigator.maxTouchPoints || 0,
                cookieEnabled: navigator.cookieEnabled,
                doNotTrack: navigator.doNotTrack || null,
                vendor: navigator.vendor || null,
                screen: {
                    width: window.screen.width,
                    height: window.screen.height,
                    availWidth: window.screen.availWidth,
                    availHeight: window.screen.availHeight,
                    colorDepth: window.screen.colorDepth,
                    pixelDepth: window.screen.pixelDepth
                },
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    devicePixelRatio: window.devicePixelRatio || 1
                }
            };

            const fingerprintHash = await createFingerprint(fingerprint);

            fetch('/api/track-visitor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userAgent: navigator.userAgent,
                    fingerprint,
                    fingerprintHash,
                    userAgentData: navigator.userAgentData || null,
                    domain: window.location.hostname,
                    origin: window.location.origin,
                    url: window.location.href,
                    page: pathname,
                    referrer: document.referrer || null
                })
            }).catch(() => {
                // Silently fail — never break the user experience
            });
        };

        trackVisitor().catch(() => {
            fetch('/api/track-visitor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userAgent: navigator.userAgent,
                    domain: window.location.hostname,
                    origin: window.location.origin,
                    url: window.location.href,
                    page: pathname,
                    referrer: document.referrer || null
                })
            }).catch(() => {
                // Silently fail — never break the user experience
            });
        });
    }, [pathname]);

    return null; // Invisible component
}
