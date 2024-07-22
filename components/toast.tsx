import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import {Text} from "@radix-ui/themes";

interface ToastComponentProps {
    message: string;
    description?: string;
}

const ToastComponent: React.FC<ToastComponentProps> = ({message, description}) => {
    const [open, setOpen] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState(message);

    const [toastDescription, setToastDescription] = React.useState(description);
    const timerRef = React.useRef<number>(0);

    React.useEffect(() => {
        if (message) {
            setToastMessage(message);
            setToastDescription(description);
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
                setOpen(true);
            }, 100);
        }
    }, [message, description]);

    return (
        <Toast.Provider swipeDirection="right">
            <Toast.Root
                className="bg-white/90 rounded-md shadow p-4 grid grid-cols-1 gap-x-4 items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:animate-swipeOut border-t-violet9 border-t-2"
                open={open}
                onOpenChange={setOpen}
            >
                <Toast.Title className="mb-[5px] font-medium text-slate12 text-[15px]">
                    <>{toastMessage}</>
                </Toast.Title>
                {
                    toastDescription ? (
                        <Toast.Description asChild>
                            <Text as="p" size="2">{toastDescription}</Text>
                        </Toast.Description>
                    ) : null
                }
            </Toast.Root>
            <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </Toast.Provider>
    );
};

export default ToastComponent;