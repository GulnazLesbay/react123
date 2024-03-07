import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from './SettingsProvider';

const SettingsPage = () => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const [language, setLanguage] = useState(settings.language);

    useEffect(() => {
        setLanguage(settings.language);
    }, [settings.language]);

    const handleThemeChange = (newTheme) => {
        updateSettings({ theme: newTheme });
    };

    const handleLanguageChange = (newLanguage) => {
        updateSettings({ language: newLanguage });
        setLanguage(newLanguage);
    };

    // Функция для возврата текста на нужном языке
    const getLanguageText = (textKey) => {
        if (language === 'russian') {
            // Русские переводы
            switch (textKey) {
                case 'settings':
                    return 'Настройки';
                case 'theme':
                    return 'Тема:';
                case 'language':
                    return 'Язык:';
                case 'light':
                    return 'Светлая';
                case 'dark':
                    return 'Темная';
                case 'english':
                    return 'Английский';
                case 'russian':
                    return 'Русский';
                default:
                    return textKey;
            }
        } else {
            // Английские переводы
            switch (textKey) {
                case 'settings':
                    return 'Settings';
                case 'theme':
                    return 'Theme:';
                case 'language':
                    return 'Language:';
                case 'light':
                    return 'Light';
                case 'dark':
                    return 'Dark';
                case 'english':
                    return 'English';
                case 'russian':
                    return 'Russian';
                default:
                    return textKey;
            }
        }
    };

    return (
        <div className={`settings-page ${settings.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <h2>{getLanguageText('settings')}</h2>
            <div>
                <label>{getLanguageText('theme')}</label>
                <select value={settings.theme} onChange={(e) => handleThemeChange(e.target.value)}>
                    <option value="light">{getLanguageText('light')}</option>
                    <option value="dark">{getLanguageText('dark')}</option>
                </select>
            </div>
            <div>
                <label>{getLanguageText('language')}</label>
                <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="english">{getLanguageText('english')}</option>
                    <option value="russian">{getLanguageText('russian')}</option>
                </select>
            </div>
        </div>
    );
};

export default SettingsPage;
