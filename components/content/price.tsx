'use client';

import {Button} from '@radix-ui/themes';
import {useLocale, useMessages, useTranslations} from 'next-intl';
import Cookies from 'js-cookie';
import {useState} from 'react';

const Price: React.FC = () => {
    const t = useTranslations('Price');
    const messages = useMessages() as unknown as IntlMessages;
    const locale = useLocale();
    const [userID, setUserID] = useState<string | null>(getUserIDFromCookies());

    function getUserIDFromCookies() {
        try {
            return JSON.parse((Cookies.get('user') || '{}') as any).id || null;
        } catch {
            return null;
        }
    }

    function handlePayLinkClick(plan: string) {
        let currentUserID = userID;

        if (!currentUserID) {
            currentUserID = getUserIDFromCookies();
            if (currentUserID) {
                setUserID(currentUserID);
            } else {
                alert('Please log in to proceed.');
                return;
            }
        }

        window.location.href = `/${locale}/checkout?userId=${currentUserID}&plan=${plan}`;
    }

    return (
        <section className="bg-white px-3 md:px-0 !pb-3 !pt-8 md:!pb-8" id="price">
            <div className="py-8 px-0 mx-auto max-w-screen-xl lg:py-16 lg:px-2">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mt-3 text-xl md:text-3xl tracking-tight font-extrabold text-gray-900">{t("heading")}</h2>
                    <p className="mt-0 md:mt-2 !text-xs md:!text-xl !text-gray-500 !font-light !italic">{t("intro")}</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-2 xl:gap-4 lg:space-y-0">
                    {Object.keys(messages.Price.plans).map((item) => (
                        <PlanCard
                            key={item}
                            title={messages.Price.plans[item as keyof typeof messages.Price.plans].title}
                            price={messages.Price.plans[item as keyof typeof messages.Price.plans].price}
                            originalPrice={messages.Price.plans[item as keyof typeof messages.Price.plans].originalPrice}
                            duration={messages.Price.plans[item as keyof typeof messages.Price.plans].duration}
                            features={messages.Price.plans[item as keyof typeof messages.Price.plans].features}
                            handlePayLinkClick={() => handlePayLinkClick(item)}
                            buttonText={messages.Price.plans[item as keyof typeof messages.Price.plans].buttonText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PlanCard: React.FC<{
    title: string,
    price: string,
    originalPrice: string,
    duration: string,
    features: string[],
    handlePayLinkClick: () => void,
    buttonText: string
}> = ({title, price, originalPrice, duration, features, handlePayLinkClick, buttonText}) => {
    return (
        <div
            className="flex flex-col p-3 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-4">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <div className="flex justify-center items-baseline my-8">
                {originalPrice && (
                    <span className="text-gray-500 line-through mr-1">{originalPrice}</span>
                )}
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                <span className="text-gray-500">{duration}</span>
            </div>
            <Button size="3" onClick={handlePayLinkClick}>{buttonText}</Button>
            <ul role="list" className="mt-8 space-y-1 text-left text-xs">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Price;
