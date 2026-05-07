import Link from 'next/link';

export const metadata = {
    title: "About Us - Ballard Kelly Scott",
    description: "Learn about Ballard Kelly Scott and our mission to deliver exceptional web design services.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Story</h1>
                        <p className="text-xl sm:text-2xl opacity-90">
                            A design studio that builds more than websites
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                            <p className="text-xl leading-relaxed">
                                <span className="font-bold gradient-text">Ballard Kelly Scott</span> started with one belief: your website should do real work for your business — not just exist online. We&apos;ve built our studio around that idea, creating websites that look stunning and are engineered to convert visitors into clients.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Every project we take on is treated like it&apos;s our own business on the line. We obsess over the details — the copy, the layout, the speed, the mobile experience — so you don&apos;t have to. Whether you&apos;re launching a new brand or refreshing an existing one, we bring the same energy and craftsmanship to every engagement.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Based in Tanger, Morocco, we work with clients around the world who want websites that set them apart. Our process is transparent, our timelines are honest, and our designs speak for themselves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Craft Over Shortcuts</h3>
                                <p className="text-gray-600 text-center">
                                    We sweat the details others skip — every pixel, every word, every interaction is intentional.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Your Success Is Our KPI</h3>
                                <p className="text-gray-600 text-center">
                                    Your success is our success. We work closely with you at every stage and celebrate your wins.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Always Evolving</h3>
                                <p className="text-gray-600 text-center">
                                    Design trends move fast. We stay ahead of them so your website never looks dated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Discovery & Strategy</h3>
                                    <p className="text-gray-600 text-lg">
                                        We begin with an in-depth consultation to understand your vision, business goals, and target audience. This forms the foundation of a tailored strategy.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Design & Prototyping</h3>
                                    <p className="text-gray-600 text-lg">
                                        Our designers craft stunning, user-centric interfaces. We then build interactive prototypes, allowing you to visualize and refine the experience before development.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Development & QA</h3>
                                    <p className="text-gray-600 text-lg">
                                        Our developers bring the design to life with clean, efficient code. Rigorous quality assurance ensures your site is fast, responsive, and flawless across all devices.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Launch & Support</h3>
                                    <p className="text-gray-600 text-lg">
                                        We handle the seamless deployment of your new website. Our commitment extends beyond launch with training and ongoing support to ensure your continued success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                            <div>
                                <div className="text-5xl font-bold mb-2">100+</div>
                                <div className="text-xl opacity-90">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">98%</div>
                                <div className="text-xl opacity-90">Client Satisfaction</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">5+</div>
                                <div className="text-xl opacity-90">Years in Business</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to Start?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Let&apos;s have a conversation about your project — no pressure, no hard sell
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 gradient-primary text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
