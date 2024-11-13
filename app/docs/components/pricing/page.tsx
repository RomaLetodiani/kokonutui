import { createComponentPage } from "@/components/page-builder";
import Pricing_03 from "@/components/kokonutui/pricing-03";
import Pricing_04 from "@/components/kokonutui/pricing-04";
import Pricing_01 from "@/components/kokonutui/pricing-01";
import Pricing_02 from "@/components/kokonutui/pricing-02";

const { default: PricingPage, metadata } = createComponentPage({
    title: "Pricing",
    description:
        "A collection of pricing components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/pricing",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-1 gap-8",
    components: [
        {
            id: 1,
            title: "Basic",
            component: (
                <Pricing_01
                    tier="Pro"
                    price={{ monthly: 42, yearly: 420 }}
                    description="Perfect for growing businesses that need more power and flexibility."
                    features={[
                        { name: "Up to 10 team members", included: true },
                        { name: "Advanced analytics", included: true },
                        { name: "Custom integrations", included: true },
                        { name: "API access", included: true },
                        { name: "24/7 phone support", included: false },
                        { name: "Custom branding", included: false },
                    ]}
                    popular={false}
                />
            ),
            fileName: "pricing-01.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 2,
            title: "Fancy",
            component: (
                <Pricing_02
                    price="4242"
                    description="Ready for your space adventure?"
                />
            ),
            fileName: "pricing-02.tsx",
        },
        {
            id: 3,
            title: "Shiny",
            component: <Pricing_03 price="199" tier="pro" />,
            fileName: "pricing-03.tsx",
        },
        {
            id: 4,
            title: "Popular",
            component: (
                <Pricing_01
                    tier="Pro"
                    price={{ monthly: 42, yearly: 420 }}
                    description="Level up your gaming experience with premium features and rewards"
                    features={[
                        {
                            name: "Unlimited party members",
                            included: true,
                        },
                        {
                            name: "Exclusive character skins",
                            included: true,
                        },
                        {
                            name: "Priority matchmaking",
                            included: true,
                        },
                        {
                            name: "Double XP weekends",
                            included: true,
                        },
                        {
                            name: "Custom game modes",
                            included: true,
                        },
                    ]}
                    popular={true}
                />
            ),
            fileName: "pricing-02.tsx",
        },
        {
            id: 5,
            title: "Default",
            component: (
                <Pricing_04
                    price="399"
                    description="Supercharge your workflow with AI-powered tools and enterprise features"
                />
            ),
            fileName: "pricing-04.tsx",
        },
    ],
});

export { metadata };

export default PricingPage;
