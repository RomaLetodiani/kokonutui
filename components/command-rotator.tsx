"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function CommandRotator({ prePath }: { prePath: string }) {
    const [commandIndex, setCommandIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const commandPrefixes = ["bunx", "npx"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCommandIndex((prev) => (prev + 1) % commandPrefixes.length);
                setIsTransitioning(false);
            }, 150);
        }, 1500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="px-3 sm:px-4 py-2 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="sm:flex sm:items-center sm:space-x-1">
                <span className="inline-block">
                    <span
                        className={cn(
                            "inline-block transition-all duration-300 font-semibold text-blue-500 dark:text-blue-400",
                            isTransitioning
                                ? "opacity-0 -translate-y-1"
                                : "opacity-100 translate-y-0"
                        )}
                    >
                        {commandPrefixes[commandIndex]}
                    </span>
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                    {" "}
                    shadcn add{" "}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300">
                    {prePath}
                </span>
                <span className="text-orange-600 dark:text-orange-300">
                    /r/my-component.json
                </span>
            </div>
        </div>
    );
}
