import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {ChevronDownIcon} from '@radix-ui/react-icons';
import {Heading} from "@radix-ui/themes";
import {useMessages, useTranslations} from 'next-intl';

const FAQ = () => {
    const t = useTranslations('FAQ');
    const messages = useMessages() as unknown as IntlMessages;

    return (
        <Accordion.Root type="multiple" className="AccordionRoot px-3 md:px-0 !py-3 md:!py-8">
            <Heading as="h2" align="center" className="my-2 md:my-6 !text-xl md:!text-3xl">
                {t("heading")}
            </Heading>
            {messages.FAQ.items.map((item, index) => (
                <Accordion.Item key={index} value={`item-${index}`} className="AccordionItem">
                    <Accordion.Header className="AccordionHeader">
                        <Accordion.Trigger className="AccordionTrigger">
                            {item.question}
                            <ChevronDownIcon className="AccordionChevron" aria-hidden/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        {item.answer}
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
};

export default FAQ;
