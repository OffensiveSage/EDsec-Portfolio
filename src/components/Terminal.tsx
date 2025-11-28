"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minimize2 } from "lucide-react";

interface TerminalLine {
    id: number;
    text: string;
    type: "input" | "output" | "error";
}

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([
        { id: 0, text: "Welcome to ED_SEC Terminal. Type 'help' for commands.", type: "output" }
    ]);
    const [lineId, setLineId] = useState(1);
    const inputRef = useRef<HTMLInputElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    const commands: Record<string, () => string> = {
        help: () => `Available commands:
  whoami     - Display user information
  skills     - List technical skills
  projects   - Show recent projects
  contact    - Get contact information
  clear      - Clear terminal
  hack       - Initiate hack sequence
  matrix     - Toggle matrix mode
  exit       - Close terminal`,

        whoami: () => `User: Eshwar Desetty
Role: Cyber Security
Status: ACTIVE
Clearance: LEVEL_5`,

        skills: () => `Core Skills:
  [✓] Penetration Testing
  [✓] Network Security
  [✓] SIEM Operations
  [✓] Threat Intelligence
  [✓] Python & Bash Scripting
  [✓] Security Compliance`,

        projects: () => `Recent Projects:
  1. SimplySecure - macOS Security Suite
  2. Energy Sector Threat Intel Analysis
  3. Zero Trust Authentication System`,

        contact: () => `Contact Information:
  Email: eshwar@example.com
  LinkedIn: /in/eshwardesetty
  GitHub: @eshwardesetty
  Status: AVAILABLE_FOR_HIRE`,

        clear: () => {
            setHistory([]);
            return "";
        },

        hack: () => `[INITIATING HACK SEQUENCE]
[████████████████████] 100%
[ACCESS GRANTED]
Welcome to the mainframe...`,

        matrix: () => `[MATRIX MODE ACTIVATED]
Wake up, Neo...
The Matrix has you...`,

        exit: () => {
            setIsOpen(false);
            return "";
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newHistory: TerminalLine[] = [
            ...history,
            { id: lineId, text: `$ ${input}`, type: "input" }
        ];

        const command = input.trim().toLowerCase();
        const output = commands[command];

        if (output) {
            const result = output();
            if (result) {
                newHistory.push({
                    id: lineId + 1,
                    text: result,
                    type: "output"
                });
            }
        } else {
            newHistory.push({
                id: lineId + 1,
                text: `Command not found: ${input}. Type 'help' for available commands.`,
                type: "error"
            });
        }

        setHistory(newHistory);
        setLineId(lineId + 2);
        setInput("");
    };

    return (
        <>
            {/* Terminal Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-40 p-4 bg-cyber-green text-black rounded-full shadow-lg hover:shadow-cyber-green/50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <TerminalIcon className="w-6 h-6" />
            </motion.button>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-24 right-8 w-[600px] max-w-[90vw] h-[400px] bg-cyber-black border-2 border-cyber-green rounded-lg shadow-2xl z-50 flex flex-col"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-cyber-green/10 border-b border-cyber-green/30">
                            <div className="flex items-center gap-2">
                                <TerminalIcon className="w-4 h-4 text-cyber-green" />
                                <span className="text-sm font-mono text-cyber-green">ED_SEC_TERMINAL</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-cyber-green/50 hover:text-cyber-green">
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="text-cyber-green/50 hover:text-red-500">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div
                            ref={historyRef}
                            className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2 scrollbar-thin scrollbar-thumb-cyber-green/30 scrollbar-track-transparent"
                        >
                            {history.map((line) => (
                                <div
                                    key={line.id}
                                    className={`${line.type === "input"
                                        ? "text-cyber-neon"
                                        : line.type === "error"
                                            ? "text-red-500"
                                            : "text-cyber-green/80"
                                        } whitespace-pre-wrap`}
                                >
                                    {line.text}
                                </div>
                            ))}
                        </div>

                        {/* Terminal Input */}
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-cyber-green/30">
                            <span className="text-cyber-neon font-mono">$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent text-cyber-green font-mono outline-none"
                                placeholder="Type a command..."
                                autoFocus
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
