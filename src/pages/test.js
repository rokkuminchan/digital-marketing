import React from "react";

import Layout from "../components/layout";
import { Link, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import ALink from "../components/common/ALink";

export default function Test(props) {
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();

    console.log(languages)
    console.log(originalPath)

    return (
        <React.Fragment>
            {/* <Layout> */}
            <h1>{t('Home')}</h1>
            <p>{t('Header-Title')}</p>
            <ALink to="/">{t('ABC.1')}</ALink>
            <ul className="languages">
                {languages.map((lng) => (
                    <li key={lng}>
                        <Link to={originalPath} language={lng}>
                            {lng}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* </Layout> */}
        </React.Fragment>
    )
}