function Hero() {
    const { navigate } = useRouter();

    const handleNavigation = (e, path) => {
        try {
            e.preventDefault();
            if (path.startsWith('#') && !path.startsWith('#/')) {
                const element = document.querySelector(path);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate(path);
                window.scrollTo(0, 0);
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section data-name="hero" className="pt-24 pb-16 min-h-screen flex items-center bg-[#e7edf0]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center animate-fade-in">
                    <h1 data-name="hero-title" className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Transform Your Business With <span className="text-gradient">AI Solutions</span>
                    </h1>
                    <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-600 mb-8">
                        Expert consulting to implement AI across your organization, 
                        driving innovation and efficiency.
                    </p>
                    <div data-name="hero-cta" className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="btn-primary">
                            Get Started
                        </a>
                        <a href="#/learn-more" onClick={(e) => handleNavigation(e, '/learn-more')} className="px-6 py-3 text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
