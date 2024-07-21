import {Box, Card, Grid, Heading, Inset, Quote, Section, Strong, Tabs, Text} from "@radix-ui/themes";

export default function Scene(){
    return(
        <Section className="px-3 md:px-0 !py-6 md:!py-8">
                <Heading as="h2" align="center" className="my-2 md:my-6 !text-xl md:!text-3xl">
                    Use Cases For Free AI Paragraph Generator
                </Heading>
                <Tabs.Root defaultValue="content_creation">
                    <Tabs.List justify="center">
                        <Tabs.Trigger value="content_creation">
                            <Heading as="h3" className="!text-lg md:!text-xl"><span className="hidden md:inline">Use for Content </span>Creation</Heading>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="academic_writing">
                            <Heading as="h3" className="!text-lg md:!text-xl"><span
                                className="hidden md:inline">Use for </span>Academic<span className="hidden md:inline"> Writing</span></Heading>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="personal_writing">
                            <Heading as="h3" className="!text-lg md:!text-xl"><span
                                className="hidden md:inline">Use for </span>Personal<span
                                className="hidden md:inline"> Writing</span></Heading>
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="content_creation">
                            <Heading as="h4" size="3" align="center" my="3">
                                Quickly generate engaging paragraphs for various types of content.
                            </Heading>
                            <Grid className="grid-cols-1 md:!grid-cols-3" gap="3" width="auto">
                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Blogging</Strong> AI Paragraph Generator can quickly generate engaging and
                                            informative paragraphs for blog posts. This tool can assist in creating compelling
                                            content, saving time and effort for content creators.
                                        </Text>
                                    </Card>
                                </Box>

                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Articles</Strong> Whether it&apos;s news articles, opinion pieces, or feature stories,
                                            the Paragraph Generator can help craft well-structured and engaging paragraphs that
                                            capture the reader&apos;s attention.
                                        </Text>
                                    </Card>
                                </Box>

                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Product Descriptions</Strong> For e-commerce businesses, generating detailed and
                                            appealing product descriptions is crucial. The Paragraph Generator can create
                                            informative and persuasive descriptions highlighting the products&apos; key features and
                                            benefits.
                                        </Text>
                                    </Card>
                                </Box>
                            </Grid>
                            <Text as="p" size="3" mt="3" align="center">
                                <Quote>Using AI Paragraph Generator for content creation can significantly speed up the writing process
                                    and ensure consistency in tone and style.</Quote>
                            </Text>
                        </Tabs.Content>

                        <Tabs.Content value="academic_writing">
                            <Heading as="h4" size="3" align="center" my="3">
                                Assist students and researchers in creating well-structured paragraphs.
                            </Heading>
                            <Grid className="grid-cols-1 md:!grid-cols-3" gap="3" width="auto">
                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Essays</Strong> Students can benefit from Ahrefs&apos; Paragraph Generator when
                                            working on essays. The tool can generate well-structured paragraphs that present key
                                            arguments, evidence, and analysis by providing the necessary instructions.
                                        </Text>
                                    </Card>
                                </Box>

                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Research Articles</Strong> Researchers can use the Paragraph Generator to draft
                                            sections of research articles, such as literature reviews, methodology, and discussion.
                                            This can streamline the writing process and ensure clarity and coherence.
                                        </Text>
                                    </Card>
                                </Box>

                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Papers</Strong> For academic papers, the Paragraph Generator can assist in
                                            creating clear and concise paragraphs that effectively communicate complex ideas and
                                            findings.
                                        </Text>
                                    </Card>
                                </Box>
                            </Grid>
                            <Text as="p" size="3" mt="3" align="center">
                                <Quote>AI Paragraph Generator can be a valuable tool for academic writing, helping to organize thoughts
                                and present information logically.</Quote>
                            </Text>
                        </Tabs.Content>

                        <Tabs.Content value="personal_writing">
                            <Heading as="h4" size="3" align="center" my="3">
                                Help individuals compose coherent and well-structured paragraphs for personal communication.
                            </Heading>
                            <Grid className="grid-cols-1 md:!grid-cols-2" gap="3" width="auto">
                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Emails</Strong> Individuals who need to write professional or personal emails
                                            can leverage Ahrefs&apos; Paragraph Generator. It can help compose coherent and
                                            well-structured paragraphs, ensuring practical expression of thoughts and ideas.
                                        </Text>
                                    </Card>
                                </Box>

                                <Box>
                                    <Card size="2" className="h-full">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: 140,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" wrap="pretty">
                                            <Strong>Personal Letters</Strong> For personal letters, the Paragraph Generator can
                                            assist in crafting heartfelt and meaningful paragraphs that convey emotions and
                                            sentiments effectively.
                                        </Text>
                                    </Card>
                                </Box>
                            </Grid>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
        </Section>
    );
}