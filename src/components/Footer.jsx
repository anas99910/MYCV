import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 dark:bg-black text-slate-400 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Anas Ben Chikhe. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/anas-ben-chikhe-057968131/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="mailto:anas99910@gmail.com" className="hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
