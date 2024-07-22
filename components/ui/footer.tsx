import Link from "next/link";
import Logo from "./logo";
import {useTranslations} from 'next-intl';

export default function Footer({border = false}: { border?: boolean }) {
    const t = useTranslations('Footer');

    return (
        <footer className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Top area: Blocks */}
                <div
                    className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
                >
                    {/* 1st block */}
                    <div className="space-y-2 sm:col-span-12 lg:col-span-4">
                        <div>
                            <Logo/>
                        </div>
                        <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{__html: t("company")}}/>
                    </div>

                    {/* 2nd block */}
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-sm font-medium">{t("product")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    className="text-gray-600 transition hover:text-gray-900"
                                    href="#case"
                                >
                                    {t("cases")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-600 transition hover:text-gray-900"
                                    href="#price"
                                >
                                    {t("pricing")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-sm font-medium">{t("companyInfo")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    className="text-gray-600 transition hover:text-gray-900"
                                    href="#0"
                                >
                                    {t("aboutUs")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-600 transition hover:text-gray-900"
                                    href="#0"
                                >
                                    {t("blog")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-sm font-medium">{t("resources")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    className="text-gray-600 transition hover:text-gray-900"
                                    href="#0"
                                >
                                    {t("terms")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 5th block */}
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-sm font-medium">{t("social")}</h3>
                        <ul className="flex gap-1">
                            <li>
                                <Link
                                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                                    href="https://x.com/GstarWd99611"
                                    target="_blank"
                                    aria-label="Twitter"
                                >
                                    <svg
                                        className="h-8 w-8 fill-current"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Big text */}
            <div className="relative -mt-12 h-60 w-full" aria-hidden="true">
                <div
                    className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Coogle'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Coogle'] after:[text-shadow:0_1px_0_white]"></div>
                {/* Glow */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
                    aria-hidden="true"
                >
                    <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
                </div>
            </div>
        </footer>
    );
}
