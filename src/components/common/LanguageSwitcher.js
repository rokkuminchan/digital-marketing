import React from "react";
import { useTranslation } from 'react-i18next';


export default function LanguageSwitcher() {
    const [, i18n] = useTranslation();
    return <div>
        <button onClick={() => i18n.changeLanguage('jp')}>Japanese</button>
        <button onClick={() => i18n.changeLanguage('vi')}>Vietnamese</button>
    </div>
}