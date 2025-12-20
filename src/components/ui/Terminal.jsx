import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import SnakeGame from './SnakeGame';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', content: 'Welcome to AnasOS v1.0.0' },
        { type: 'info', content: 'Type "help" to see available commands.' },
        { type: 'success', content: 'System loaded successfully.' }
    ]);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isMaximized, setIsMaximized] = useState(false);
    const [showSnake, setShowSnake] = useState(false);

    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const commands = {
        help: {
            description: 'List all available commands',
            action: () => {
                return [
                    { type: 'info', content: 'Available commands:' },
                    { type: 'item', content: '  about     - Learn more about me' },
                    { type: 'item', content: '  skills    - View technical expertise' },
                    { type: 'item', content: '  projects  - Browse my portfolio' },
                    { type: 'item', content: '  contact   - Get in touch' },
                    { type: 'item', content: '  snake     - Launch mini-game 🐍' },
                    { type: 'item', content: '  clear     - Clear terminal' },
                    { type: 'item', content: '  date      - Show current date' },
                    { type: 'item', content: '  whoami    - Current user info' }
                ];
            }
        },
        about: {
            description: 'Navigate to About section',
            action: () => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                return [{ type: 'success', content: 'Navigating to About section...' }];
            }
        },
        skills: {
            description: 'Navigate to Skills section',
            action: () => {
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                return [{ type: 'success', content: 'Navigating to Skills section...' }];
            }
        },
        projects: {
            description: 'Navigate to Projects section',
            action: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                return [{ type: 'success', content: 'Navigating to Projects section...' }];
            }
        },
        contact: {
            description: 'Navigate to Contact section',
            action: () => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                return [{ type: 'success', content: 'Navigating to Contact section...' }];
            }
        },
        snake: {
            description: 'Launch Snake Game',
            action: () => {
                setShowSnake(true);
                return [{ type: 'success', content: 'Launching Snake Protocol... Good luck, Pilot! 🕹️' }];
            }
        },
        clear: {
            description: 'Clear terminal output',
            action: () => {
                setOutput([]);
                return [];
            }
        },
        date: {
            description: 'Show current date and time',
            action: () => {
                return [{ type: 'info', content: new Date().toString() }];
            }
        },
        whoami: {
            description: 'Display user info',
            action: () => {
                return [{ type: 'info', content: 'Guest User (You look awesome today!)' }];
            }
        }
    };

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (!trimmedCmd) return;

        setHistory(prev => [...prev, trimmedCmd]);
        setHistoryIndex(-1);

        const newOutput = [...output, { type: 'command', content: `> ${cmd}` }];

        if (commands[trimmedCmd]) {
            const result = commands[trimmedCmd].action();
            if (result) {
                newOutput.push(...result);
            }
        } else {
            newOutput.push({ type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for list.` });
        }

        setOutput(newOutput);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output]);

    return (
        <>
            <div className={`bg-slate-900 rounded-lg shadow-2xl border border-slate-700 overflow-hidden font-mono text-sm transition-all duration-300 ${isMaximized ? 'fixed inset-4 z-50' : 'w-full h-[350px]'}`}>
                {/* Header */}
                <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1.5">
                            <button
                                onClick={() => setIsMaximized(false)}
                                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                                title="Close / Minimize"
                            ></button>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <button
                                onClick={() => setIsMaximized(!isMaximized)}
                                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"
                                title="Maximize"
                            ></button>
                        </div>
                        <div className="ml-3 flex items-center text-slate-400">
                            <TerminalIcon size={14} className="mr-2" />
                            <span>guest@anas-portfolio:~</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {isMaximized && (
                            <span className="text-xs text-slate-500 hidden sm:inline-block mr-2">
                                Press ESC to minimize
                            </span>
                        )}
                        <button
                            onClick={() => setIsMaximized(!isMaximized)}
                            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                            title={isMaximized ? "Minimize" : "Maximize"}
                        >
                            {isMaximized ? (
                                <>
                                    <span className="text-xs font-bold uppercase">Minimize</span>
                                    <Minimize2 size={16} />
                                </>
                            ) : (
                                <Maximize2 size={16} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div
                    className="p-4 h-[calc(100%-40px)] overflow-y-auto custom-scrollbar bg-slate-900/95"
                    onClick={() => inputRef.current?.focus()}
                >
                    {output.map((line, i) => (
                        <div key={i} className={`mb-1 ${line.type === 'command' ? 'text-slate-300' :
                            line.type === 'error' ? 'text-red-400' :
                                line.type === 'success' ? 'text-green-400' :
                                    line.type === 'item' ? 'text-slate-300 pl-4' :
                                        'text-blue-300'
                            }`}>
                            {line.type === 'command' && <span className="text-blue-400 mr-2">$</span>}
                            {line.content}
                        </div>
                    ))}

                    <div className="flex items-center mt-2 group">
                        <span className="text-green-500 mr-2">➜</span>
                        <span className="text-blue-400 mr-2">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none outline-none text-slate-100 w-full font-mono placeholder-slate-600 focus:ring-0 p-0"
                            placeholder="Type a command..."
                            autoFocus
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>

            <AnimatePresence>
                {showSnake && <SnakeGame onClose={() => setShowSnake(false)} />}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
