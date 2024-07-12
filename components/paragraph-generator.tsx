"use client"

import {Box, Button, Flex, Grid, Kbd, Section, Separator, Text, TextArea} from "@radix-ui/themes";
import {GenerateToggle, LanguageToggle, ParagraphToggle, StyleToggle} from "@/components/toggle";
import {CopyIcon, EraserIcon, Pencil2Icon} from "@radix-ui/react-icons";
import {useState} from "react";

export default function ParagraphGenerator() {
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [language, setLanguage] = useState('');
    const [generate, setGenerate] = useState('');
    const maxLength = 100; // 设置最大单词数

    // 计算文本中的单词数量
    const wordCount = message.trim().split(/\s+/).filter(word => word.length > 0).length;
    const [response, setResponse] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setResponse('');

        const params = new URLSearchParams({
            message: message,
            style: style,
            paragraph: paragraph,
            language: language,
            generate: generate
        });

        const eventSource = new EventSource('/api/generator?' + params.toString());

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setResponse((prevResponse) => prevResponse + data.content);
        };

        eventSource.onerror = (error) => {
            console.error('EventSource failed:', error);
            eventSource.close();
        };

        eventSource.addEventListener('end', () => {
            eventSource.close();
        });
    };

    return (<Section id="generator">
            <Flex direction="column" className="border rounded-lg p-3">
                <Flex>
                    <StyleToggle onChange={setStyle}/>
                </Flex>
                <Flex>
                    <ParagraphToggle onChange={setParagraph}/>
                </Flex>
                <Flex>
                    <LanguageToggle onChange={setLanguage}/>
                </Flex>
                <Flex>
                    <GenerateToggle onChange={setGenerate}/>
                </Flex>
                <Grid columns="2" gap="6">
                    <Box>
                        <div className="relative">
                            <TextArea
                                variant="soft"
                                className="h-48"
                                placeholder="e.g. Write a paragraph on Research on the history of the internet"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={maxLength * 6} // 这里设置一个较大的字符限制
                            />
                            <div className="absolute bottom-2 left-2 text-sm text-gray-500">
                                {wordCount} / {maxLength} words
                            </div>
                        </div>
                        <Flex mt="3" justify="between" align="center">
                            <Flex className="gap-3 items-center">
                                <Button variant="outline">
                                    <EraserIcon/> Clean
                                </Button>
                                <Kbd size="1">&#8984; + K</Kbd>
                                <Separator size="1" orientation="vertical"/>
                                <Kbd size="1">Ctrl + K</Kbd>
                            </Flex>
                            <Flex className="gap-3 items-center">
                                <Kbd size="1">&#8984; + Enter</Kbd>
                                <Separator size="1" orientation="vertical"/>
                                <Kbd size="1">Ctrl + Enter</Kbd>
                                <Button onClick={handleSubmit}>
                                    <Pencil2Icon/> Generate
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        <Text as="p" className="h-48 overflow-y-scroll whitespace-pre-wrap">
                            {response}
                        </Text>
                        <Flex mt="3" justify="end">
                            <Button variant="soft">
                                <CopyIcon/> Copy
                            </Button>
                        </Flex>
                    </Box>
                </Grid>
            </Flex>
        </Section>
    )
}