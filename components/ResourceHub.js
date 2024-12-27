function ResourceCard({ title, description, category, link, icon }) {
    return (
        <div data-name="resource-card" className="bg-white rounded-lg shadow-md overflow-hidden group hover-scale">
            <div data-name="resource-image" className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                <img 
                    src={icon} 
                    alt={title}
                    className="w-32 h-32 object-contain transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1c1c1c]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            <div data-name="resource-content" className="p-6">
                <div data-name="resource-category" className="text-sm text-[#ed6663] font-semibold mb-2">
                    {category}
                </div>
                <h3 data-name="resource-title" className="text-xl font-semibold mb-3">{title}</h3>
                <p data-name="resource-description" className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
    return (
        <div data-name="category-filter" className="flex flex-wrap gap-4 justify-center mb-12">
            <button
                className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === 'all'
                        ? 'bg-[#ed6663] text-white'
                        : 'bg-white text-gray-600 hover:bg-[#ed6663] hover:text-white'
                }`}
                onClick={() => onCategoryChange('all')}
            >
                All Resources
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-6 py-2 rounded-full transition-colors ${
                        activeCategory === category
                            ? 'bg-[#ed6663] text-white'
                            : 'bg-white text-gray-600 hover:bg-[#ed6663] hover:text-white'
                    }`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

function ResourceHub() {
    const [activeCategory, setActiveCategory] = React.useState('all');
    const [resources] = React.useState([
        {
            title: "Foundations of AI",
            description: "Master the fundamental concepts and principles of artificial intelligence.",
            category: "Fundamentals",
            link: "https://www.makingaimakesense.com/foundationsofai",
            icon: "https://app.trickle.so/storage/public/images/usr_0a466af850000001/a6b1107a-3255-486e-b255-36fa2a4f9016.png"
        },
        {
            title: "Machine Learning",
            description: "Explore machine learning algorithms, techniques, and practical applications.",
            category: "Core Concepts",
            link: "https://www.makingaimakesense.com/machinelearning",
            icon: "https://app.trickle.so/storage/public/images/usr_0a466af850000001/d46d7109-a308-411c-baba-d0a50db45731.png"
        },
        {
            title: "Deep Learning",
            description: "Dive into neural networks, deep learning architectures, and advanced applications.",
            category: "Advanced Topics",
            link: "https://www.makingaimakesense.com/deeplearning",
            icon: "https://app.trickle.so/storage/public/images/usr_0a466af850000001/0b0edea5-25fb-4534-aeeb-f8fd8bdbbeed.png"
        },
        {
            title: "Natural Language Processing",
            description: "Learn how AI understands and processes human language.",
            category: "Specialized Skills",
            link: "https://www.makingaimakesense.com/naturallanguageprocessing",
            icon: "https://app.trickle.so/storage/public/images/usr_0a466af850000001/62bb53e3-fe89-4fa9-8ff4-a14b549cb269.png"
        },
        {
            title: "Prompt Engineering",
            description: "Master the art of crafting effective prompts for AI models.",
            category: "Practical Skills",
            link: "https://www.makingaimakesense.com/promptengineering",
            icon: "https://app.trickle.so/storage/public/images/usr_0a466af850000001/2b795a69-9f17-48eb-98c5-7eddcb95d96f.png"
        },
        {
            title: "AI Programming and Tools",
            description: "Get hands-on experience with AI development tools and programming frameworks.",
            category: "Implementation",
            link: "https://www.makingaimakesense.com/aiprogrammingandtools",
            icon: "https://app.trickle.so/storage/public/images/usr_0a466af850000001/39d4f39b-f2ca-41fd-a9c9-6d85129d2a91.png"
        }
    ]);

    const categories = [...new Set(resources.map(resource => resource.category))];

    const filteredResources = activeCategory === 'all'
        ? resources
        : resources.filter(resource => resource.category === activeCategory);

    return (
        <section id="resources" data-name="resource-hub" className="py-20 bg-[#e7edf0]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 data-name="resource-hub-title" className="section-title">AI Resource Hub</h2>
                    <p data-name="resource-hub-subtitle" className="text-xl text-gray-600 mb-8">
                        Explore our curated collection of AI learning resources from Making AI Make Sense
                    </p>
                    <CategoryFilter 
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((resource, index) => (
                        <ResourceCard key={index} {...resource} />
                    ))}
                </div>
            </div>
        </section>
    );
}
