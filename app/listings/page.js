import Link from 'next/link';

export const metadata = {
    title: "Web Design Services - Ballard Kelly Scott",
    description: "Transparent web design packages with no hidden fees. Built for businesses that want results.",
};

export default function ListingsPage() {
    const services = [
        {
            id: 1,
            title: "Professional Web Design",
            price: "800",
            deliveryTime: "2-3 weeks",
            description: "Perfect for startups and small businesses ready to make their mark online",
            features: [
                "Custom responsive design",
                "Up to 5 pages",
                "SEO optimization",
                "Mobile-friendly layout",
                "Contact form integration",
                "2 rounds of revisions",
                "30-day support",
                "Social media integration"
            ],
            popular: true
        },
        {
            id: 2,
            title: "Premium Web Design",
            price: "1,500",
            deliveryTime: "4-6 weeks",
            description: "For established businesses that need a full-featured, high-performance web presence",
            features: [
                "Everything in Professional",
                "Up to 10 pages",
                "Advanced animations & interactions",
                "E-commerce integration",
                "CMS implementation",
                "Performance optimization",
                "Advanced SEO strategy",
                "60-day support",
                "Free hosting setup",
                "Analytics integration"
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-3">Our Services</h1>
                    <p className="text-xl opacity-90">Straightforward packages, transparent pricing — no surprises</p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`bg-white rounded-2xl p-8 ${service.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-md'
                                    }`}
                            >
                                {service.popular && (
                                    <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                        ⭐ Most Popular
                                    </div>
                                )}

                                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                                <p className="text-gray-600 mb-4">{service.description}</p>

                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-primary">${service.price}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600 mb-6 p-3 bg-blue-50 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Delivery: {service.deliveryTime}</span>
                                </div>

                                <div className="mb-6">
                                    <p className="font-semibold mb-3">What&apos;s Included:</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className={`block w-full py-3 rounded-lg font-semibold text-center transition ${service.popular
                                        ? 'bg-primary text-white hover:bg-primary-dark'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
