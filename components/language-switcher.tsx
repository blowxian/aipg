"use client"

// components/LanguageSwitcher.tsx
import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons';
import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';

const languages = [
    {code: 'en', label: 'English'},
    {code: 'es', label: 'Español'},
    {code: 'fr', label: 'Français'},
    {code: 'ja', label: '日本語'},
    {code: 'ko', label: '한국어'},
    {code: 'nl', label: 'Nederlands'},
    {code: 'pl', label: 'Polski'},
    {code: 'pt', label: 'Português'},
    {code: 'vi', label: 'Tiếng Việt'},
    {code: 'zh-CN', label: '中文 (简体)'},
    {code: 'zh-TW', label: '中文 (繁體)'},
    {code: 'ar', label: 'العربية'},
    // Add more languages here
];

const LanguageSwitcher = () => {
    const currentLocale = useLocale();
    const router = useRouter();

    const handleLanguageChange = (locale: string) => {
        router.push(`/${locale}`);
    };

    return (
        <Select.Root className="z-10" defaultValue={currentLocale} onValueChange={handleLanguageChange}>
            <Select.Trigger
                className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_0_2px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="Language"
            >
                <Select.Value/>
                <Select.Icon className="text-violet11">
                    <ChevronDownIcon/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content
                    className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton
                        className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronUpIcon/>
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                        <Select.Group>
                            <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                                Languages
                            </Select.Label>
                            {languages.map((lang) => (
                                <SelectItem value={lang.code} key={lang.code} isSelected={lang.code === currentLocale}>
                                    {lang.label}
                                </SelectItem>
                            ))}
                        </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton
                        className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronDownIcon/>
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

const SelectItem = React.forwardRef(({children, className, isSelected, ...props}, forwardedRef) => {
    return (
        <Select.Item
            className={classnames(
                'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                className,
                {'data-[highlighted]:bg-violet9': isSelected}
            )}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon/>
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default LanguageSwitcher;