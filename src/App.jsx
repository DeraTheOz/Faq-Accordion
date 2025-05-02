import { useState } from 'react';

const faqs = [
    {
        title: 'What is Frontend Mentor, and how will it help me?',
        text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        title: 'Is Frontend Mentor free?',
        text: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
    },
    {
        title: 'Can I use Frontend Mentor projects in my portfolio?',
        text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
];

function App() {
    return (
        <div className="max-w-[37.5rem] bg-white rounded-2xl text-purple600 p-6 shadow-lg mt-28 sm:mt-24 lg:mt-40 lg:mb-4">
            <Accordion data={faqs} />
        </div>
    );
}

function Accordion({ data }) {
    const [curOpen, setCurOpen] = useState(null);

    return (
        <>
            <div className="flex items-center gap-6 mt-1.5 mb-6">
                <img
                    src="/assets/images/icon-star.svg"
                    alt="Icon Star"
                    className="w-7 h-7"
                />
                <h1 className="text-4xl text-purple950 font-extrabold">FAQs</h1>
            </div>

            {data.map((el, i) => (
                <AccordionItem
                    faq={el}
                    index={i}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    key={crypto.randomUUID()}>
                    {el.text}
                </AccordionItem>
            ))}
        </>
    );
}

function AccordionItem({ faq, index, curOpen, onOpen, children }) {
    const isOpen = index === curOpen;

    function handleIsOpen() {
        onOpen(isOpen ? null : index);
    }

    return (
        <div
            className="grid grid-cols-4 items-center py-6 border-b-2 border-purple100 last:border-b-0 cursor-pointer transition-all ease-in-out duration-500"
            onClick={handleIsOpen}>
            <p
                className={`${
                    isOpen ? 'open' : ''
                } col-start-1 col-end-4 text-purple950 font-bold leading-normal transition-colors ease-in duration-150 hover:text-purple-500`}>
                {faq.title}
            </p>
            <img
                src={`/assets/images/${
                    isOpen ? 'icon-minus' : 'icon-plus'
                }.svg`}
                alt="Toggle Icon"
                className="ml-auto"
            />

            {isOpen && (
                <p
                    className={`${
                        isOpen ? 'animate-expand' : ''
                    } col-start-1 col-end-5 text-sm overflow-hidden`}>
                    {children}
                </p>
            )}
        </div>
    );
}

export default App;
