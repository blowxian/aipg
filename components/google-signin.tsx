import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const GoogleSignIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // 假设你有一个函数 checkLoginStatus 来检查用户的登入状态
        const checkLoginStatus = async () => {
            // 这里可以是一个 API 调用来检查用户的登入状态
            const response = await fetch('/api/check-login-status');
            const data = await response.json();
            setIsLoggedIn(data.isLoggedIn);
        };

        checkLoginStatus();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            // 用户已经登入，跳转到其他页面或执行其他逻辑
            router.push('/dashboard');
        }
    }, [isLoggedIn, router]);

    if (isLoggedIn) {
        return null; // 如果用户已经登入，不渲染 Google Sign-In 组件
    }

    return (
        <div>
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
        </div>
    );
};

export default GoogleSignIn;