'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitted');
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', formData);

        // Reset form
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
            setStatus('');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Start the Conversation</h1>
                        <p className="text-xl sm:text-2xl opacity-90">
                            Tell us about your project — the first consultation is always free
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Email</h3>
                                            <a href="mailto:marouanndoumm12@outlook.com" className="text-primary hover:text-primary-dark text-lg">
                                                marouanndoumm12@outlook.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                            <a href="tel:+19129231747" className="text-primary hover:text-primary-dark text-lg">
                                                +1 9129231747
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Address</h3>
                                            <p className="text-gray-700 text-lg">
                                                14 SECTEUR 01 KASBAB MEHDIA KENITRA 14020
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                                    <div className="space-y-2 text-gray-700">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span className="font-semibold">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
                                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

                                {status === 'submitted' && (
                                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-primary-dark">
                                        Thank you for your message! We&apos;ll get back to you soon.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Interested In *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="professional">Professional Web Design ($800)</option>
                                            <option value="premium">Premium Web Design ($1,500)</option>
                                            <option value="custom">Custom Solution</option>
                                            <option value="consultation">Free Consultation</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 gradient-primary text-white rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map/Additional Info Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div>
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                                <p className="text-gray-600">We respond to every enquiry within 24 hours — usually faster</p>
                            </div>

                            <div>
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                                <p className="text-gray-600">No commitment required — just an honest conversation about your project</p>
                            </div>

                            <div>
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                                <p className="text-gray-600">Zero cookie-cutter templates — every project is built for your specific goals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
