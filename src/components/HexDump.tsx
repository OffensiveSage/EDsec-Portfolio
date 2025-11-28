"use client";

import { useState, useEffect } from "react";

export default function HexDump() {
    const generateLine = () => {
        if (Math.random() > 0.95) {
            const sector = Math.floor(Math.random() * 999);
            return `--- SECTOR ${sector.toString().padStart(3, '0')} ---`;
        }

        const address = Math.floor(Math.random() * 65535).toString(16).padStart(4, '0').toUpperCase();
        const bytes = Array.from({ length: 8 }, () => {
            const byte = Math.floor(Math.random() * 255).toString(16).padStart(2, '0').toUpperCase();
            return byte;
        }).join(" ");
        return `0x${address}  ${bytes}`;
    };

    const [lines, setLines] = useState<string[]>(() => Array.from({ length: 40 }, generateLine));

    useEffect(() => {
        const interval = setInterval(() => {
            setLines(prev => [...prev.slice(1), generateLine()]);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-sm text-cyber-green/70 overflow-hidden h-full flex flex-col justify-end pointer-events-none select-none w-full">
            <div className="mb-4 text-cyber-neon border-b border-cyber-neon/50 pb-1 text-base font-bold tracking-wider">
                {'//'} MEMORY_CORE_DUMP
            </div>
            <div className="flex flex-col gap-0.5">
                {lines.map((line, i) => (
                    <div key={i} className={`whitespace-pre ${line.startsWith("---") ? "text-cyber-neon font-bold mt-2 mb-2" : ""}`}>
                        {line}
                    </div>
                ))}
            </div>
        </div>
    );
}
