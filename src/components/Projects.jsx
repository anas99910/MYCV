import { Terminal, Database, Briefcase, Lock, Calendar, Printer, PieChart, Wallet, TrendingUp } from 'lucide-react';
import Section from './ui/Section';

const Projects = () => {
    return (
        <Section id="projects" className="py-20 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Innovation</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Featured Projects
                    </p>
                </div>

                <div className="space-y-24">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-700 text-emerald-400 text-xs font-bold mb-4">
                                DEPLOYED & IN USE
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">CMN-TECH-PLANNING</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                A robust, dark-mode optimized web application currently automating technician scheduling. Features complex shift rotation logic, temporary assignment tracking, and print-ready monthly exports.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium flex items-center gap-1"><Terminal size={14} /> Vanilla JS</span>
                                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-md text-sm font-medium flex items-center gap-1"><Database size={14} /> Firebase NoSQL</span>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium flex items-center gap-1"><Briefcase size={14} /> Tailwind CSS</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                                            <Lock size={18} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900 dark:text-white">Secure Admin Panel</h5>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Password-protected administration for managing technician rosters, leave balances, and backup/restore functionality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300">
                                            <Calendar size={18} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900 dark:text-white">Smart Rotation Logic</h5>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Automated 5-group rotation algorithm with handling for temporary transfers and holiday indicators.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                            <Printer size={18} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900 dark:text-white">Printable Exports</h5>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Generates clean, high-contrast printable schedules specifically formatted for physical bulletin boards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="rounded-lg shadow-2xl p-1 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black border border-zinc-800 transform rotate-1 hover:rotate-0 hover:shadow-blue-500/20 transition-all duration-500">
                                <div className="bg-zinc-900 h-8 rounded-t-md flex items-center px-4 space-x-2 border-b border-zinc-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-4 bg-zinc-800 w-1/2 h-4 rounded text-[10px] flex items-center px-2 text-zinc-500 font-mono">cmn-tech-planning.app</div>
                                </div>
                                <div className="bg-gradient-to-b from-[#3A3A3A] via-[#202020] to-[#111111] h-80 rounded-b-md overflow-hidden relative p-6 flex flex-col items-center font-sans">
                                    <div className="w-full max-w-xs">
                                        <div className="text-center mb-4">
                                            <div className="text-xs text-zinc-400 tracking-widest mb-1">CMN-TECH-PLANNING</div>
                                            <div className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: 'monospace' }}>ON DUTY TODAY</div>
                                        </div>
                                        <div className="bg-[#2D2D35] border border-white/10 rounded-xl p-4 shadow-lg mb-4">
                                            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                                                <span className="text-zinc-300 font-bold text-sm">📅 TODAY</span>
                                                <span className="bg-[#4A4458] text-[#C7C0E0] text-[10px] px-2 py-0.5 rounded-full border border-[#635C7C]">MIKE GRP</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="bg-[#373741] p-2 rounded flex justify-between items-center border border-white/5">
                                                    <span className="text-xs text-zinc-200">Jhon C.</span>
                                                    <span className="text-[10px] font-bold text-emerald-300">Zone A</span>
                                                </div>
                                                <div className="bg-[#373741] p-2 rounded flex justify-between items-center border border-white/5">
                                                    <span className="text-xs text-zinc-200">Alex</span>
                                                    <span className="text-[10px] font-bold text-blue-300">Zone B</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-2">
                                            <div className="h-8 w-24 bg-zinc-700/50 rounded backdrop-blur-sm border border-white/10"></div>
                                            <div className="h-8 w-24 bg-teal-600/40 rounded backdrop-blur-sm border border-teal-800/50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mt-10 lg:mt-0 order-2 lg:order-1">
                            <div className="bg-slate-900 rounded-lg shadow-2xl p-2 border border-slate-800 transform -rotate-1 hover:rotate-0 hover:shadow-blue-500/20 transition-all duration-500">
                                <div className="bg-slate-800 h-8 rounded-t-md flex items-center px-4 space-x-2 mb-0">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-4 bg-slate-900 w-2/3 h-4 rounded-full"></div>
                                </div>
                                <div className="bg-[#121212] h-64 md:h-80 rounded-b-md overflow-hidden relative p-4 flex flex-col">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-32 h-6 bg-slate-800 rounded"></div>
                                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-[#1e1e1e] p-4 rounded-xl border border-slate-800 h-24">
                                            <div className="w-16 h-3 bg-slate-600 rounded mb-2"></div>
                                            <div className="w-24 h-6 bg-white rounded"></div>
                                        </div>
                                        <div className="bg-[#1e1e1e] p-4 rounded-xl border border-slate-800 h-24">
                                            <div className="w-16 h-3 bg-slate-600 rounded mb-2"></div>
                                            <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
                                                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-[#1e1e1e] rounded-xl border border-slate-800 p-4 flex items-end justify-around gap-2">
                                        <div className="w-8 h-[40%] bg-green-500 rounded-t"></div>
                                        <div className="w-8 h-[70%] bg-yellow-500 rounded-t"></div>
                                        <div className="w-8 h-[50%] bg-purple-500 rounded-t"></div>
                                        <div className="w-8 h-[85%] bg-blue-500 rounded-t"></div>
                                        <div className="w-8 h-[30%] bg-red-500 rounded-t"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Expenso - Sleek Expense Tracker</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                A comprehensive personal finance application providing real-time income and expense tracking with advanced data visualization and budget management capabilities.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-sm font-medium flex items-center gap-1"><Terminal size={14} /> JavaScript</span>
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-md text-sm font-medium flex items-center gap-1"><Database size={14} /> Firebase</span>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium flex items-center gap-1"><Briefcase size={14} /> Tailwind CSS</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                            <PieChart size={18} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900 dark:text-white">Financial Insights</h5>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Interactive bar and pie charts allow users to visualize spending habits and track monthly savings.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                            <Wallet size={18} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900 dark:text-white">Smart Budgeting</h5>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Set monthly budgets with visual progress indicators and recurring expense automation.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                            <TrendingUp size={18} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900 dark:text-white">Data Management</h5>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Includes robust export options (CSV/JSON) and secure, password-gated user authentication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
