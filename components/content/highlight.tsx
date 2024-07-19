import {Blockquote, Em, Heading, Quote, Section, Text} from "@radix-ui/themes";

export default function Highlight() {
    return (
        <Section className="px-3 md:px-0 !py-6 md:!py-8">
            <Heading as="h2" align="center" className="my-2 md:my-6 !text-xl md:!text-3xl">Other Forms of Written Communication</Heading>
            <Text as="p" mb="3">
                Whether it&apos;s writing a speech, a diary entry, or a social media post, the Paragraph Generator can
                provide a starting point and help organize thoughts into coherent paragraphs.
            </Text>
            <Blockquote mb="3">
                <Quote>Using AI&apos; Paragraph Generator for personal writing can save time and ensure that your
                    communication is clear and impactful.</Quote>
            </Blockquote>
            <Text as="p">
                The Technology Behind AI&apos; Paragraph Generator
            </Text>
            <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl"><Em>Advanced AI Technology</Em></Heading>
            <Text as="p">
                AI Paragraph Generator uses a large language model that learns patterns, grammar, and vocabulary from
                large amounts of text data. So it can generate human-like text based on a given prompt or input.
            </Text>
            <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl"><Em>what is Natural Language Processing (NLP)</Em></Heading>
            <Text as="p">
                The tool&apos;s NLP capabilities ensure the generated text is contextually rich and reader-friendly, making
                it suitable for various writing needs.
            </Text>
            <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl"><Em>what is Machine Learning Models</Em></Heading>
            <Text as="p" mb="3">
                The Paragraph Generator continuously improves to provide the most relevant and high-quality content,
                adapting to different writing styles and tones.
            </Text>
            <Blockquote mb="3">
                <Quote>The technology behind AI&apos; Paragraph Generator combines advanced NLP and machine learning
                    to produce high-quality, coherent paragraphs.</Quote>
            </Blockquote>
        </Section>
    )
}