import Section from './ui/Section';

const Experience = () => {
    return (
        <Section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Career Path</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Professional Experience
                    </p>
                </div>

                <div className="relative border-l-4 border-blue-200 dark:border-blue-900 ml-4 md:ml-12 space-y-12">
                    <div className="relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[13px] top-0 bg-blue-600 h-6 w-6 rounded-full border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 transition-transform"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">On-Site Technical Support Engineer / Technical Field Support Engineer</h3>
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">2020 - Present</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full-time · Morocco · Hybrid</span>
                            </div>
                        </div>
                        <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">SITA, Mohammed V International Airport | Casablanca</h4>
                        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                            <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc list-inside">
                                <li>Provided Level 1 & 2 technical support for hardware, software, and network issues across airport terminals.</li>
                                <li>Managed incident lifecycle using <span className="font-bold text-slate-800 dark:text-slate-200">ServiceNow</span>, ensuring effective prioritization, tracking, and resolution.</li>
                                <li>Acted as the central support contact for all Moroccan airports, receiving technician calls and handling remote ticket creation and follow-up.</li>
                                <li>Installed and configured airline systems (<span className="font-bold text-slate-800 dark:text-slate-200">Amadeus, HP OPAT, Sabre</span>) on user workstations with proper client-server connections.</li>
                                <li>Deployed customized Windows systems tailored to airport operational requirements.</li>
                                <li>Maintained and troubleshot thermal printers, self-service kiosks (BLS), and automated eGates; performed resets via Dreamware Mini remote.</li>
                                <li>Managed user accounts, network shares, print queues, and antivirus updates using Symantec.</li>
                                <li>Diagnosed and resolved recurring system/network issues; escalated complex cases when necessary.</li>
                                <li>Provided both remote and on-site support in check-in, transit, and boarding areas, as well as airline back offices.</li>
                                <li>Supported IT operations for major clients including <span className="font-bold text-slate-800 dark:text-slate-200">Royal Air Maroc, Emirates, Qatar Airways, Etihad, Saudia, Jet Air Fly, Air France, and ONDA</span>.</li>
                                <li>Conducted preventive and corrective maintenance across all equipment.</li>
                                <li>Produced monthly intervention stats and yearly analysis reports to identify failures and recommend system improvements.</li>
                                <li>Worked with cross-functional IT teams to enhance system stability and incident response.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative pl-8 md:pl-12 group">
                        <div className="absolute -left-[13px] top-0 bg-slate-400 dark:bg-slate-600 h-6 w-6 rounded-full border-4 border-slate-50 dark:border-slate-950 group-hover:bg-blue-400 transition-colors"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">IT Help Desk</h3>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">2019 - 2020</span>
                        </div>
                        <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">SITA, Mohammed V International Airport | Casablanca</h4>
                        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                            <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc list-inside">
                                <li>Managed incident resolution using ServiceNow, reducing average resolution time by <span className="font-bold text-slate-800 dark:text-slate-200">30%</span>.</li>
                                <li>Provided first-line support for hardware, software, and network connectivity issues.</li>
                                <li>Created detailed monthly statistics, leading to a <span className="font-bold text-slate-800 dark:text-slate-200">20%</span> reduction in recurring issues.</li>
                                <li> improved user satisfaction by <span className="font-bold text-slate-800 dark:text-slate-200">15%</span> through effective communication.</li>
                                <li>Collaborated with Level 2/3 engineering teams to escalate and resolve complex technical incidents.</li>
                                <li>Assisted in the onboarding of new staff by setting up workstations and configuring necessary software profiles.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
