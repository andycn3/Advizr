function ServiceCard({ title, description, icon }) {
    return (
        <div data-name="service-card" className="bg-white p-6 rounded-lg shadow-md hover-scale">
            <div data-name="service-icon" className="w-12 h-12 bg-[#ed6663]/10 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 data-name="service-title" className="text-xl font-semibold mb-3">{title}</h3>
            <p data-name="service-description" className="text-gray-600">{description}</p>
        </div>
    );
}

function Services() {
    const services = [
        {
            title: "AI Strategy Consulting",
            description: "Develop comprehensive AI implementation strategies tailored to your business needs and goals.",
            icon: <svg className="w-6 h-6 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
        },
        {
            title: "Machine Learning Integration",
            description: "Implement cutting-edge machine learning solutions to automate and optimize your processes.",
            icon: <svg className="w-6 h-6 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
        },
        {
            title: "Data Analytics",
            description: "Transform your raw data into actionable insights using advanced analytics and AI.",
            icon: <svg className="w-6 h-6 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
        },
        {
            title: "AI Training & Support",
            description: "Comprehensive training programs and ongoing support for your team's AI initiatives.",
            icon: <svg className="w-6 h-6 text-[#ed6663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
        }
    ];

    return (
        <section id="services" data-name="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 data-name="services-title" className="section-title">Our Services</h2>
                    <p data-name="services-subtitle" className="text-xl text-gray-600">
                        Comprehensive AI solutions to transform your business
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
