import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";
import { useTranslation } from "react-i18next"

export default function Test(props) {
    const { t } = useTranslation();

    console.log(t)

    return (
        <React.Fragment>
            <Layout>
                <h1>{t('page2.title')}</h1>
                <p>{t('page2.content')}</p>
                <Link to="/">{t('page2.link')}</Link>
            </Layout>
        </React.Fragment>
    )
}