import { CommandRotator } from "@/components/command-rotator";
import { BrowseComponentsButton } from "@/components/ui/browse-button";
import Arrow25 from "@/components/icons/arrow25";

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

export function HeroSection() {
    return (
        <div className="space-y-6 text-center pt-4 my-12">
            <div className="inline-block">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                    Copy, Paste, Customize.
                </h1>
                <div className="h-[0.5px] w-full bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-zinc-600 dark:to-zinc-800 mt-2 rounded-full" />
            </div>

            <div className="relative">
                <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                    A collection of modern, interactive, customizable UI
                    components.
                </p>
                <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                    Quick and easy to use.
                    <Arrow25 className="inline-block ml-1 w-6 h-6 align-middle mt-1" />
                </p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
                <div className="relative group">
                    <CommandRotator prePath={prePath} />
                    <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <BrowseComponentsButton />
            </div>
        </div>
    );
}
