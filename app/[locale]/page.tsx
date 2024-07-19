import {useTranslations} from 'next-intl';
import {Container, Heading, Section,} from '@radix-ui/themes';
import Scene from "@/components/content/scene";
import Highlight from "@/components/content/highlight";
import Benefit from "@/components/content/benefit";
import Overcome from "@/components/content/overcome";
import FAQ from "@/components/content/faq";
import ParagraphGenerator from "@/components/paragraph-generator";
import Price from "@/components/content/price";

export default function Home() {
    const t = useTranslations('Index' as any);

    return (
        <Container>
            <Section id="generator" className="!pb-3 md:!pb-12">
                <Heading as="h1" align="center" className="mt-3 md:mt-9 !text-xl md:!text-6xl">{t("title" as any)}</Heading>
                <Heading as="h2" align="center"
                         className="mt-0 md:mt-2 !text-xs md:!text-xl !text-gray-500 !font-light !italic">The Most
                    Powerful AI Paragraph Generator Online</Heading>
            </Section>
            <ParagraphGenerator/>
            <Scene/>
            <Highlight/>
            <Benefit/>
            <Overcome/>
            <FAQ/>
            <Price/>
        </Container>
    );
}
