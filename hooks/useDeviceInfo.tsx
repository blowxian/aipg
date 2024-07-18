import { useEffect, useState } from 'react';

const useDeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState({ deviceType: '', os: '' });

    useEffect(() => {
        const userAgent = navigator.userAgent;
        let deviceType = 'desktop';
        let os = 'unknown';

        if (/Android/i.test(userAgent)) {
            deviceType = 'mobile';
            os = 'Android';
        } else if (/webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
            deviceType = 'mobile';
            os = /iPhone|iPod/i.test(userAgent) ? 'iOS' : 'unknown';
        } else if (/iPad/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            deviceType = 'tablet';
            os = 'iOS';
        } else if (/Windows NT/i.test(userAgent)) {
            os = 'Windows';
        } else if (/Mac OS X/i.test(userAgent)) {
            os = 'MacOS';
        } else if (/Linux/i.test(userAgent)) {
            os = 'Linux';
        }

        setDeviceInfo({ deviceType, os });
    }, []);

    return deviceInfo;
};

export default useDeviceInfo;