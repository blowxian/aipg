import {Blockquote, Grid, Heading, Section, Text} from "@radix-ui/themes";
import {GearIcon, MagicWandIcon, MixerHorizontalIcon, RocketIcon} from "@radix-ui/react-icons";

export default function Benefit(){
    return(
        <Section>
            <Heading as="h2" align="center" mb="3">Benefits of Using AI Paragraph Generators</Heading>
            <Text as="p" mb="6">
                AI Paragraph Generator is a powerful tool for various writing needs, from content creation and academic writing to personal communication. Leveraging advanced AI technology helps users generate high-quality, coherent paragraphs quickly and efficiently.
            </Text>
            <Grid columns="2" gap="8" width="auto">
                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <RocketIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>Efficiency</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        AI paragraph generators can produce paragraphs in seconds, significantly speeding up the
                        writing process and allowing writers to focus on other tasks.
                    </Text>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <MixerHorizontalIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>Versatility</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        These tools can create content for various purposes, including blog posts, articles,
                        academic writing, business proposals, etc.
                    </Text>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <GearIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>Customization</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        Users can specify parameters like tone, style, and keywords to tailor the output to
                        their needs, ensuring that the generated content aligns with their goals.
                    </Text>
                </div>


                <div className="flex items-center gap-2">
                    <div className="w-1/3 text-center">
                        <MagicWandIcon width="45" height="45" className="mx-auto mb-2"/>
                        <strong>SEO Optimization</strong>
                    </div>
                    <Text as="p" className="w-2/3 text-wrap">
                        Many AI paragraph generators can incorporate relevant keywords to improve search
                        engine visibility, making them valuable tools for digital marketing.
                    </Text>
                </div>
            </Grid>
        </Section>
    )
}