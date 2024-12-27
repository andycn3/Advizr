function LearnMoreHero() {
    const { navigate } = useRouter();

    const scrollToServices = () => {
        try {
            const servicesSection = document.getElementById('services-overview');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section data-name="learn-more-hero" className="pt-40 pb-20 min-h-[50vh] flex items-center bg-[#e7edf0]">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center animate-fade-in relative">
                    <h1 data-name="hero-title" className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        Empowering Businesses with AI – <span className="text-gradient">Unlock Efficiency, Innovation, and Growth</span>
                    </h1>
                    <div className="mt-6">
                        <button 
                            onClick={scrollToServices}
                            className="btn-primary"
                        >
                            Explore Our Services
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 transform translate-y-16">
                        <button 
                            onClick={() => navigate('/')}
                            className="bg-white px-4 py-2 text-sm border-2 border-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            ← Back
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhatWeDo() {
    return (
        <section data-name="what-we-do" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        At Advizr, we specialize in AI-driven consulting to help businesses optimize processes, reduce costs, and drive innovation.
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Our approach is tailored to each client's unique needs, ensuring that AI solutions are perfectly aligned with your business objectives and growth strategy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-[#ed6663]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Automation</h3>
                            <p className="text-gray-600 text-sm">Streamline operations with intelligent automation</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-[#ed6663]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
                            <p className="text-gray-600 text-sm">Make data-driven decisions with confidence</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-[#ed6663]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
                            <p className="text-gray-600 text-sm">Seamless implementation of AI solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ title, description, icon }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-[#ed6663]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ed6663] group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <a href="#contact" className="text-[#ed6663] font-semibold hover:text-[#e95451] transition-colors text-sm">
                Learn More →
            </a>
        </div>
    );
}

function HowWeHelp() {
    const services = [
        {
            title: "AI Strategy & Roadmap",
            description: "Developing AI blueprints aligned with your business goals.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
        },
        {
            title: "Custom AI Solutions",
            description: "Building tailored models to automate tasks and enhance workflows.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
        },
        {
            title: "Workplace AI Integration",
            description: "Seamless deployment and training for AI adoption.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
        }
    ];

    return (
        <section id="services-overview" data-name="how-we-help" className="py-16 bg-[#e7edf0]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How We Help Businesses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ResourceSection() {
    return (
        <section data-name="resource-section" className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Learn More About AI?</h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Explore free resources, tutorials, and AI guides through our partner platform.
                </p>
                <a 
                    href="#resources"
                    className="btn-primary inline-block"
                >
                    Visit AI Resource Hub
                </a>
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section data-name="final-cta" className="py-16 bg-[#e7edf0]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Unlock AI Potential?</h2>
                <a 
                    href="#contact"
                    className="btn-primary inline-block"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
}

function LearnMore() {
    return (
        <div data-name="learn-more-page">
            <LearnMoreHero />
            <WhatWeDo />
            <HowWeHelp />
            <ResourceSection />
            <FinalCTA />
        </div>
    );
}
