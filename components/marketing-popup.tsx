"use client"

import React, {useEffect, useState} from 'react';
import {Cross2Icon} from "@radix-ui/react-icons";
import Cookies from 'js-cookie';
import {useLocale} from 'next-intl';

const MarketingPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const locale = useLocale();
    const coupon = "FVu6Yo7U";

    useEffect(() => {
        const user = getUserFromCookies();
        const storedTime = Cookies.get('popup_start_time');

        if (!user || !user.hasActiveSubscription) {
            if (storedTime) {
                const startTime = new Date(storedTime).getTime();
                const currentTime = new Date().getTime();
                const elapsedTime = Math.floor((currentTime - startTime) / 1000);
                const remainingTime = 3600 - elapsedTime;

                if (remainingTime > 0) {
                    setCountdown(remainingTime);
                    setIsVisible(true);
                }
            } else {
                const timer = setTimeout(() => {
                    setIsVisible(true);
                    const startTime = new Date();
                    Cookies.set('popup_start_time', startTime.toISOString());
                    setCountdown(3600);
                }, 1000 * 60);

                return () => clearTimeout(timer);
            }
        }
    }, []);

    useEffect(() => {
        if (isVisible && countdown > 0) {
            const interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isVisible, countdown]);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getUserFromCookies = () => {
        const userCookie = Cookies.get('user');
        if (!userCookie) {
            return null;
        }

        try {
            const user = JSON.parse(decodeURIComponent(userCookie));
            return user && user.id ? user : null;
        } catch {
            return null;
        }
    };

    const handlePayLinkClick = (plan: string) => {
        const user = getUserFromCookies();
        if (!user) {
            alert("Please login first!");
            toggleMinimize();
            return;
        }

        window.location.href = `/${locale}/checkout?userId=${user.id}&plan=${plan}&coupon=${coupon}`;
    };

    if (!isVisible) return null;

    if (isMinimized) {
        return (
            <div
                className="fixed top-20 md:top-24 right-4 bg-black text-xs md:text-sm text-gray-500 p-2 rounded-lg cursor-pointer text-right"
                onClick={toggleMinimize}
            >
                <em><span className="text-white text-sm md:text-xl font-black">Coupon</span>
                    <br/>
                    expire in
                    <br/><span className="text-white text-sm md:text-xl font-black">{formatTime(countdown)}</span></em>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div
                className="relative bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl h-56 md:h-80 overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0 bg-black"
                    style={{
                        backgroundImage: "url('/promotion/popup.svg')",
                    }}
                ></div>
                <div className="relative z-10 bg-transparent p-3 md:p-6 h-full flex flex-col justify-between">
                    <button
                        onClick={toggleMinimize}
                        className="absolute top-2 right-2 px-3 py-1 text-gray-700 rounded transition-colors duration-300 font-bold"
                    >
                        <Cross2Icon/>
                    </button>
                    <div className="flex justify-center">
                        {/* Your content */}
                    </div>
                    <div className="flex flex-col items-center text-sm md:text-lg">
                        <button
                            onClick={() => handlePayLinkClick('yearly')}
                            className={`px-12 py-2 bg-[#FF5D00] hover:bg-[#D94E00] text-white rounded-xl transition-colors duration-300 font-bold ${countdown === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={countdown === 0}
                        >
                            <em>Click to Use It Now!</em>
                        </button>
                        <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">
                            <em>expire in <span
                                className="text-white text-sm md:text-xl font-black">{formatTime(countdown)}</span></em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingPopup;