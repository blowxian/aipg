export interface Option {
    value: string;
    label: string;
    paid?: boolean; // 新增的可选属性，用于标记是否为付费功能
}

export interface ToggleGroupComponentProps {
    options: Option[];
    defaultValue: string;
    onChange?: (value: string) => void;
}