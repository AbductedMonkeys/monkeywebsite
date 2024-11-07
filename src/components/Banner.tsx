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
        // Show the banner after 1 second
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
            <div className="flex items-center justify-center h-fit pr-8"> {/* Added padding-right here */}
                <a
                    href={buttonLink}
                    className="flex flex-shrink items-center h-full align-middle flex-col md:flex-row font-bold text-md md:text-3xl"
                >
                    <p
                        className="m-2 text-center"
                        style={{
                            backgroundColor: buttonBackgroundColor || "transparent",
                        }}
                    >
                        {buttonText}
                    </p>
                </a>
                <div
                    className="cursor-pointer text-center w-auto h-full items-center mx-2 absolute right-4 top-1/2 transform -translate-y-1/2 text-inherit md:text-3xl font-bold flex" // Updated positioning
                    onClick={() => setDisplayBanner(false)}
                >
                    X
                </div>
            </div>
        </div>
    );
}