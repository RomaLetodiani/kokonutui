import { ThemeToggle } from "@/lib/theme-toggle";
import { Github, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

export async function Header() {
    const star = await fetch(
        "https://api.github.com/repos/kokonut-labs/kokonutui",
        {
            next: {
                revalidate: 3600,
            },
        }
    )
        .then((res) => res.json())
        .then((data) => data.stargazers_count);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-center w-full flex-col">
                <div
                    className={`
                    flex items-center justify-between
                    bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                    dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                    shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                    backdrop-blur-md
                    border-x border-b 
                    border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                    min-w-[300px]
                    rounded-b-[28px]
                    px-4 py-2.5
                    relative
                    transition-all duration-300 ease-in-out
                `}
                >
                    <div className="relative z-10 flex items-center justify-between w-full gap-2">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    width={32}
                                    height={32}
                                    className="hidden dark:block"
                                />
                                <Image
                                    src="/logo-black.svg"
                                    alt="logo"
                                    width={32}
                                    height={32}
                                    className="block dark:hidden"
                                />
                                <span className="hidden sm:block font-semibold">
                                    kokonutUI
                                </span>
                            </Link>
                            <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200">
                                Beta
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <ThemeToggle />|
                            <Link
                                href="https://github.com/kokonut-labs/kokonutui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                        relative z-10
                                        cursor-pointer
                                    flex items-center gap-1
                                    rounded-full
                                    bg-zinc-900 dark:bg-white
                                    hover:bg-gradient-to-r hover:from-zinc-800 hover:to-zinc-600 
                                    dark:hover:bg-gradient-to-r dark:hover:from-zinc-100 dark:hover:to-zinc-300
                                    hover:ring-2 hover:ring-zinc-500/20 
                                    dark:hover:ring-2 dark:hover:ring-zinc-300/20
                                    text-white dark:text-zinc-900
                                    dark:hover:text-zinc-800 hover:text-white
                                    px-3 h-7
                                    transition-all duration-300 ease-in-out
                                    shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]
                                    group justify-center
                                `}
                            >
                                <Github className="w-4 h-4 group-hover:rotate-12" />
                                <span className="text-sm font-medium">
                                    Star
                                </span>
                                <span className="hidden md:block text-sm font-medium">
                                    on Github
                                </span>
                                | <Sparkles className="w-3.5 h-3.5" />
                                <Suspense fallback={null}>
                                    <span className="text-sm font-medium ">
                                        {star}
                                    </span>
                                </Suspense>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
