import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        theme: 'light',
        language: 'english', // Устанавливаем язык по умолчанию как английский
        displayPreferences: 'normal',
    });

    const updateSettings = (updatedSettings) => {
        setSettings(prevSettings => ({ ...prevSettings, ...updatedSettings }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
