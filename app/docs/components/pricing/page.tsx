import { createComponentPage } from "@/components/page-builder";
import Pricing_01 from "@/components/kokonutui/pricing-01";
import Pricing_02 from "@/components/kokonutui/pricing-02";
import Pricing_03 from "@/components/kokonutui/pricing-03";
import Pricing_04 from "@/components/kokonutui/pricing-04";
import type { PageConfig } from "@/types/component-page";
import Pricing_05 from "@/components/kokonutui/pricing-05";

const PRICING_CONFIG: PageConfig = {
    title: "Pricing",
    description:
        "A collection of pricing components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/pricing",
    viewType: "grid",
    gridClassName: "grid-cols-1 gap-2 sm:gap-8",
    components: [
        {
            id: 1,
            title: "Basic 01",
            component: <Pricing_01 />,
            fileName: "pricing-01.tsx",
        },
        {
            id: 2,
            title: "Basic 02",
            component: <Pricing_02 />,
            fileName: "pricing-02.tsx",
        },
        {
            id: 3,
            title: "Selective",
            component: <Pricing_03 />,
            fileName: "pricing-03.tsx",
        },
        {
            id: 4,
            title: "Button up",
            component: <Pricing_04 />,
            fileName: "pricing-04.tsx",
        },
        {
            id: 5,
            title: "Gamified",
            component: <Pricing_05 />,
            fileName: "pricing-05.tsx",
        },
    ],
};

const { default: PricingPage, metadata } = createComponentPage(PRICING_CONFIG);

export { metadata };
export default PricingPage;
