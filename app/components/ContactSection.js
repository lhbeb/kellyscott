import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Let&apos;s Build Something Great
                    </h2>
                    <p className="text-xl text-white/80">
                        Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s make it happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {/* Email */}
                    <a
                        href="mailto:marouanndoumm12@outlook.com"
                        className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Email Us</p>
                        <p className="text-white font-bold text-lg break-all group-hover:underline underline-offset-2 transition-all">
                            marouanndoumm12@outlook.com
                        </p>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+19129231747"
                        className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Call Us</p>
                        <p className="text-white font-bold text-2xl group-hover:underline underline-offset-2 transition-all">
                            +1 9129231747
                        </p>
                    </a>

                    {/* Address */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Visit Us</p>
                        <p className="text-white font-bold text-lg leading-snug">
                            14 SECTEUR 01 KASBAB MEHDIA<br />
                            KENITRA 14020
                        </p>
                    </div>

                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                        Book a Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}
