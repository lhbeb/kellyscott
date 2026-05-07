'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
    const products = [
        {
            id: 'logix',
            title: 'Logix – Logistic Website UI Figma Template',
            category: 'UI Kit',
            price: 18,
            image: '/lisitings/Logix/photo1.png',
            description: 'A sleek and user-friendly Logistics Website UI Figma Template designed for desktop and mobile.',
            tags: ['Figma', 'UI Kit', 'Logistics', 'Template']
        },
        {
            id: 'ronel',
            title: 'Ronel - NodeJs Landing Page Template',
            category: 'Landing Page',
            price: 18,
            image: '/lisitings/Ronel - NodeJs Landing Page Template/photo1.png',
            description: 'Ronel is a Startup Landing Page, Responsive, quick and easy customizable Modern Startup Landing Page Template that comes with NodeJs pages.',
            tags: ['NodeJs', 'Bootstrap', 'Template', 'Startup']
        },
        {
            id: 'customwebsite',
            title: 'Custom Website Design & Development',
            category: 'Web Design',
            price: 800,
            image: '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/photo1-thumbnail.webp',
            description: 'Professional custom website design and development tailored to your business — responsive, fast, and built to convert.',
            tags: ['Custom', 'Web Design', 'Business', 'Responsive']
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Digital Products</h1>
                        <p className="text-xl sm:text-2xl opacity-90">
                            Premium templates and design resources
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative h-64 bg-slate-100">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-primary">
                                            ${product.price}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
