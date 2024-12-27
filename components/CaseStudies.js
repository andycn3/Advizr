function CaseStudyCard({ title, description, industry, result }) {
    return (
        <div data-name="case-study-card" className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
            <div data-name="case-study-content" className="p-6">
                <div data-name="case-study-industry" className="text-sm text-[#ed6663] font-semibold mb-2">
                    {industry}
                </div>
                <h3 data-name="case-study-title" className="text-xl font-semibold mb-3">{title}</h3>
                <p data-name="case-study-description" className="text-gray-600 mb-4">{description}</p>
                <div data-name="case-study-result" className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-semibold">{result}</span>
                </div>
            </div>
        </div>
    );
}

function CaseStudies() {
    const caseStudies = [
        {
            title: "Manufacturing Efficiency Boost",
            description: "Implemented AI-powered predictive maintenance system for a leading manufacturer.",
            industry: "Manufacturing",
            result: "45% reduction in downtime"
        },
        {
            title: "Healthcare Data Analysis",
            description: "Developed ML models for patient diagnosis prediction and resource optimization.",
            industry: "Healthcare",
            result: "30% improved accuracy"
        },
        {
            title: "Retail Customer Insights",
            description: "Created AI-driven customer behavior analysis platform for retail chain.",
            industry: "Retail",
            result: "2.5x ROI increase"
        }
    ];

    return (
        <section id="case-studies" data-name="case-studies" className="py-20 bg-[#e7edf0]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 data-name="case-studies-title" className="section-title">Case Studies</h2>
                    <p data-name="case-studies-subtitle" className="text-xl text-gray-600">
                        Real results from our AI implementations
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={index} {...study} />
                    ))}
                </div>
            </div>
        </section>
    );
}
