import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItemProps {
    question: string;
    answer: string;
    category?: string;
}

function FAQItem({ question, answer, category }: FAQItemProps) {
    return (
        <AccordionItem
            value={question}
            className="mb-4 bg-white dark:bg-black/5 rounded-xl border border-gray-100 dark:border-gray-800/60 shadow-sm dark:shadow-black/10"
        >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline data-[state=open]:border-b data-[state=open]:border-gray-100 dark:data-[state=open]:border-gray-800/60">
                <div className="flex flex-col gap-2">
                    {category && (
                        <Badge
                            variant="secondary"
                            className="w-fit text-xs font-normal dark:bg-black/10 dark:text-gray-300"
                        >
                            {category}
                        </Badge>
                    )}
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 group-hover:text-primary">
                        {question}
                    </h3>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4 pb-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </AccordionContent>
        </AccordionItem>
    );
}

function Faq03() {
    const faqs: FAQItemProps[] = [
        {
            question: "How do I get started?",
            answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
            category: "Getting Started",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
            category: "Billing",
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
            category: "Pricing",
        },
        {
            question: "How can I contact support?",
            answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
            category: "Support",
        },
    ];

    return (
        <section className="py-16 bg-gray-50/50 dark:bg-black/5 w-full">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 dark:from-primary/90 dark:to-primary/50 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Find answers to common questions about our services
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </Accordion>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Still have questions?
                        </p>
                        <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary dark:bg-primary/90 text-white hover:bg-primary/90 dark:hover:bg-primary/80 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq03;
