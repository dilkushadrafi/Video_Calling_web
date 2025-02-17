import { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How to boost productivity at work?",
            answer: "Making your workday more productive can lead to better results. Here are some tips: Stay organized, prioritize tasks, take breaks, and minimize distractions.",
        },
        {
            question: "What are the best books to read for personal growth?",
            answer: "Reading books can be a great way to enhance personal growth. Some recommended titles include: 'The Power of Now' by Eckhart Tolle and 'Atomic Habits' by James Clear.",
        },
        {
            question: "How to maintain a healthy work-life balance?",
            answer: "Having a balance between work and personal life is crucial for overall well-being. Find time for hobbies, exercise, and relaxation to maintain this balance.",
        },
        {
            question: "How to stay motivated on a challenging project?",
            answer: "Break down the project into smaller tasks, celebrate small victories, and seek support from colleagues to stay motivated and overcome challenges.",
        },
    ];

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">You Have Questions, We Have Answers!</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Have a question in mind? Check out the most common ones below.</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`transition-all duration-300 border border-gray-200 shadow-lg cursor-pointer rounded-lg ${openIndex === index ? 'bg-blue-100' : 'bg-white hover:bg-gray-50'}`} 
                            onClick={() => toggleFAQ(index)}
                        >
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="text-lg font-semibold text-black">{faq.question}</span>
                                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 text-base mt-9">
                    Still have questions on your mind? 
                    <a href="#" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Reach out to us</a> 
                    for personalized assistance.
                </p>
            </div>
        </section>
    );
};

export default Faq;
