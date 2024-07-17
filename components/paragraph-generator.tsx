"use client"

import {Box, Button, Flex, Grid, Kbd, Section, Separator, Spinner, Text, TextArea} from "@radix-ui/themes";
import {GenerateToggle, LanguageToggle, ParagraphToggle, StyleToggle} from "@/components/toggle";
import {CopyIcon, EraserIcon, Pencil2Icon} from "@radix-ui/react-icons";
import {useState, useEffect, useCallback, useRef} from "react";
import ToastComponent from '@/components/toast';

export default function ParagraphGenerator() {
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [language, setLanguage] = useState('');
    const [generate, setGenerate] = useState('');
    const maxLength = 100; // 设置最大单词数

    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false); // 添加这个状态变量
    const [toastMessage, setToastMessage] = useState(''); // 添加这个状态变量
    const textAreaRef = useRef(null); // 用于引用 textarea 元素

    // 计算文本中的单词数量
    const wordCount = message.length;
    const responseWordCount = response.length;

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setResponse('');
        setIsLoading(true); // 开始请求时禁用按钮
        setToastMessage('Generating paragraph...'); // 设置 Toast 消息

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
            setIsLoading(false); // 结束请求时启用按钮
            setToastMessage('Generation failed'); // 设置 Toast 消息
        };

        eventSource.addEventListener('end', () => {
            eventSource.close();
            setIsLoading(false); // 结束请求时启用按钮
            setToastMessage('Generation completed'); // 设置 Toast 消息
        });
    }, [message, style, paragraph, language, generate]);

    const handleClear = useCallback(() => {
        setMessage('');
        if (textAreaRef.current) {
            textAreaRef.current.focus();
        }
        setToastMessage('Message cleared'); // 设置 Toast 消息
    }, []);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(response).then(() => {
            console.log('Text copied to clipboard');
            setToastMessage('Paragraphs copied'); // 设置 Toast 消息
        }).catch(err => {
            console.error('Could not copy text: ', err);
            setToastMessage('Copy failed'); // 设置 Toast 消息
        });
    }, [response]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isLoading) {
                return; // 在 loading 状态下直接返回，禁用快捷键
            }

            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                event.preventDefault(); // 阻止默认行为，避免浏览器搜索
                handleSubmit(event);
            }
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault(); // 阻止默认行为，避免浏览器搜索
                handleClear();
            }
            if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                event.preventDefault(); // 阻止默认行为
                handleCopy();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleSubmit, handleClear, handleCopy, isLoading]);

    return (
        <Section id="generator">
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
                                ref={textAreaRef} // 设置 ref
                                variant="soft"
                                className="h-48"
                                placeholder="e.g. Write a paragraph on Research on the history of the internet"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={maxLength * 6} // 这里设置一个较大的字符限制
                            />
                            <div className="absolute bottom-2 left-2 text-sm text-gray-500">
                                {wordCount} / {maxLength} chars
                            </div>
                        </div>
                        <Flex mt="3" justify="between" align="center">
                            <Flex className="gap-3 items-center">
                                <Button variant="outline" onClick={handleClear} disabled={isLoading}>
                                    <Spinner loading={isLoading}>
                                        <EraserIcon/>
                                    </Spinner>
                                    Clean
                                </Button>
                                <Kbd size="1">&#8984; + K</Kbd>
                                <Separator size="1" orientation="vertical"/>
                                <Kbd size="1">Ctrl + K</Kbd>
                            </Flex>
                            <Flex className="gap-3 items-center">
                                <Kbd size="1">&#8984; + Enter</Kbd>
                                <Separator size="1" orientation="vertical"/>
                                <Kbd size="1">Ctrl + Enter</Kbd>
                                <Button onClick={handleSubmit} disabled={isLoading}>
                                    <Spinner loading={isLoading}>
                                        <Pencil2Icon/>
                                    </Spinner>
                                    Generate
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        <Text as="p" className="h-48 overflow-y-scroll whitespace-pre-wrap">
                            {response}
                        </Text>
                        <Flex mt="3" justify="end" align="center" className="gap-3 items-center">
                            <Text className="text-sm text-gray-500 mr-2">{responseWordCount} chars</Text>
                            <Kbd size="1">&#8984; + C</Kbd>
                            <Separator size="1" orientation="vertical"/>
                            <Kbd size="1">Ctrl + C</Kbd>
                            <Button variant="soft" onClick={handleCopy} disabled={isLoading}>
                                <Spinner loading={isLoading}>
                                    <CopyIcon/>
                                </Spinner>
                                Copy
                            </Button>
                        </Flex>
                    </Box>
                </Grid>
            </Flex>
            <ToastComponent message={toastMessage} />
        </Section>
    );
}
