import {Grid, Heading, Section, Text} from "@radix-ui/themes";
import {GearIcon, MagicWandIcon, MixerHorizontalIcon, RocketIcon} from "@radix-ui/react-icons";
import {useTranslations} from 'next-intl';

export default function Benefit() {
    const t = useTranslations('Benefit');

    return (
        <Section className="px-3 md:px-0 !py-6 md:!py-8">
            <Heading as="h2" align="center" className="my-2 md:my-6 !text-xl md:!text-3xl">
                {t("heading")}
            </Heading>
            <Text as="p" mb="6">
                {t("intro")}
            </Text>
            <Grid className="grid-cols-1 md:!grid-cols-2" gap="8" width="auto">
                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <RocketIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>{t("efficiency_title")}</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        {t("efficiency_text")}
                    </Text>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <MixerHorizontalIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>{t("versatility_title")}</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        {t("versatility_text")}
                    </Text>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <GearIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>{t("customization_title")}</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        {t("customization_text")}
                    </Text>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <MagicWandIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>{t("seo_optimization_title")}</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        {t("seo_optimization_text")}
                    </Text>
                </div>
            </Grid>
        </Section>
    );
}
