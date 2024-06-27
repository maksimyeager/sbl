import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "kz", name: "Қазақ" },
];

const LanguageSelector = () => {
    const [, i18n] = useTranslation("global");
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("selectedLanguage");
        if (storedLanguage) {
            setSelectedLanguage(JSON.parse(storedLanguage));
        } else {
            setSelectedLanguage(languages[0]);
        }
    }, []);

    useEffect(() => {
        if (selectedLanguage && i18n && i18n.changeLanguage) {
            localStorage.setItem("selectedLanguage", JSON.stringify(selectedLanguage));
            i18n.changeLanguage(selectedLanguage.code);
        }
    }, [selectedLanguage, i18n]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        function handleWindowBlur() {
            setShowDropdown(false);
        }

        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('blur', handleWindowBlur);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('blur', handleWindowBlur);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('blur', handleWindowBlur);
        };
    }, [showDropdown]);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setShowDropdown(false);
    };

    if (!selectedLanguage) {
        return null;
    }

    return (
        <div className="relative inline-block">
            <div
                className="flex items-center text-left cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <Globe className="mr-1 h-5 w-5" />
                <span>{selectedLanguage.name}</span>
            </div>
            {showDropdown && (
                <div
                    ref={dropdownRef}
                    className="absolute mt-1 bg-white border border-gray-300 shadow-lg rounded-md py-1 w-48 z-10"
                >
                    {languages.map((language) => (
                        <div
                            key={language.code}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleLanguageSelect(language)}
                        >
                            {language.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
