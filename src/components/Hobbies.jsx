
import { Cpu, Gamepad2, Video, Code, Heart } from 'lucide-react';
import Section from './ui/Section';

const Hobbies = () => {
    const hobbies = [
        {
            title: "Workstation & PC Building",
            description: "Building custom high-performance workstations and gaming rigs. Expert in hardware selection, cable management, and thermal optimization.",
            icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            tags: ["Hardware", "Overclocking", "Diagnostics"]
        },
        {
            title: "Gaming",
            description: "Passionate gamer appreciating immersive storytelling and competitive strategy. Understanding game mechanics and user engagement.",
            icon: <Gamepad2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
            tags: ["Strategy", "Teamwork", "Problem Solving"]
        },
        {
            title: "Video Editing",
            description: "Creating engaging digital content and visual storytelling. Proficient in cutting, color grading, and adding visual effects.",
            icon: <Video className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
            tags: ["Editing", "Visual FX", "Storytelling"]
        },
        {
            title: "Programming",
            description: "Continuously learning new technologies and building personal projects. turning ideas into functional code.",
            icon: <Code className="w-8 h-8 text-green-600 dark:text-green-400" />,
            tags: ["Development", "Learning", "Innovation"]
        }
    ];

    return (
        <Section id="hobbies" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase flex justify-center items-center gap-2">
                        <Heart className="w-4 h-4" /> Personal Interests
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Wait, There's More!
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
                        Beyond the technical support and engineering, here's what fuels my creativity and passion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 group">
                            <div className="mb-4 p-3 bg-white dark:bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {hobby.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{hobby.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                                {hobby.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {hobby.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hobbies;
