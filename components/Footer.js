function Footer() {
    return (
        <footer data-name="footer" className="bg-[#1c1c1c] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-name="footer-about" className="col-span-1 md:col-span-2">
                        <h3 data-name="footer-logo" className="text-2xl font-bold mb-4">Advizr</h3>
                        <p data-name="footer-description" className="text-gray-400 mb-4">
                            Transforming businesses through innovative AI solutions. We help companies 
                            leverage artificial intelligence to drive growth and efficiency.
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 data-name="footer-links-title" className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-contact">
                        <h4 data-name="footer-contact-title" className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>Email: info@advizr.ca</p>
                        </div>
                    </div>
                </div>
                <div data-name="footer-bottom" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Advizr. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
