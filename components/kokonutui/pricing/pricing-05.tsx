"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Sword, Trophy, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    name: string;
    description: string;
    icon: React.ReactNode;
}

interface PricingTier {
    name: string;
    price: number;
    description: string;
    features: Feature[];
    highlight?: boolean;
    icon: React.ReactNode;
}

const defaultTiers: PricingTier[] = [
    {
        name: "Rookie Warrior",
        price: 0.99,
        description: "Start your epic adventure with starter gear",
        icon: <Sword className="w-6 h-6 text-emerald-500" />,
        features: [
            {
                name: "Basic Battle Pass",
                description: "Access to starter dungeons and quests",
                icon: <Zap className="w-5 h-5 text-emerald-500" />,
            },
            {
                name: "Rookie Achievements",
                description: "Unlock starter badges and titles",
                icon: <Trophy className="w-5 h-5 text-emerald-500" />,
            },
            {
                name: "Daily Missions",
                description: "3 daily quests with basic loot",
                icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
            },
        ],
    },
    {
        name: "Legendary Hero",
        price: 4.99,
        description: "Become a legend with premium gear and powers",
        highlight: true,
        icon: <Crown className="w-6 h-6 text-emerald-500" />,
        features: [
            {
                name: "Premium Battle Pass",
                description: "Access all dungeons & exclusive raids",
                icon: <Zap className="w-5 h-5 text-emerald-500" />,
            },
            {
                name: "Legendary Collection",
                description: "Rare badges & exclusive titles",
                icon: <Trophy className="w-5 h-5 text-emerald-500" />,
            },
            {
                name: "Epic Quest Line",
                description: "10 daily quests with legendary loot",
                icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
            },
            {
                name: "Hero's Privileges",
                description: "Priority matchmaking & custom gear",
                icon: <Crown className="w-5 h-5 text-emerald-500" />,
            },
        ],
    },
];

export default function Pricing_05() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {defaultTiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "rounded-xl border-2 p-8",
                            "transition-all duration-300 ease-in-out",
                            "hover:scale-[1.02] hover:shadow-xl",
                            "dark:bg-slate-900/50 bg-white/50",
                            "backdrop-blur-sm",
                            tier.highlight
                                ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                                : "border-emerald-200 dark:border-emerald-800/50"
                        )}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={cn(
                                "p-3 rounded-xl transition-colors",
                                "bg-emerald-100 dark:bg-emerald-900/50",
                                "group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50"
                            )}>
                                {tier.icon}
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-300">
                                {tier.name}
                            </span>
                        </div>

                        <div className="mb-6 space-y-2">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                                    ${tier.price}
                                </span>
                                <span className="text-slate-500 dark:text-slate-400">
                                    /month
                                </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                {tier.description}
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {tier.features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className={cn(
                                        "p-2 rounded-lg mt-1",
                                        "transition-colors duration-200",
                                        "bg-emerald-50 dark:bg-emerald-900/30",
                                        "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50"
                                    )}>
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="font-semibold text-slate-900 dark:text-white">
                                            {feature.name}
                                        </div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                            {feature.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            className={cn(
                                "w-full py-6 text-white font-medium text-lg",
                                "transition-all duration-200",
                                "bg-gradient-to-r from-emerald-600 to-emerald-500",
                                "hover:from-emerald-500 hover:to-emerald-400",
                                "shadow-lg shadow-emerald-500/20",
                                "hover:shadow-xl hover:shadow-emerald-500/30",
                                "active:scale-[0.98]"
                            )}
                        >
                            {tier.highlight ? "Become a Legend" : "Begin Adventure"}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
} 