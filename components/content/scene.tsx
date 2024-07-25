import {Box, Card, Grid, Heading, Inset, Quote, Section, Strong, Tabs, Text} from "@radix-ui/themes";
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Scene() {
    const t = useTranslations('Scene');

    return (
        <Section className="px-3 md:px-0 !py-6 md:!py-8" id="case">
            <Heading as="h2" align="center" className="my-2 md:my-6 pt-10 md:pt-12 !text-xl md:!text-3xl">
                {t("heading")}
            </Heading>
            <Tabs.Root defaultValue="content_creation">
                <Tabs.List justify="center">
                    <Tabs.Trigger value="content_creation">
                        <Heading as="h3" className="!text-lg md:!text-xl">
                            <span className="hidden md:inline">{t("content_creation_tab")}</span>
                        </Heading>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="academic_writing">
                        <Heading as="h3" className="!text-lg md:!text-xl">
                            <span className="hidden md:inline">{t("academic_writing_tab")}</span>
                        </Heading>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="personal_writing">
                        <Heading as="h3" className="!text-lg md:!text-xl">
                            <span className="hidden md:inline">{t("personal_writing_tab")}</span>
                        </Heading>
                    </Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="content_creation">
                        <Heading as="h4" size="3" align="center" my="3">
                            {t("content_creation_heading")}
                        </Heading>
                        <Grid className="grid-cols-1 md:!grid-cols-3" gap="3" width="auto">
                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/blogging.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("blogging_title")}</Strong> {t("blogging_description")}
                                    </Text>
                                </Card>
                            </Box>

                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/articles.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("articles_title")}</Strong> {t("articles_description")}
                                    </Text>
                                </Card>
                            </Box>

                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/product-description.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("product_descriptions_title")}</Strong> {t("product_descriptions_description")}
                                    </Text>
                                </Card>
                            </Box>
                        </Grid>
                        <Text as="p" size="3" mt="3" align="center">
                            <Quote>{t("content_creation_quote")}</Quote>
                        </Text>
                    </Tabs.Content>

                    <Tabs.Content value="academic_writing">
                        <Heading as="h4" size="3" align="center" my="3">
                            {t("academic_writing_heading")}
                        </Heading>
                        <Grid className="grid-cols-1 md:!grid-cols-3" gap="3" width="auto">
                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/essays.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("essays_title")}</Strong> {t("essays_description")}
                                    </Text>
                                </Card>
                            </Box>

                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/research-articles.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("research_articles_title")}</Strong> {t("research_articles_description")}
                                    </Text>
                                </Card>
                            </Box>

                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/papers.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("papers_title")}</Strong> {t("papers_description")}
                                    </Text>
                                </Card>
                            </Box>
                        </Grid>
                        <Text as="p" size="3" mt="3" align="center">
                            <Quote>{t("academic_writing_quote")}</Quote>
                        </Text>
                    </Tabs.Content>

                    <Tabs.Content value="personal_writing">
                        <Heading as="h4" size="3" align="center" my="3">
                            {t("personal_writing_heading")}
                        </Heading>
                        <Grid className="grid-cols-1 md:!grid-cols-2" gap="3" width="auto">
                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/emails.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("emails_title")}</Strong> {t("emails_description")}
                                    </Text>
                                </Card>
                            </Box>

                            <Box>
                                <Card size="2" className="h-full">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '256px',
                                            backgroundColor: 'var(--gray-5)'
                                        }}>
                                            <Image
                                                src="/img/personal-letters.webp"
                                                alt="Bold typography"
                                                width={600} height={500}
                                            />
                                        </div>
                                    </Inset>
                                    <Text as="p" size="3" wrap="pretty">
                                        <Strong>{t("personal_letters_title")}</Strong> {t("personal_letters_description")}
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