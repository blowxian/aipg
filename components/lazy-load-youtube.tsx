"use client"

import React, {useEffect, useRef, useState} from 'react';

interface LazyLoadYouTubeProps {
    videoId: string;
}

const LazyLoadYouTube: React.FC<LazyLoadYouTubeProps> = ({videoId}) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const placeholderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px', // 提前加载
            }
        );

        if (placeholderRef.current) {
            observer.observe(placeholderRef.current!);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={placeholderRef} className="aspect-w-16 aspect-h-9 relative">
            {isIntersecting ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            ) : (
                <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Video Placeholder"
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    onClick={() => setIntersecting(true)} // 点击图片也可以加载视频
                />
            )}
        </div>
    );
};

export default LazyLoadYouTube;