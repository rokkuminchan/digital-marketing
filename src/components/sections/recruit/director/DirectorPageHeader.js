import React from "react";
import "./DirectorPageHeader.css";


export default function PageHeader() {
  return (
    <section className="director-page-header">
        <div className="director-page-header__img">
            <div className="director-page-header__content">
              <div className ="director-page-header__content-text">
                <h2 className = "director-page-header__title">デイレクター</h2><br/>
                <p className="director-page-header__description">Webアプリケーション開発の責任者です。お客様の要件を取りまとめ、チームのメンバーと協力して最高のWebアプリケーションをお客様に提供していただきます</p>
              </div>
            </div>
        </div>
       
    </section>
  );
}
