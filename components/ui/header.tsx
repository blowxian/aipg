"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import {Flex} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useTranslations} from "next-intl";

// 定义用户信息的类型
interface User {
    name: string;
    avatar: string;
    email: string;
}

// 定义 Google 登录响应的类型
interface GoogleLoginResponse {
    credential: string;
}

export default function Header() {
    const t = useTranslations('Header');
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // 从 cookie 中获取用户信息
        const storedUser = Cookies.get('user');
        // console.log('Stored User:', storedUser);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // 初始化 Google One Tap 登录
            const loadGoogleScript = () => {
                const script = document.createElement('script');
                script.src = "https://accounts.google.com/gsi/client";
                script.async = true;

                document.body.appendChild(script);
            };

            const googleLoginCallback = async (response: GoogleLoginResponse) => {
                const credential = response.credential;
                // console.log('Credential:', credential);

                // Decode the credential
                const base64Url = credential.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                const userInfo = JSON.parse(jsonPayload);
                // console.log('User Info:', userInfo);
                const userData = {
                    name: userInfo.name,
                    avatar: userInfo.picture,
                    email: userInfo.email,
                };
                setUser(userData);

                // 将用户信息发送到服务器
                const auth_response = await fetch('/api/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (!auth_response.ok) {
                    console.error('Failed to save user information');
                } else {
                    // 触发重新渲染
                    (window as any).triggerParagraphGeneratorUpdate();
                }
            };

            if (typeof window !== 'undefined') {
                (window as any).googleLoginCallback = googleLoginCallback;
                loadGoogleScript();
            }
        }
    }, []);

    return (
        <header className="fixed top-2 z-30 w-full md:top-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-5 shadow shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    {/* Site branding */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <Flex justify="center" gap="8">
                        <Link href="#generator">{t("generator")}</Link>
                        <Link href="#price">{t("price")}</Link>
                    </Flex>

                    <Flex>
                        {user ? (
                            <div className="relative">
                                <Image
                                    src={user.avatar}
                                    alt="User Avatar"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                        ) : (
                            <>
                                <div id="g_id_onload"
                                     data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                                     data-context="signin"
                                     data-ux_mode="popup"
                                     data-callback="googleLoginCallback"
                                     data-nonce=""
                                     data-auto_select="true"
                                     data-itp_support="true">
                                </div>

                                <div className="g_id_signin"
                                     data-type="icon"
                                     data-shape="circle"
                                     data-theme="outline"
                                     data-text="signin"
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