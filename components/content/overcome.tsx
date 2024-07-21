import {Blockquote, Box, Em, Grid, Heading, Quote, Section, Text} from "@radix-ui/themes";

export default function Overcome() {
    return (
        <Section className="px-3 md:px-0 !py-6 md:!py-8">
            <Heading as="h2" align="center" className="my-2 md:my-6 !text-xl md:!text-3xl">How To Overcoming
                Writer&apos;s Block</Heading>
            <Text as="p" mb="3">
                AI paragraph generators provide a starting point for writers struggling with inspiration or facing tight
                deadlines, helping to overcome writer&apos;s block.
            </Text>
            <Blockquote mb="3">
                <Quote>AI paragraph generators offer significant advantages, including efficiency, versatility,
                    customization, and SEO optimization.</Quote>
            </Blockquote>
            <Text as="p">
                How to Use an AI Paragraph Generator Effectively
            </Text>
            <Grid className="grid-cols-1 md:!grid-cols-3" gap="3" width="auto">
                <Box>
                    <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl"><Em>Provide Clear
                        Prompts</Em></Heading>
                    <Text as="p">
                        To get the best results, provide clear and specific prompts or topics to guide the AI in
                        generating
                        relevant content.
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl"><Em>Review and
                        Edit</Em></Heading>
                    <Text as="p">
                        Always review and edit the generated content to ensure accuracy and alignment with your goals.
                        AI-generated content may require fact-checking and refinement.
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl"><Em>Use as a
                        Supplement</Em></Heading>
                    <Text as="p" mb="3">
                        Use the tool to supplement your writing process, not a complete replacement for human creativity
                        and
                        expertise. AI can assist but should not replace the unique insights and personal touch that
                        human
                        writers bring.
                    </Text>
                </Box>
            </Grid>
            <Blockquote my="3">
                <Quote>Using AI paragraph generators effectively involves providing clear prompts, reviewing and
                    editing the content, and using the tool to supplement human creativity.</Quote>
            </Blockquote>
        </Section>
    )
}