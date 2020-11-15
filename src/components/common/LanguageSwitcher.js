import React from "react";
import { Link, useTranslation, useI18next, I18nextContext } from 'gatsby-plugin-react-i18next';


export default function LanguageSwitcher() {
    const { languages, originalPath } = useI18next();
    const context = React.useContext(I18nextContext);

    console.log(context);

    return <div>
        <ul className="languages">
            {languages.map((lng) => (
                <li key={lng}>
                    <Link to={originalPath} language={lng}>
                        {lng}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}