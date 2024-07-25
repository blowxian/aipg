"use client"

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Section} from "@radix-ui/themes";

const logos = [
    '/logo/twitch.svg',
    '/logo/snapchat.svg',
    '/logo/linkedin.svg',
    '/logo/tiktok.svg',
    '/logo/google.svg',
    // 添加更多 logo 路径
];

const LogoCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // 添加自动轮播
        autoplaySpeed: 2000, // 自动轮播速度，单位为毫秒
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Section className="py-8">
            <Heading as="h2" align="center" className="my-2 md:my-6 pt-10 md:pt-12 !text-xl md:!text-3xl">
                Employees Using Our Products
            </Heading>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center px-2 w-full">
                        <Image src={logo} alt={`Logo ${index + 1}`} width={80} height={80}
                               className="mx-auto"/>
                    </div>
                ))}
            </Slider>
        </Section>
    );
};

export default LogoCarousel;