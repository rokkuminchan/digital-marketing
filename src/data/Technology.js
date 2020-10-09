import pwa from "../../images/Technology/pwa.png";
import amp from "../../images/Technology/amp.png";
import adobe from "../../images/Technology/adobe-xd.png";
import bem from "../../images/Technology/bem.png";
import github from "../../images/Technology/github.png";
import jam from "../../images/Technology/jam-stack.png";
import jest from "../../images/Technology/jest.png";
import material from "../../images/Technology/material-design.png";
import react from "../../images/Technology/react-js.png";
import tpd from "../../images/Technology/technology-pageheader.png";
import trello from "../../images/Technology/trello.png";
import vscode from "../../images/Technology/vs-code.png";

const TechnologyData = {
  technologyList: {
    title: "技術リスト",
    description:
      "主要なテクノロジーやツールをご紹介しています。詳細は、リンクからオフィシャル・サイトをご覧ください",
    item: [
      {
        title: "PWA",
        subtitle:
          "PWAとは、モバイル端末でウェブサイトを表示するときに、まるでネイティブアプリのような動作を可能にする仕組みです",
        link: "https://web.dev/progressive-web-apps/",
        image: {
          src: pwa,
          alt: "PWA",
        },
      },
      {
        title: "AMP",
        subtitle:
          "AMPは、高速なモバイル対応のページを作るためのWebコンポーネント・フレームワークです",
        link: "https://amp.dev/",
        image: {
          src: amp,
          alt: "AMP",
        },
      },
      {
        title: "BEM",
        subtitle:
          "BEM(Block Element Modifier)は、フロントエンドで再利用可能なコンポーネントとコード共有を実現するのに役立つ方法論です",
        link: "https://en.bem.info/",
        image: {
          src: bem,
          alt: "BEM",
        },
      },
      {
        title: "GitHub",
        subtitle:
          "GitHub（ギットハブ）は、ソフトウェア開発のプラットフォームであり、ソースコードをホスティングするコードのバージョン管理システムです",
        link: "https://github.com/",
        image: {
          src: github,
          alt: "GitHub",
        },
      },
      {
        title: "JAM Stack",
        subtitle:
          "JAM Stackは、パフォーマンスがく、高いセキュリティ、また安くスケールしやすいWebアプリを開発する新しいアーキテクチャです",
        link: "https://jamstack.org/",
        image: {
          src: jam,
          alt: "JAM Stack",
        },
      },
      {
        title: "JEST",
        subtitle:
          "Jest はシンプルさを重視した、快適な JavaScript テスティングフレームワークです",
        link: "https://jestjs.io/",
        image: {
          src: jest,
          alt: "JEST",
        },
      },
      {
        title: "Material Design",
        subtitle:
          "チームでAndroid、iOS、Flutter、およびWeb向けの高品質なデジタルエクスペリエンスを構築できるようにGoogleが作成したデザイン・システムです",
        link: "https://material.io/",
        image: {
          src: material,
          alt: "Material Design",
        },
      },
      {
        title: "React",
        subtitle:
          "React は、Facebookとコミュニティによって開発されているインタラクティブなユーザインタフェース構築のためのJavaScriptライブラリです",
        link: "https://reactjs.org/",
        image: {
          src: react,
          alt: "React",
        },
      },
      {
        title: "Trello",
        subtitle:
          "Trelloは、アジャイル・プロジェクトに最適なタスク管理ツールです",
        link: "https://trello.com/",
        image: {
          src: trello,
          alt: "Trello",
        },
      },
      {
        title: "Visual Studio Code",
        subtitle:
          "オープンソースで開発され様々なプラットフォームで動作するエディターです",
        link: "https://code.visualstudio.com/",
        image: {
          src: vscode,
          alt: "Visual Studio Code",
        },
      },
      {
        title: "XD",
        subtitle:
          "webサイトやモバイルアプリのデザインとプロトタイプの作成が、これ1つでできるAdobeのオールインワン製品です",
        link: "https://www.adobe.com/jp/products/xd.html",
        image: {
          src: adobe,
          alt: "Adobe XD",
        },
      },
      {
        title: "",
        subtitle: "",
        link: "",
        image: {
          src: "",
          alt: "",
        },
      },
    ],
  },
};

export default TechnologyData;
