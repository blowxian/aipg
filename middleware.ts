import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['ar', 'en', 'es', 'fr', 'zh-CN', 'zh-TW'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en|es|fr|zh-CN|zh-TW)/:path*']
};