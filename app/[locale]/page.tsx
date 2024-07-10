import Image from "next/image";
import {useTranslations} from 'next-intl';
import {
    Flex,
    Text,
    Button,
    Box,
    Container,
    Section,
    Heading,
    Tabs,
    Card,
    Inset,
    Strong,
    Grid,
    Blockquote, Quote, Em
} from '@radix-ui/themes';
import Scene from "@/components/content/scene";
import Highlight from "@/components/content/highlight";
import {GearIcon, MagicWandIcon, MixerHorizontalIcon, RocketIcon} from "@radix-ui/react-icons";
import Benefit from "@/components/content/benefit";
import Overcome from "@/components/content/overcome";
import FAQ from "@/components/content/faq";

export default function Home() {
    const t = useTranslations('Index' as any);

    return (
        <Container>
            <Section>
                <Heading as="h1" size="9" align="center" mt="8">{t("title" as any)}</Heading>
            </Section>
            <Scene/>
            <Highlight/>
            <Benefit/>
            <Overcome/>
            <FAQ/>
        </Container>
    );
}
