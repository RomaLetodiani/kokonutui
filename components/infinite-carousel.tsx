"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll, {
    type AutoScrollOptionsType,
} from "embla-carousel-auto-scroll";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { memo, useMemo } from "react";

import type { EmblaOptionsType } from "embla-carousel";

export interface CarouselItem {
    id: number;
    title: string;
    href: string;
    component: React.ReactNode;
    count: number;
    span?: 1 | 2 | 3;
    size?: "default" | "wide" | "tall";
}

interface InfiniteCarouselProps {
    items: CarouselItem[];
}

const CarouselItem = memo(function CarouselItem({
    item,
    getWidthClasses,
    getComponentClasses,
}: {
    item: CarouselItem;
    getWidthClasses: (span?: 1 | 2 | 3) => string;
    getComponentClasses: (size?: "default" | "wide" | "tall") => string;
}) {
    return (
        <div className={cn("flex-shrink-0", getWidthClasses(item.span))}>
            <div className="group relative p-3 sm:p-4 h-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 flex flex-col overflow-hidden">
                <div
                    className={cn(
                        "flex-1 flex items-center justify-center mb-3 rounded-lg overflow-hidden",
                        getComponentClasses(item.size)
                    )}
                >
                    <div className="pointer-events-auto w-full h-full flex items-center justify-center">
                        {item.component}
                    </div>
                </div>
                <Link
                    href={item.href}
                    className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800 group/link -mx-4 px-4"
                >
                    <div>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover/link:text-emerald-500 dark:group-hover/link:text-emerald-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                            {item.count} components
                        </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 transition-all duration-300 group-hover/link:text-emerald-700 dark:group-hover/link:text-emerald-400 group-hover/link:rotate-[-35deg]" />
                </Link>
            </div>
        </div>
    );
});

export function InfiniteCarousel({ items }: InfiniteCarouselProps) {
    const isMobile = useIsMobile();
    const displayItems = useMemo(
        () => (isMobile ? items.slice(0, 3) : [...items, ...items]),
        [items, isMobile]
    );

    const options: EmblaOptionsType = useMemo(
        () => ({
            loop: true,
            align: "start",
            containScroll: false,
        }),
        []
    );

    const autoScrollOptions: AutoScrollOptionsType = useMemo(
        () => ({
            speed: 0.5,
            startDelay: 0,
            direction: "forward",
            stopOnInteraction: true,
            stopOnMouseEnter: true,
            stopOnFocusIn: false,
        }),
        []
    );

    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll(autoScrollOptions),
    ]);

    const getWidthClasses = (span?: 1 | 2 | 3) => {
        switch (span) {
            case 3:
                return isMobile
                    ? "w-[500px]"
                    : "w-[600px] md:w-[700px] lg:w-[800px]";
            case 2:
                return isMobile
                    ? "w-[480px]"
                    : "w-[400px] md:w-[500px] lg:w-[600px]";
            default:
                return isMobile
                    ? "w-[460px]"
                    : "w-[300px] md:w-[350px] lg:w-[400px]";
        }
    };

    const getComponentClasses = (size?: "default" | "wide" | "tall") => {
        if (isMobile) return "w-full aspect-[3/2]";
        switch (size) {
            case "wide":
                return "w-full aspect-[2/1]";
            case "tall":
                return "w-full aspect-[4/3]";
            default:
                return "w-full aspect-[3/2]";
        }
    };

    return (
        <div className="relative overflow-hidden py-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 sm:gap-6 backface-hidden">
                    {displayItems.map((item, index) => (
                        <CarouselItem
                            key={`${item.id}-${item.title}-${index}`}
                            item={item}
                            getWidthClasses={getWidthClasses}
                            getComponentClasses={getComponentClasses}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
