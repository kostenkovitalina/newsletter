'use client'
import React from 'react';
import {useEffect, useState} from "react";

export function RealTimeClock() {
    let [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <p>{currentTime.toLocaleTimeString('uk-UA', {hour: '2-digit', minute: '2-digit', hour12: false})}</p>
        </div>
    );
}

