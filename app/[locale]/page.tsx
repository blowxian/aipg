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
import LogoCarousel from "@/components/content/logo-carousel";
import {getLocale} from "next-intl/server";
import {Metadata} from "next";
import dynamic from "next/dynamic";
import languages from "@/constants/languages";

const LazyLoadYouTube = dynamic(() => import('@/components/lazy-load-youtube'), {ssr: false});

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

    // Generate the languages object dynamically
    const languageAlternates = languages.reduce((acc, lang) => {
        acc[lang.code] = lang.code === 'en' ? '/' : `/${lang.code}`;
        return acc;
    }, {} as Record<string, string>);

    return {
        alternates: {
            canonical: 'https://aiparagraphgenerator.net/' + (locale === 'en' ? '' : `${locale}`),
            languages: languageAlternates as any,
        }
    };
}

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
                <LogoCarousel/>
                <Section
                    className="px-3 md:px-0 !py-6 md:!py-8">
                    <Heading as="h2" align="center" className="my-2 md:my-6 pt-10 md:pt-12 !text-xl md:!text-3xl">
                        How to use AI Paragraph Generator for Writers</Heading>
                    <LazyLoadYouTube videoId="FGTbBB7x6E4"/>
                </Section>
                <Scene/>
                <Highlight/>
                <Benefit/>
                <Overcome/>
                <FAQ/>
                <Price/>
                <Section className="!py-3 md:!py-6 !pb-8 md:!pb-28">
                    <a href="https://www.producthunt.com/posts/ai-paragraph-generator-for-writer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;paragraph&#0045;generator&#0045;for&#0045;writer"
                       target="_blank"><img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=473413&theme=light"
                        alt="AI&#0032;Paragraph&#0032;Generator&#0032;for&#0032;writer - AI&#0032;Paragraph&#0032;Generator&#0032;for&#0032;writer | Product Hunt"
                        style={{width: "250px", height: "54px"}} width="250" height="54" className="mx-auto"/></a>
                </Section>
            </Container>
            <Footer border={true}/>
        </>
    );
}
