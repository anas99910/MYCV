import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Clock, HardDrive } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemStatus = () => {
    const [stats, setStats] = useState({
        cpu: 12,
        memory: 24,
        uptime: 0
    });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            setStats(prev => ({
                cpu: Math.min(100, Math.max(5, prev.cpu + (Math.random() * 10 - 5))),
                memory: Math.min(100, Math.max(15, prev.memory + (Math.random() * 4 - 2))),
                uptime: Math.floor((Date.now() - startTime) / 1000)
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const formatUptime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            className="fixed bottom-4 right-4 z-40 hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg p-3 shadow-2xl w-48 font-mono text-xs">
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
                    <span className="text-slate-400 font-bold">SYSTEM STATUS</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between group">
                        <div className="flex items-center text-slate-400">
                            <Cpu size={12} className="mr-2 text-blue-400" />
                            <span>CPU</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-1.5 bg-slate-800 rounded-full mr-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    animate={{ width: `${stats.cpu}%` }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                />
                            </div>
                            <span className="text-blue-300 w-8 text-right">{Math.round(stats.cpu)}%</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between group">
                        <div className="flex items-center text-slate-400">
                            <HardDrive size={12} className="mr-2 text-purple-400" />
                            <span>MEM</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-1.5 bg-slate-800 rounded-full mr-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-purple-500"
                                    animate={{ width: `${stats.memory}%` }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                />
                            </div>
                            <span className="text-purple-300 w-8 text-right">{Math.round(stats.memory)}%</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center text-slate-400">
                            <Clock size={12} className="mr-2 text-green-400" />
                            <span>UPTIME</span>
                        </div>
                        <span className="text-green-300 font-mono">{formatUptime(stats.uptime)}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SystemStatus;
