"use client"

import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {Option, ToggleGroupComponentProps} from './toggle.types';
import {LockClosedIcon} from "@radix-ui/react-icons";

type ToggleProps = {
    onChange: (value: string) => void;
};

const toggleGroupItemClasses =
    'hover:bg-violet3 text-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[30px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:outline-none px-2 text-xs disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed';

const styleOptions: Option[] = [
    {value: 'standard', label: 'Standard'},
    {value: 'creative', label: 'Creative'},
    {value: 'casual', label: 'Casual'},
    {value: 'formal', label: 'Formal', paid: true},
    {value: 'informal', label: 'Informal', paid: true},
    {value: 'professional', label: 'Professional', paid: true},
    {value: 'persuasive', label: 'Persuasive', paid: true},
    {value: 'descriptive', label: 'Descriptive', paid: true},
    {value: 'narrative', label: 'Narrative', paid: true},
    {value: 'expository', label: 'Expository', paid: true},
    {value: 'conversational', label: 'Conversational', paid: true},
    {value: 'friendly', label: 'Friendly', paid: true},
    {value: 'diplomatic', label: 'Diplomatic', paid: true},
    {value: 'confident', label: 'Confident', paid: true},
    {value: 'academic', label: 'Academic', paid: true}
];

const paragraphOptions: Option[] = [
    {value: '1', label: '1 para'},
    {value: '2', label: '2 paras'},
    {value: '3', label: '3 paras', paid: true},
    {value: '4', label: '4 paras', paid: true},
    {value: '5', label: '5 paras', paid: true},
    {value: 'more', label: 'more paras', paid: true}
];

const languageOptions: Option[] = [
    {value: 'english', label: 'English'},
    {value: 'mandarin', label: 'Chinese'},
    {value: 'russian', label: 'Russian'},
    {value: 'spanish', label: 'Spanish', paid: true},
    {value: 'french', label: 'French', paid: true},
    {value: 'portuguese', label: 'Portuguese', paid: true},
    {value: 'italian', label: 'Italian', paid: true},
    {value: 'hindi', label: 'Hindi', paid: true},
    {value: 'arabic', label: 'Arabic', paid: true},
    {value: 'indonesian', label: 'Indonesian', paid: true},
    {value: 'german', label: 'German', paid: true},
    {value: 'japanese', label: 'Japanese', paid: true},
    {value: 'vietnamese', label: 'Vietnamese', paid: true},
    {value: 'filipino', label: 'Filipino', paid: true}
];

const generateOptions: Option[] = [
    {value: 'direct', label: 'Direct'},
    {value: 'enhanced', label: 'Enhanced with Search', paid: true}
];

const Toggle: React.FC<ToggleGroupComponentProps> = ({defaultValue, options, onChange}) => (
    <ToggleGroup.Root
        className="inline-flex bg-mauve6 rounded space-x-px border mb-3 overflow-x-auto no-scrollbar"
        type="single"
        defaultValue={defaultValue}
        onValueChange={onChange}
        aria-label="Style selection"
    >
        {options.map((option, index) => (
            <ToggleGroup.Item
                key={index}
                className={toggleGroupItemClasses}
                value={option.value}
                aria-label={option.label}
                disabled={option.paid || false} // 如果是付费的则禁用
            >
                {option.paid ? (
                    <span className="flex items-center whitespace-nowrap">
                        <LockClosedIcon className="mr-1"/>
                        {option.label}
                    </span>
                ) : (
                    <span className="flex items-center whitespace-nowrap">
                        {option.label}
                    </span>
                )}
            </ToggleGroup.Item>
        ))}
    </ToggleGroup.Root>
);

export const StyleToggle: React.FC<ToggleProps> = ({onChange}) => {
    return Toggle({defaultValue: 'standard', options: styleOptions, onChange: onChange});
};

export const ParagraphToggle: React.FC<ToggleProps> = ({onChange}) => {
    return Toggle({defaultValue: '1', options: paragraphOptions, onChange: onChange});
};

export const LanguageToggle: React.FC<ToggleProps> = ({onChange}) => {
    return Toggle({defaultValue: 'english', options: languageOptions, onChange: onChange});
};

export const GenerateToggle: React.FC<ToggleProps> = ({onChange}) => {
    return Toggle({defaultValue: 'direct', options: generateOptions, onChange: onChange});
};


export default Toggle;