import { GraduationCap, Terminal } from 'lucide-react';
import Section from './ui/Section';

const Skills = () => {
    return (
        <Section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-blue-600 dark:text-blue-400" /> Education
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
                                <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">2023</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">ALX Software Engineering</h4>
                                <p className="text-slate-600 dark:text-slate-400">ALX Africa</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
                                <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">2019 - 2020</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Professional Bachelor's Degree</h4>
                                <p className="text-slate-600 dark:text-slate-400">Computer Science | ISTA Roches noires</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                            <Terminal className="mr-3 text-blue-600 dark:text-blue-400" /> Areas of Expertise
                        </h3>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-slate-700 dark:text-slate-300">Incident Tracking (ServiceNow)</span>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Expert</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                        <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-slate-700 dark:text-slate-300">Systems Integration</span>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Advanced</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                        <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-slate-700 dark:text-slate-300">IT Security (GPO, Antivirus)</span>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Advanced</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                        <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-slate-700 dark:text-slate-300">Technical Support (L1/L2)</span>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Expert</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                        <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Languages</h4>
                                <div className="flex gap-4 flex-wrap">
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">Arabic (Native)</span>
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">French (Professional)</span>
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">English (Professional)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
