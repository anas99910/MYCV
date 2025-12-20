import Section from './ui/Section';

const Hero = () => {
    return (
        <Section className="relative bg-slate-900 dark:bg-black text-white py-24 lg:py-32 overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500 bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                            Available for IT Support & Field Ops Roles
                        </div>
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block">Hi, I'm Anas Ben Chikhe</span>
                            <span className="block text-blue-400 mt-2">Technical Field Support Engineer</span>
                        </h1>
                        <p className="mt-4 text-lg text-slate-300 sm:mt-6">
                            Leveraging expertise in incident management, system integration, and user satisfaction to enhance operational efficiency in dynamic environments.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg shadow-lg shadow-blue-900/50 transition-all hover:scale-105">
                                Contact Me
                            </a>
                            <a href="#experience" className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 hover:text-white md:py-4 md:text-lg transition-all">
                                View Experience
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-gradient-to-br from-blue-600 to-slate-800 rounded-lg overflow-hidden p-8 border border-slate-600">
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-4 font-mono text-sm text-blue-100">
                                    <p><span className="text-green-400">$</span> user.name = "Anas Ben Chikhe"</p>
                                    <p><span className="text-green-400">$</span> user.role = "Support Specialist"</p>
                                    <p><span className="text-green-400">$</span> user.location = "Casablanca, MA"</p>
                                    <p><span className="text-green-400">$</span> skills.load([ "ServiceNow", "ITIL", "Network" ])</p>
                                    <p className="animate-pulse text-blue-400">_</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
