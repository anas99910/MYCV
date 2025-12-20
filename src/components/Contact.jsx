import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Section from './ui/Section';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Create the mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        // Open default email client
        window.location.href = `mailto:anas99910@gmail.com?subject=${subject}&body=${body}`;

        // Show confirmation
        alert('Opening your email client to send the message...');

        // Clear form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-600 dark:bg-blue-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="p-10 lg:p-16 text-white">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Let's connect
                            </h2>
                            <p className="mt-4 text-lg text-blue-100 dark:text-blue-200">
                                I'm currently available for new opportunities. Whether you have a question about my experience or want to discuss a potential role, my inbox is always open.
                            </p>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-500 dark:bg-blue-700 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4 text-lg text-blue-50">+212 636 464 682</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-500 dark:bg-blue-700 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4 text-lg text-blue-50">anas99910@gmail.com</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-500 dark:bg-blue-700 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4 text-lg text-blue-50">Casablanca, Morocco</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-10 lg:p-16">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border" placeholder="you@example.com" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border" placeholder="How can I help you?" required></textarea>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
