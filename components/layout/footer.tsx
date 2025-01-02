import Link from "next/link";
import { Github } from "lucide-react";
import XIcon from "../icons/x-icon";
import Image from "next/image";

interface ProjectLink {
    href: string | null;
    text: string;
    description: string;
    icon: string;
    iconDark?: string;
}

export function Footer() {
    const projectLinks: ProjectLink[] = [
        {
            href: null,
            text: "KokonutUI",
            description: "Beautiful UI components for React",
            icon: "/logo.svg",
            iconDark: "/logo-black.svg",
        },
    ];

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-6">
                    More from Me 👋
                </h3>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col gap-4 sm:w-48">
                        <Link
                            href="https://x.com/dorian_baffier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                        >
                            <XIcon className="h-4 w-4" />
                            <span className="text-sm">Twitter</span>
                        </Link>
                        <Link
                            href="https://github.com/kokonut-labs/kokonutui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            <span className="text-sm">Source Code</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                        {projectLinks.map((project) =>
                            project.href ? (
                                <Link
                                    key={project.text}
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={project.icon}
                                            alt={`${project.text} icon`}
                                            width={20}
                                            height={20}
                                            className="rounded-sm"
                                        />
                                        <h4 className="font-medium text-zinc-900 dark:text-white group-hover:underline">
                                            {project.text}
                                        </h4>
                                    </div>
                                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                        {project.description}
                                    </p>
                                </Link>
                            ) : (
                                <div
                                    key={project.text}
                                    className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={
                                                project.iconDark || project.icon
                                            }
                                            alt={`${project.text} icon`}
                                            width={20}
                                            height={20}
                                            className="rounded-sm dark:hidden"
                                        />
                                        {project.iconDark && (
                                            <Image
                                                src={project.icon}
                                                alt={`${project.text} icon`}
                                                width={20}
                                                height={20}
                                                className="rounded-sm hidden dark:block"
                                            />
                                        )}
                                        <h4 className="font-medium text-zinc-900 dark:text-white">
                                            {project.text}
                                        </h4>
                                    </div>
                                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                        {project.description}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
