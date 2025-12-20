import { Shield, Server, Users } from 'lucide-react';
import Section from './ui/Section';

const About = () => {
    return (
        <Section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16">
                    <div className="lg:text-left text-center">
                        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">About Me</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Dedicated to Operational Excellence
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 lg:mx-0 mx-auto">
                            I am an IT professional based in Casablanca with a passion for solving complex technical issues and optimizing systems.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full ring-4 ring-slate-900/10 dark:ring-white/10 overflow-hidden shadow-2xl">
                                <img
                                    src={`${import.meta.env.BASE_URL}profile-photo.png`}
                                    alt="Anas Ben Chikhe"
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <div className="relative bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-slate-900 dark:text-white">Incident Management</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-slate-500 dark:text-slate-400">
                                Expertise in tracking, prioritizing, and resolving incidents using ServiceNow, ensuring minimal downtime and swift resolution.
                            </dd>
                        </div>

                        <div className="relative bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <Server className="h-6 w-6" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-slate-900 dark:text-white">System Integration</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-slate-500 dark:text-slate-400">
                                Proven track record of deploying software solutions, reducing rollout times by 40% and boosting user adoption.
                            </dd>
                        </div>

                        <div className="relative bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <Users className="h-6 w-6" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-slate-900 dark:text-white">User Support & Training</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-slate-500 dark:text-slate-400">
                                Skilled at simplifying complex IT concepts for non-technical staff, improving overall user satisfaction and efficiency.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </Section>
    );
};

export default About;
