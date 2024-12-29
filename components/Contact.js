function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = React.useState(false); // Controls pop-up visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Handle form submission
            console.log('Form submitted:', formData);

            // Show the "Form Submitted" pop-up
            setIsSubmitted(true);

            // Hide the pop-up after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

            // Reset form
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            reportError(error);
        }
    };

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section id="contact" data-name="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 data-name="contact-title" className="section-title">Get In Touch</h2>
                        <p data-name="contact-subtitle" className="text-xl text-gray-600">
                            Ready to transform your business with AI? Let's talk.
                        </p>
                    </div>
                    <form data-name="contact-form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed6663] focus:ring-2 focus:ring-[#ed6663]/20 outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed6663] focus:ring-2 focus:ring-[#ed6663]/20 outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed6663] focus:ring-2 focus:ring-[#ed6663]/20 outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed6663] focus:ring-2 focus:ring-[#ed6663]/20 outline-none transition-colors"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn-primary">
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Pop-Up Message */}
                    {isSubmitted && (
                        <div
                            className="fixed inset-x-0 top-10 mx-auto w-max p-4 text-center text-black bg-green-500 rounded-lg shadow-lg z-50"
                            style={{ zIndex: 9999 }}
                        >
                            Form Submitted Successfully!
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
