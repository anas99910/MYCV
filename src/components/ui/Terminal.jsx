import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import SnakeGame from './SnakeGame';

const welcomeMessages = [
    { type: 'info', content: 'Initializing AnasOS v2.0 (Glass Kernel)...' },
    { type: 'info', content: 'Loading modules... [####################] 100%' },
    { type: 'success', content: 'System Ready.' },
    { type: 'info', content: 'Type "help" to see available commands.' }
];

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isMaximized, setIsMaximized] = useState(false);
    const [showSnake, setShowSnake] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        let timer;
        let index = 0;

        const typeNextMessage = () => {
            if (index < welcomeMessages.length) {
                const msg = welcomeMessages[index];
                setOutput(prev => [...prev, msg]);
                index++;
                timer = setTimeout(typeNextMessage, 600);
            } else {
                setIsTyping(false);
            }
        };

        // Start typing after a small delay
        timer = setTimeout(typeNextMessage, 500);

        return () => clearTimeout(timer);
    }, []);

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
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [output]);

    // Render content based on maximized state
    const terminalNodes = (
        <div className={`backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 shadow-2xl rounded-lg overflow-hidden font-mono text-sm transition-all duration-300 ${isMaximized ? 'fixed inset-4 z-[100]' : 'w-full h-[350px]'}`}>
            {/* Header */}
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                        <button
                            onClick={() => setIsMaximized(false)}
                            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer shadow-sm"
                            title="Close / Minimize"
                        ></button>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                        <button
                            onClick={() => setIsMaximized(!isMaximized)}
                            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer shadow-sm"
                            title="Maximize"
                        ></button>
                    </div>
                    <div className="ml-3 flex items-center text-slate-400 select-none">
                        <TerminalIcon size={14} className="mr-2" />
                        <span className="font-semibold">guest@anas-portfolio:~</span>
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
                ref={scrollRef}
                className="p-4 h-[calc(100%-40px)] overflow-y-auto custom-scrollbar"
                onClick={() => !isTyping && inputRef.current?.focus()}
            >
                {output.map((line, i) => (
                    <div key={i} className={`mb-1 font-mono ${line.type === 'command' ? 'text-slate-300' :
                        line.type === 'error' ? 'text-red-400' :
                            line.type === 'success' ? 'text-green-400' :
                                line.type === 'item' ? 'text-slate-300 pl-4' :
                                    'text-blue-300'
                        }`}>
                        {line.type === 'command' && <span className="text-blue-400 mr-2">$</span>}
                        {line.content}
                    </div>
                ))}

                {!isTyping && (
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
                )}

                {isTyping && (
                    <div className="mt-2 animate-pulse text-blue-400">▍</div>
                )}
            </div>
        </div>
    );

    return (
        <>
            {isMaximized ? (
                <>
                    <div className="w-full h-[350px]" /> {/* Placeholder to prevent layout shift */}
                    {createPortal(terminalNodes, document.body)}
                </>
            ) : (
                terminalNodes
            )}

            <AnimatePresence>
                {showSnake && createPortal(<SnakeGame onClose={() => setShowSnake(false)} />, document.body)}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
