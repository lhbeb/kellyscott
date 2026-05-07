'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Launch Website Studio",
      price: "$650",
      features: [
        "Custom responsive website",
        "Up to 5 core pages",
        "Search-ready page structure",
        "Mobile-first layout",
        "Inquiry form setup",
        "2 focused revision rounds",
        "30 days of launch support"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Growth Website Studio",
      price: "$1,250",
      features: [
        "Everything in Launch Website Studio",
        "Up to 10 strategic pages",
        "Polished motion and interactions",
        "Online sales or booking support",
        "Editable content system",
        "Speed and conversion refinement",
        "60 days of post-launch support",
        "Hosting setup guidance"
      ],
      popular: false
    }
  ];

  const products = [
    {
        id: 'logix',
        title: 'Logix – Logistic Website UI Figma Template',
        category: 'UI Kit',
        price: 18,
        image: '/lisitings/Logix/photo1.png',
        description: 'A polished Figma kit for logistics brands that need a sharp, trustworthy web presence.',
        tags: ['Figma', 'UI Kit']
    },
    {
        id: 'ronel',
        title: 'Ronel - NodeJs Landing Page Template',
        category: 'Landing Page',
        price: 18,
        image: '/lisitings/Ronel - NodeJs Landing Page Template/photo1.png',
        description: 'A responsive landing page template for startups that need a clean launch page fast.',
        tags: ['NodeJs', 'Template']
    },
    {
        id: 'customwebsite',
        title: 'Custom Website Design and Development',
        category: 'Web Design',
        price: 800,
        image: '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/photo1-thumbnail.webp',
        description: 'A tailored website build for businesses that want a clear, credible online storefront.',
        tags: ['Custom', 'Business']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-blue-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ballard Kelly Scott Builds
              <span className="gradient-text block mt-2">Blue-Chip Websites for Ambitious Brands</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We design crisp, fast, conversion-focused websites and digital templates for teams ready to look more established online. Custom builds start at <span className="font-bold text-primary bg-secondary px-1.5 py-0.5 rounded">$650</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 gradient-primary text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Plan My Website
              </Link>
              <Link
                href="/listings"
                className="px-8 py-4 bg-secondary text-primary-dark rounded-full font-semibold text-lg border-2 border-secondary hover:bg-secondary-dark transition-all duration-300 w-full sm:w-auto"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Listing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Website Packages With a Clear Path to Launch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lean starter builds from $650, expanded growth sites from $1,250, and no vague “request a quote” guessing games
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden card-hover ${service.popular ? 'ring-2 ring-primary' : ''
                  }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-semibold">
                    Best Starting Point
                  </div>
                )}

                <div className="p-8 sm:p-10">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold gradient-text">{service.price}</span>
                    <span className="text-gray-500 ml-2">project rate</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full py-4 rounded-full font-semibold text-center text-lg transition-all duration-300 ${service.popular
                      ? 'gradient-primary text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                  >
                    Start a Conversation
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg"
            >
              Compare All Packages
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Digital Products for Faster Online Launches</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready-made templates and custom website options curated for founders, service brands, and growing teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-52 bg-slate-100 flex-shrink-0">
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
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-1">
                    {product.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    {product.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-bold text-primary">${product.price}</span>
                    <span className="text-primary font-semibold flex items-center gap-2">
                      See Details
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg"
            >
              Browse Product Library
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Brands Choose Ballard Kelly Scott</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We pair calm strategy with clean design so your website feels trustworthy from the first click
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Clear Paths to Action</h3>
              <p className="text-gray-600">
                Each section is written and arranged to help visitors understand your offer and take the next step.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Made for Modern Browsing</h3>
              <p className="text-gray-600">
                Your site is shaped for phones, tablets, and desktops so the experience stays sharp wherever people find you.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lean, Fast, and Launch-Ready</h3>
              <p className="text-gray-600">
                We keep builds focused and performance-minded, giving you a site that loads quickly and feels easy to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
