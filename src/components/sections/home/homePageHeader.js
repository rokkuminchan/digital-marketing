import React from "react";
import styled from 'styled-components';
import HomePageHeaderImage from "../../../images/home__page-header.png"

import "./homePageHeader.css"

const HeaderImageBackground = styled.div`
    background-image: url(${HomePageHeaderImage});
    height: calc(100vh - var(--header-menu-height));
    background-size: cover;
    background-position: center center;
    @media (max-width: 768px) {
        width: 100%;
    } 
`;

export default function HomePageHeader({data}) {
    return (
        <section className="home-page-header">
            <HeaderImageBackground>

            </HeaderImageBackground>
            <div className="home-page-header__title-container">
                <div className="home-page-header__title-first-column"></div>
                <div className="home-page-header__title-second-column">
                    <h2 className="home-page-header__title">{data.title}</h2>
                </div>
            </div>

            <div className="home-page-header__description-container">
                <div className="home-page-header__description-first-column">
                    <p className="home-page-header__description">{data.description}</p>
                    <p className="home-page-header__description">{data.subDescription}</p>
                </div>
                <div className="home-page-header__description-second-column"></div>
            </div>
        </section>
    )
}