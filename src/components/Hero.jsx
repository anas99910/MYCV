import React from 'react';
import Section from './ui/Section';
import Terminal from './ui/Terminal';
import MatrixRain from './ui/MatrixRain';

import { ArrowDown } from 'lucide-react';

const Hero = ({ isDarkMode }) => {
    return (
        <Section className="relative bg-slate-900 dark:bg-black text-white py-24 lg:py-32 overflow-hidden transition-colors duration-300">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isDarkMode && <MatrixRain />}
                <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-8">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 mr-3 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                            Available for IT Support & Field Ops Roles
                        </div>
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                            <span className="block text-slate-100">Hi, I'm</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-gradient-x">
                                Anas Ben Chikhe
                            </span>
                        </h1>
                        <p className="mt-4 text-xl text-slate-300 sm:mt-6 leading-relaxed max-w-2xl">
                            <span className="text-blue-400 font-semibold">Technical Field Support Engineer</span> specialized in incident management, system integration, and delivering exceptional user experiences.
                        </p>
                        <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-5">
                            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 font-sans rounded-lg hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                Contact Me
                            </a>
                            <a href="#experience" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-slate-800/50 border border-slate-700 backdrop-blur-sm font-sans rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                                View Experience
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
                        {/* 3D Scene */}


                        {/* Terminal */}
                        <div className="relative z-10">
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20 pointer-events-none select-none">
                                <span className="text-green-400 font-mono font-bold text-sm tracking-wider mb-1 drop-shadow-lg">TRY ME 🚀</span>
                                <ArrowDown className="text-green-400 w-6 h-6 drop-shadow-lg" />
                            </div>
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-[2px] shadow-2xl animate-pulse">
                                <div className="bg-slate-900 rounded-xl overflow-hidden">
                                    <Terminal />
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
