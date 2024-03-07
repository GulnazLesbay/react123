// withPageTimeTracking.js
import React, { useState, useEffect } from 'react';

const withPageTimeTracking = (WrappedComponent, pageName) => {
    const WithPageTimeTracking = () => {
        const [timeSpent, setTimeSpent] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setTimeSpent((prevTime) => prevTime + 1);
            }, 1000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div>
                <p>Time spent on {pageName}: {timeSpent} seconds</p>
                <WrappedComponent />
            </div>
        );
    };

    return WithPageTimeTracking;
};

export default withPageTimeTracking;
