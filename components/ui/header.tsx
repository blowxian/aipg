"use client"

import Link from "next/link";
import Logo from "./logo";
import {Flex} from "@radix-ui/themes";
import {useEffect, useState} from "react";

// 定义用户信息的类型
interface User {
    name: string;
    avatar: string;
}

export default function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).googleLoginCallback = (response) => {
                const credential = response.credential;
                console.log('Credential:', credential);

                // Decode the credential
                const base64Url = credential.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                const userInfo = JSON.parse(jsonPayload);
                console.log('User Info:', userInfo);
                setUser({
                    name: userInfo.name,
                    avatar: userInfo.picture,
                });
            };
        }
    }, []);

    const handleLogout = () => {
        // 执行登出逻辑
        setUser(null);
        console.log("User logged out");
    };

    return (
        <header className="fixed top-2 z-30 w-full md:top-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-5 shadow shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    {/* Site branding */}
                    <div className="flex items-center">
                        <Logo/>
                    </div>

                    <Flex justify="center" gap="8">
                        <Link href="#generator">Generator</Link>
                        <Link href="#price">Price</Link>
                    </Flex>

                    <Flex className="flex items-center justify-end gap-3">
                        {user ? (
                            <div className="relative">
                                <img src={user.avatar} alt="User Avatar" className="w-8 h-8 rounded-full cursor-pointer" />
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                    <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div id="g_id_onload"
                                     data-client_id="684544953725-3immpqv6m5dcf670nrkv31iunml4f2na.apps.googleusercontent.com"
                                     data-context="signin"
                                     data-ux_mode="popup"
                                     data-callback="googleLoginCallback"
                                     data-auto_select="true"
                                     data-itp_support="true">
                                </div>
                                <div className="g_id_signin"
                                     data-type="icon"
                                     data-shape="square"
                                     data-theme="outline"
                                     data-text="signin_with"
                                     data-size="medium">
                                </div>
                            </>
                        )}
                    </Flex>
                </div>
            </div>
        </header>
    );
}
