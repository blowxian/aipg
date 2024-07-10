import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FAQ = () => (
    <Accordion.Root type="multiple" className="AccordionRoot">
        {faqItems.map((item, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="AccordionItem">
                <Accordion.Header className="AccordionHeader">
                    <Accordion.Trigger className="AccordionTrigger">
                        {item.question}
                        <ChevronDownIcon className="AccordionChevron" aria-hidden />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="AccordionContent">
                    {item.answer}
                </Accordion.Content>
            </Accordion.Item>
        ))}
    </Accordion.Root>
);

const faqItems = [
    {
        question: 'Q1: What is AI Paragraph Generator?',
        answer: 'A1: Ahrefs\' Paragraph Generator is an AI-powered tool that generates engaging and informative paragraphs for various types of content, including blog posts, articles, and academic papers.'
    },
    {
        question: 'Q2: How does AI Paragraph Generator work?',
        answer: 'A2: The tool uses a language model that learns patterns, grammar, and vocabulary from large amounts of text data. It then generates human-like text based on a given prompt or input.'
    },
    {
        question: 'Q3: Can AI Paragraph Generator be used for academic writing?',
        answer: 'A3: Yes, students and researchers can use the tool to generate well-structured paragraphs for essays, research articles, and papers.'
    },
    {
        question: 'Q4: What is the benefits of using AI paragraph generators?',
        answer: 'A4: AI paragraph generators offer benefits such as efficiency, versatility, customization, SEO optimization, and overcoming writer\'s block.'
    },
    {
        question: 'Q5: How can I use AI Paragraph Generator effectively?',
        answer: 'A5: Provide clear prompts, review and edit the generated content, and use the tool to supplement your writing process.'
    },
];

export default FAQ;