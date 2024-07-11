"use client";

import {useState, useEffect} from "react";

import Link from "next/link";
import Logo from "./logo";
import {Button, Flex} from "@radix-ui/themes";

export default function Header() {
    const [top, setTop] = useState<boolean>(true);

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header className="fixed top-2 z-30 w-full md:top-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-5 shadow shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <Logo/>
                    </div>

                    <Flex justify="center" gap="8">
                        <Link href="#generator">Generator</Link>
                        <Link href="#price">Price</Link>
                    </Flex>

                    {/* Desktop sign in links */}
                    <ul className="flex flex-1 items-center justify-end gap-3">
                        <li>
                            <Link
                                href="/signin"
                                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/signup"
                                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
