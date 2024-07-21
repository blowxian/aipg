import type {Metadata} from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Script from "next/script";
import {Theme} from '@radix-ui/themes';
import "@radix-ui/themes/styles.css"
import "../css/style.css";

export const metadata: Metadata = {
    title: "AI Paragraph Generator for writer",
    description: "AI Paragraph Generator is a powerful tool that transforms your ideas into well-structured and engaging paragraphs. Artificial Intelligence Paragraph Generator meets all your content needs, from blogs to academic papers, with our tool ensuring originality, relevance and professionalism in every use case.",
    keywords: "AI Paragraph Generator, AI Writing Assistant, Content Creation Tool, Automated Writing Software, Natural Language Processing, Machine Learning Writing Tool, Creative Writing AI, Technical Documentation AI, Academic Research AI Assistant, Business Writing AI, SEO Optimized Content, Free AI Writing Tool"
};

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body>
        <Theme accentColor="violet">
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
            {/*<ThemePanel />*/}
        </Theme>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
        </Script>
        </body>
        </html>
    );
}
