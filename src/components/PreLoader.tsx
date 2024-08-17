import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import './css/preloader.css'

const PreLoader: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const navigationType = useNavigationType();

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        if (navigationType === 'PUSH' || navigationType === 'POP') {
            handleStart();
            handleStop();
        }

        return () => {
            // Cleanup if necessary
        };
    }, [navigationType]);

    useEffect(() => {
        setLoading(false);
    }, [location]);

    return (
        <div className={`preloader ${loading ? 'active' : 'fade-out'}`}>
            <div className="loading-circle"></div>
        </div>
    )
};

export default PreLoader;