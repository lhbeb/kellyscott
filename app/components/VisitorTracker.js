'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Fire and forget — don't block the UI
        fetch('/api/track-visitor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userAgent: navigator.userAgent,
                page: pathname,
                referrer: document.referrer || null
            })
        }).catch(() => {
            // Silently fail — never break the user experience
        });
    }, [pathname]);

    return null; // Invisible component
}
