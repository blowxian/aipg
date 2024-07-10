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
    Blockquote, Quote, Em, TextArea, Kbd, Separator, SegmentedControl
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
            <Section>
                <Flex direction="column" className="border rounded-lg p-3">
                    <SegmentedControl.Root defaultValue="inbox" mb="3" className="flex overflow-x-scroll whitespace-nowrap">
                        <SegmentedControl.Item value="inbox" className="flex-shrink-0 px-4 py-2">Standard</SegmentedControl.Item>
                        <SegmentedControl.Item value="drafts" className="flex-shrink-0 px-4 py-2">Creative</SegmentedControl.Item>
                        <SegmentedControl.Item value="sent" className="flex-shrink-0 px-4 py-2">Casual</SegmentedControl.Item>
                        <SegmentedControl.Item value="04" className="flex-shrink-0 px-4 py-2">Formal</SegmentedControl.Item>
                        <SegmentedControl.Item value="05" className="flex-shrink-0 px-4 py-2">Informal</SegmentedControl.Item>
                        <SegmentedControl.Item value="06" className="flex-shrink-0 px-4 py-2">Informal5</SegmentedControl.Item>
                        <SegmentedControl.Item value="07" className="flex-shrink-0 px-4 py-2">Informal6</SegmentedControl.Item>
                        <SegmentedControl.Item value="08" className="flex-shrink-0 px-4 py-2">Informal7</SegmentedControl.Item>
                        <SegmentedControl.Item value="09" className="flex-shrink-0 px-4 py-2">Informal8</SegmentedControl.Item>
                        <SegmentedControl.Item value="10" className="flex-shrink-0 px-4 py-2">Informal9</SegmentedControl.Item>{/*
                        <SegmentedControl.Item value="11" className="flex-shrink-0 px-4 py-2">Informal0</SegmentedControl.Item>
                        <SegmentedControl.Item value="12" className="flex-shrink-0 px-4 py-2">Informal1</SegmentedControl.Item>
                        <SegmentedControl.Item value="13" className="flex-shrink-0 px-4 py-2">Informal2</SegmentedControl.Item>
                        <SegmentedControl.Item value="14" className="flex-shrink-0 px-4 py-2">Informal3</SegmentedControl.Item>
                        <SegmentedControl.Item value="15" className="flex-shrink-0 px-4 py-2">Informal4</SegmentedControl.Item>*/}
                    </SegmentedControl.Root>
                    <Grid columns="2" gap="6">
                        <Box>
                            <TextArea variant="soft" className="h-36" placeholder="e.g. Write a paragraph on Research on the history of the internet" />
                            <Flex mt="3"><Kbd size="1">&#8984; + K</Kbd><Separator mx="3" size="1" orientation="vertical" /><Kbd size="1">Ctrl + K</Kbd></Flex>
                        </Box>
                        <Text as="p" className="h-36 overflow-y-scroll">e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/>e.g. Write a paragraph on Research on the history of the internet<br/></Text>
                    </Grid>
                </Flex>
            </Section>
            <Scene/>
            <Highlight/>
            <Benefit/>
            <Overcome/>
            <FAQ/>
        </Container>
    );
}
