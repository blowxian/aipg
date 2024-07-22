import {useTranslations} from 'next-intl';
import {Container, Heading, Section,} from '@radix-ui/themes';
import Scene from "@/components/content/scene";
import Highlight from "@/components/content/highlight";
import Benefit from "@/components/content/benefit";
import Overcome from "@/components/content/overcome";
import FAQ from "@/components/content/faq";
import ParagraphGenerator from "@/components/paragraph-generator";
import Price from "@/components/content/price";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
    const t = useTranslations('Home' as any);

    return (
        <>
            <Header/>
            <Container>
                <Section id="generator" className="!pb-3 md:!pb-12">
                    <Heading as="h1" align="center"
                             className="mt-3 md:mt-9 !text-xl md:!text-6xl">{t("title" as never)}</Heading>
                    <Heading as="h2" align="center"
                             className="mt-0 md:mt-2 !text-xs md:!text-xl !text-gray-500 !font-light !italic">{t("subtitle" as never)}</Heading>
                </Section>
                <ParagraphGenerator/>
                <Scene/>
                <Highlight/>
                <Benefit/>
                <Overcome/>
                <FAQ/>
                <Price/>
            </Container>
            <Footer border={true}/>
        </>
    );
}
