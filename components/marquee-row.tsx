"use client";

import { ArrowRight } from "lucide-react";

type PlacementCard = {
    name: string;
    from: string;
    to: string;
    company: string;
};

type MarqueeRowProps = {
    cards: PlacementCard[];
    reverse?: boolean;
};

export function MarqueeRow({ cards, reverse = false }: MarqueeRowProps) {
    const doubled = [...cards, ...cards];

    return (
        <div className="overflow-hidden" aria-hidden>
            <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
                {doubled.map((card, i) => (
                    <div
                        key={i}
                        className="mx-2 flex w-60 flex-shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 shadow-sm"
                    >
                        <div
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                            style={{
                                background: [
                                    "#e36a2f", "#0f7f78", "#132238", "#8b5cf6", "#f59e0b"
                                ][i % 5],
                            }}
                        >
                            {card.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-bold text-foreground">{card.name}</p>
                            <div className="flex items-center gap-1 text-[10px] text-muted">
                                <span className="truncate">{card.from}</span>
                                <ArrowRight size={9} className="flex-shrink-0 text-accent" />
                                <span className="truncate font-semibold text-foreground">{card.to}</span>
                            </div>
                            <p className="mt-0.5 text-[10px] font-bold text-accent">{card.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}