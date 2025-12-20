import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigation = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-blue-700 dark:text-blue-500 tracking-tight">ABC<span className="text-slate-800 dark:text-slate-200">.tech</span></span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                {item.name}
                            </a>
                        ))}

                        {/* Live Status Indicator */}
                        <div className="flex items-center bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                            <span className="relative flex h-2.5 w-2.5 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-green-700 dark:text-green-400 whitespace-nowrap">Open to Work</span>
                        </div>

                        {/* Dark Mode Toggle Desktop */}
                        <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Dark Mode">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu button & Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={toggleMenu} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
