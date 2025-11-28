"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Node {
    id: string;
    status: "LOCKED" | "BYPASSING" | "ACCESS_GRANTED";
}

interface Log {
    id: number;
    msg: string;
    time: string;
}

export default function NetworkStatus() {
    const [nodes, setNodes] = useState<Node[]>([
        { id: "PROXY_01", status: "LOCKED" },
        { id: "FIREWALL_MAIN", status: "LOCKED" },
        { id: "DB_SHARD_04", status: "LOCKED" },
        { id: "AUTH_GATE", status: "LOCKED" },
        { id: "KERNEL_CORE", status: "LOCKED" },
    ]);

    const [logs, setLogs] = useState<Log[]>([]);
    const [animHeights] = useState(() => Array.from({ length: 10 }, () => Math.random() * 100));

    const addLog = (msg: string) => {
        const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setLogs(prev => [{ id: Date.now(), msg, time }, ...prev].slice(0, 15));
    };

    useEffect(() => {
        const nodeInterval = setInterval(() => {
            setNodes((prev) => {
                const newNodes = [...prev];
                const activeIndex = newNodes.findIndex(n => n.status !== "ACCESS_GRANTED");

                if (activeIndex !== -1) {
                    if (newNodes[activeIndex].status === "LOCKED") {
                        newNodes[activeIndex].status = "BYPASSING";
                        addLog(`ATTEMPTING BYPASS ON ${newNodes[activeIndex].id}`);
                    } else if (Math.random() > 0.6) {
                        newNodes[activeIndex].status = "ACCESS_GRANTED";
                        addLog(`ACCESS GRANTED TO ${newNodes[activeIndex].id}`);
                    }
                }
                return newNodes;
            });
        }, 600);

        const logInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const actions = ["PING", "TRACEROUTE", "PACKET_LOSS", "HANDSHAKE", "KEY_EXCHANGE"];
                const target = Math.floor(Math.random() * 999);
                addLog(`${actions[Math.floor(Math.random() * actions.length)]} -> 192.168.0.${target}`);
            }
        }, 300);

        return () => {
            clearInterval(nodeInterval);
            clearInterval(logInterval);
        };
    }, []);

    return (
        <div className="font-mono text-xs w-full h-full flex flex-col justify-between pointer-events-none select-none text-cyber-green/80">

            {/* Top Section: Nodes */}
            <div>
                <div className="mb-4 text-cyber-neon border-b border-cyber-neon/50 pb-1 text-right text-sm font-bold tracking-wider">
                    {/* NETWORK_TOPOLOGY */}
                </div>
                <div className="space-y-3">
                    {nodes.map((node) => (
                        <div key={node.id} className="flex justify-between items-center gap-4">
                            <span className="text-gray-400">{node.id}</span>
                            <span className={`
              ${node.status === "LOCKED" ? "text-red-500" : ""}
              ${node.status === "BYPASSING" ? "text-yellow-500 animate-pulse" : ""}
              ${node.status === "ACCESS_GRANTED" ? "text-cyber-green font-bold" : ""}
            `}>
                                [{node.status === "BYPASSING" ? "..." : node.status}]
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle Section: Visualizer */}
            <div className="py-8 opacity-80">
                <div className="flex justify-between text-[10px] mb-1">
                    <span>CPU_LOAD</span>
                    <span>MEM_ALLOC</span>
                </div>
                <div className="flex gap-2 h-16 items-end">
                    {animHeights.map((height, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-cyber-green"
                            animate={{ height: ["10%", `${height}%`, "30%"] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Section: Logs */}
            <div className="flex-1 overflow-hidden flex flex-col justify-end">
                <div className="mb-2 text-cyber-neon border-b border-cyber-neon/50 pb-1 text-right text-sm font-bold tracking-wider">
                    {/* SYSTEM_LOGS */}
                </div>
                <div className="flex flex-col gap-1">
                    {logs.map((log) => (
                        <div key={log.id} className="flex gap-2 text-[10px] opacity-90">
                            <span className="text-cyber-gray">[{log.time}]</span>
                            <span>{log.msg}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
