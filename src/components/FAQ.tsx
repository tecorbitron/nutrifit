
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
    {
        question: 'How do i get started with the nutrifit website?',
        answer: 'Visit our homepage and create an account to get started with NutriFit. Explore our nutrition services and products, book consultations, and shop for organic, fresh items. For support, check our FAQ section or contact.',
    },
    {
        question: 'How can i get products from nutrifit?',
        answer: 'To get products from NutriFit, visit our online marketplace. Browse our selection of organic, fresh items, add them to your cart, and proceed to checkout. We deliver in packaging designed to maintain freshness. You can also subscribe for regular deliveries.',
    },
    {
        question: 'How do I schedule a consultation with a nutritionist?',
        answer: 'Scheduling a consultation with a NutriFit nutritionist is simple. Visit our website and go to the consultation section. Choose your nutritionist, select a time, and book online. You’ll receive a confirmation email and can easily reschedule if needed.',
    },
    {
        question: 'Where are the nutrifit clinic branches?',
        answer: 'NutriFit clinic branches are located in several major cities. Visit our website and check the “Our Locations” section for addresses, contact information, maps, and directions. Our customer service team is available for additional assistance.',
    },
];

const FAQ = () => {

    return (
        <div className=" bg-white">
            <div className="flex flex-col text-rich-black items-center py-20 bg-light-gray p-6 max-w-screen-xl mx-auto">
                <h2 className='text-customBlack text-5xl lg:text-6xl font-medium tracking-wide leading-tight'>
                    FAQs
                </h2>
                <div className="w-full mt-10">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <AccordionItem value={"item" + index}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
