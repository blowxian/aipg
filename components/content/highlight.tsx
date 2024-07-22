import {Blockquote, Box, Em, Grid, Heading, Quote, Section, Text} from "@radix-ui/themes";
import {useTranslations} from 'next-intl';

export default function Highlight() {
    const t = useTranslations('Highlight');

    return (
        <Section className="px-3 md:px-0 !py-6 md:!py-8">
            <Heading as="h2" align="center" className="my-2 md:my-6 !text-xl md:!text-3xl">
                {t("heading")}
            </Heading>
            <Text as="p" mb="3">
                {t("intro")}
            </Text>
            <Blockquote mb="3">
                <Quote>{t("quote1")}</Quote>
            </Blockquote>
            <Text as="p">
                {t("subheading")}
            </Text>

            <Grid className="grid-cols-1 md:!grid-cols-3" gap="3" width="auto">
                <Box>
                    <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl">
                        <Em>{t("section1_heading")}</Em>
                    </Heading>
                    <Text as="p">
                        {t("section1_text")}
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl">
                        <Em>{t("section2_heading")}</Em>
                    </Heading>
                    <Text as="p">
                        {t("section2_text")}
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" align="center" className="my-2 md:my-6 !text-xl md:!text-2xl">
                        <Em>{t("section3_heading")}</Em>
                    </Heading>
                    <Text as="p" mb="3">
                        {t("section3_text")}
                    </Text>
                </Box>
            </Grid>
            <Blockquote my="3">
                <Quote>{t("quote2")}</Quote>
            </Blockquote>
        </Section>
    );
}
