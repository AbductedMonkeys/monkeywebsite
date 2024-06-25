"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Banner({
    buttonText,
    buttonLink,
    maxHeight = "none",
    backgroundColor = "#2bde73",
    buttonBackgroundColor = "#2bde73",
}) {
    const [displayBanner, setDisplayBanner] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bannerElement = bannerRef.current;
        if (bannerElement) {
            if (displayBanner) {
                const bannerHeight = `${bannerElement.scrollHeight}px`;
                document.documentElement.style.setProperty('--banner-height', bannerHeight);
            } else {
                document.documentElement.style.setProperty('--banner-height', '0px');
            }
        }
    }, [displayBanner]);

    useEffect(() => {
        // Example to show the banner after 1 second
        setTimeout(() => setDisplayBanner(true), 1000);
    }, []);

    return (
        <div
            ref={bannerRef}
            className="banner_top top-0 left-0 right-0 w-full z-20 fixed transition-all duration-300 overflow-hidden"
            style={{
                backgroundColor: backgroundColor,
                maxHeight: maxHeight,
                height: 'var(--banner-height, 0px)',
            }}
        >
            <div className="flex flex-row justify-center items-baseline h-fit">
                <a href={buttonLink} className="flex items-center h-full w-full justify-center flex-col md:flex-row font-bold text-md md:text-3xl">
                    <p
                        className="m-2 "
                        style={{
                            backgroundColor: buttonBackgroundColor || "transparent",
                        }}
                    >
                        {buttonText}
                    </p>
                </a>
                <div
                    className="cursor-pointer my-2 text-center h-fit absolute top-0 right-0 px-2 text-md md:text-3xl font-bold flex"
                    onClick={() => setDisplayBanner(false)}
                >
                    X
                </div>
            </div>
        </div>
    );
}