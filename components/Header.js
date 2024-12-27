function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { navigate } = useRouter();

    const scrollToTop = () => {
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } catch (error) {
            reportError(error);
        }
    };

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
                scrollToTop();
            }
            setIsMenuOpen(false);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <header data-name="header" className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a 
                    href="#/"
                    onClick={(e) => handleNavigation(e, '/')}
                    className="cursor-pointer"
                    data-name="logo"
                >
                    <div className="text-2xl font-bold text-gradient">
                        Advizr
                    </div>
                </a>

                <nav data-name="desktop-nav" className="hidden md:flex items-center space-x-8">
                    <a href="#services" onClick={(e) => handleNavigation(e, '#services')} className="text-gray-800 hover:text-[#ed6663] transition-colors">Services</a>
                    <a href="#resources" onClick={(e) => handleNavigation(e, '#resources')} className="text-gray-800 hover:text-[#ed6663] transition-colors">Resources</a>
                    <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="btn-primary">Contact Us</a>
                </nav>

                <button 
                    data-name="mobile-menu-button"
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div data-name="mobile-menu" className="md:hidden bg-white border-t">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <a href="#services" onClick={(e) => handleNavigation(e, '#services')} className="text-gray-800">Services</a>
                        <a href="#resources" onClick={(e) => handleNavigation(e, '#resources')} className="text-gray-800">Resources</a>
                        <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="btn-primary text-center">Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
}
