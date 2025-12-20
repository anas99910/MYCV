import { useState, useRef, useEffect } from 'react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', content: 'Welcome to Anas Ben Chikhe\'s Portfolio v2.0.0' },
        { type: 'info', content: 'Type "help" to see available commands.' },
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [output]);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = { type: 'success', content: '' };

        switch (cleanCmd) {
            case 'help':
                response.content = 'Available commands: about, experience, projects, skills, contact, clear, whoami, date';
                break;
            case 'about':
                response.content = 'Navigating to About section...';
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'experience':
                response.content = 'Navigating to Experience section...';
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                response.content = 'Navigating to Projects section...';
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'skills':
                response.content = 'Navigating to Skills section...';
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                response.content = 'Navigating to Contact section...';
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'clear':
                setOutput([]);
                return;
            case 'whoami':
                response.content = 'Anas Ben Chikhe - Technical Field Support Engineer';
                break;
            case 'date':
                response.content = new Date().toString();
                break;
            case '':
                return;
            default:
                response = { type: 'error', content: `Command not found: ${cleanCmd}. Type "help" for list.` };
        }

        setOutput(prev => [...prev, { type: 'command', content: cmd }, response]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full rounded-lg shadow-lg bg-[#1e1e1e] border border-slate-700 overflow-hidden font-mono text-sm h-[350px] flex flex-col" onClick={() => inputRef.current?.focus()}>
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-slate-400 text-xs flex-1 text-center">guest@anas-portfolio:~</div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
                {output.map((line, i) => (
                    <div key={i} className={`mb-1 ${line.type === 'command' ? 'text-slate-300' :
                            line.type === 'error' ? 'text-red-400' :
                                'text-green-400'
                        }`}>
                        {line.type === 'command' && <span className="text-blue-400 mr-2">$</span>}
                        {line.content}
                    </div>
                ))}

                <div className="flex items-center">
                    <span className="text-blue-400 mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-white w-full focus:ring-0 p-0"
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;
