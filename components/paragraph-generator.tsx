"use client"

import {Box, Button, Flex, Grid, Kbd, Section, Separator, Spinner, Text, TextArea} from "@radix-ui/themes";
import {GenerateToggle, LanguageToggle, ParagraphToggle, StyleToggle} from "@/components/toggle";
import {CopyIcon, EraserIcon, Pencil2Icon} from "@radix-ui/react-icons";
import {useState, useEffect, useCallback, useRef} from "react";
import ToastComponent from '@/components/toast';
import useDeviceInfo from '@/hooks/useDeviceInfo'; // 导入检测设备信息的 Hook

export default function ParagraphGenerator() {
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [language, setLanguage] = useState('');
    const [generate, setGenerate] = useState('');
    const maxLength = 100;

    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const textAreaRef = useRef(null);

    const {deviceType, os} = useDeviceInfo(); // 使用检测设备信息的 Hook

    const wordCount = message.length;
    const responseWordCount = response.length;

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setResponse('');
        setIsLoading(true);
        setToastMessage('Generating paragraph...');

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
            setIsLoading(false);
            setToastMessage('Generation failed');
        };

        eventSource.addEventListener('end', () => {
            eventSource.close();
            setIsLoading(false);
            setToastMessage('Generation completed');
        });
    }, [message, style, paragraph, language, generate]);

    const handleClear = useCallback(() => {
        setMessage('');
        if (textAreaRef.current) {
            textAreaRef.current.focus();
        }
        setToastMessage('Message cleared');
    }, []);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(response).then(() => {
            console.log('Text copied to clipboard');
            setToastMessage('Paragraphs copied');
        }).catch(err => {
            console.error('Could not copy text: ', err);
            setToastMessage('Copy failed');
        });
    }, [response]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isLoading) {
                return;
            }

            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                event.preventDefault();
                handleSubmit(event);
            }
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                handleClear();
            }
            if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                event.preventDefault();
                handleCopy();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleSubmit, handleClear, handleCopy, isLoading]);

    const renderClearShortcut = () => {
        if (deviceType === 'desktop') {
            return os === 'MacOS' ? <Kbd size="1">&#8984; + K</Kbd> : <Kbd size="1">Ctrl + K</Kbd>;
        }
        return null;
    };

    const renderGenerateShortcut = () => {
        if (deviceType === 'desktop') {
            return os === 'MacOS' ? <Kbd size="1">&#8984; + Enter</Kbd> : <Kbd size="1">Ctrl + Enter</Kbd>;
        }
        return null;
    };

    const renderCopyShortcut = () => {
        if (deviceType === 'desktop') {
            return os === 'MacOS' ? <Kbd size="1">&#8984; + C</Kbd> : <Kbd size="1">Ctrl + C</Kbd>;
        }
        return null;
    };


    return (
        <Section className="overflow-x-hidden !py-3 md:!py-8">
            <Flex direction="column" className="border-0 md:border rounded-lg p-3">
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
                <Grid gap="6" className="grid-cols-1 md:!grid-cols-2">
                    <Box>
                        <div className="relative">
                            <TextArea
                                ref={textAreaRef}
                                variant="soft"
                                className="h-36 md:h-48"
                                placeholder="e.g. Write a paragraph on Research on the history of the internet"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={maxLength * 6}
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
                                {renderClearShortcut()}
                            </Flex>
                            <Flex className="gap-3 items-center">
                                {renderGenerateShortcut()}
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
                        <div className="relative">
                            <Text as="p" className="h-36 md:h-48 overflow-y-scroll whitespace-pre-wrap">
                                {response}
                            </Text>
                            <Text className="absolute bottom-2 right-2 text-sm text-gray-500">{responseWordCount} chars</Text>
                        </div>
                        <Flex mt="3" justify="end" align="center" className="gap-3 items-center">

                            {renderCopyShortcut()}
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
            <ToastComponent message={toastMessage}/>
</Section>
)
    ;
}
