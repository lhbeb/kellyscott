import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Business Information */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Image
                                src="/logo-white.svg"
                                alt="Ballard Kelly Scott Logo"
                                width={240}
                                height={70}
                                className="h-16 w-auto"
                            />
                        </div>
                        <div className="space-y-3 text-gray-300">
                            <p className="text-lg font-semibold text-white mb-4">BUSINESS AND CONTACT INFORMATION</p>
                            <p className="font-medium text-white">BALLARD KELLY SCOTT</p>
                            <p>BallardKellyScott.shop</p>
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:marouanndoumm12@outlook.com" className="hover:text-blue-300 transition-colors">
                                    marouanndoumm12@outlook.com
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                14 SECTEUR 01 KASBAB MEHDIA KENITRA 14020
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+19129231747" className="hover:text-blue-300 transition-colors">
                                    +1 9129231747
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-blue-300 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/listings" className="hover:text-blue-300 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-300 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-300 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Legal</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link href="/terms" className="hover:text-blue-300 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-blue-300 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Ballard Kelly Scott. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
