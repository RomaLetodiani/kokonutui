import {
    SmilePlus,
    Check,
    CheckCheck,
    MoreHorizontal,
    Send,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Message {
    id: string;
    content: string;
    sender: {
        name: string;
        avatar: string;
        isOnline: boolean;
    };
    timestamp: string;
    status: "sent" | "delivered" | "read";
    reactions?: Array<{
        emoji: string;
        count: number;
        reacted: boolean;
    }>;
}

interface Card04Props {
    chatName?: string;
    messages?: Message[];
}

export default function Card04({
    chatName = "Team Chat",
    messages = [
        {
            id: "1",
            content: "Hey team! I've just pushed the latest design changes 🎨",
            sender: {
                name: "Alex Chen",
                avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
                isOnline: true,
            },
            timestamp: "10:24 AM",
            status: "read",
            reactions: [
                { emoji: "👍", count: 2, reacted: true },
                { emoji: "🎉", count: 1, reacted: false },
            ],
        },
        {
            id: "2",
            content: "Looking great! The new color scheme is perfect",
            sender: {
                name: "Sarah Kim",
                avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
                isOnline: true,
            },
            timestamp: "10:26 AM",
            status: "delivered",
        },
    ],
}: Card04Props) {
    return (
        <div className="group relative w-full max-w-md mx-auto h-[500px]">
            <div
                className="rounded-lg border relative overflow-hidden border-zinc-200/80 dark:border-zinc-800/80 
                bg-gradient-to-br from-white/80 to-white/50 dark:from-zinc-900/80 dark:to-zinc-900/50 backdrop-blur-md
                h-full flex flex-col"
            >
                <div className="border-b border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500
                                    flex items-center justify-center text-white font-medium"
                                >
                                    {chatName.charAt(0)}
                                </div>
                                <div
                                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500
                                    ring-2 ring-white dark:ring-zinc-900"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    {chatName}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    3 members • 2 online
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <MoreHorizontal className="w-5 h-5 text-zinc-500" />
                        </button>
                    </div>
                </div>

                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className="flex items-start gap-3 group/message"
                        >
                            <Image
                                src={message.sender.avatar}
                                alt={message.sender.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {message.sender.name}
                                    </span>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                        {message.timestamp}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                    {message.content}
                                </p>
                                {message.reactions && (
                                    <div className="flex items-center gap-1 mt-1">
                                        {message.reactions.map((reaction) => (
                                            <button
                                                type="button"
                                                key={reaction.emoji}
                                                className={`px-2 py-0.5 rounded-full text-xs
                                                    ${
                                                        reaction.reacted
                                                            ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                                                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                                    }`}
                                            >
                                                {reaction.emoji}{" "}
                                                {reaction.count}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-1">
                                {message.status === "read" && (
                                    <CheckCheck className="w-4 h-4 text-blue-500" />
                                )}
                                {message.status === "delivered" && (
                                    <Check className="w-4 h-4 text-zinc-400" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-zinc-200/10 dark:border-zinc-800/50">
                    <div className="relative flex w-full items-center gap-2">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Write a message..."
                                className="w-full px-4 py-2 rounded-lg
                                    bg-zinc-50 dark:bg-zinc-800/50 
                                    border border-zinc-200 dark:border-zinc-700/50
                                    focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600
                                    placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                                    pr-10"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full 
                                hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50"
                            >
                                <SmilePlus className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                            </button>
                        </div>
                        <Button
                            type="button"
                            className=" 
                                    bg-zinc-800 hover:bg-zinc-700 
                                    dark:bg-zinc-700 dark:hover:bg-zinc-600 
                                    text-zinc-100 dark:text-zinc-200 
                                    transition-colors shadow-sm rounded-xl"
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
