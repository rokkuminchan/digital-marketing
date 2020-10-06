import vnjp from "../img/AboutUs/vnjp.jpg";
import wrh from "../img/AboutUs/world-recruit-history.jpeg";
import mission from "../img/AboutUs/mission.png";
import szksensei from "../img/AboutUs/szksensei.jpg";
import huy from "../img/AboutUs/huy.jpg";
import loc from "../img/AboutUs/loc.jpg";
import yen from "../img/AboutUs/yen.jpg";
import vien from "../img/AboutUs/vien.jpg";
import duc from "../img/AboutUs/duc.jpg";
import bkhn from "../img/AboutUs/bkhn.jpg";
import bkdn from "../img/AboutUs/bkdn.jpg";
import bcvt from "../img/AboutUs/bcvt.jpg";
import box from "../img/AboutUs/box.svg";
import key from "../img/AboutUs/key.svg";
import briefcase from "../img/AboutUs/briefcase.svg";
import lifebuoy from "../img/AboutUs/lifebuoy.svg";
import teamcharacteristic from "../img/AboutUs/teamcharacristic.jpeg";

const AboutUsData = {
  title: "私たちは第二世代のベトナム人ITエンジニアのチームです。",
  description:
    "高度IT人材として日本のDXに貢献するために、普通の日本人と同じように、日本語の読み書きや会話ができ、日本の文化を理解し、尊重し、日本人の働き方を学んでいます。また、最新のIT技術を学び、仕事に役立つシステムを設計・実装します。",
  image: {
    src: "",
    alt: "",
  },
  mission: {
    title: "MISSION",
    description: "高度IT人材で日本のDXに貢献する。",
    image: {
      src: mission,
      alt: "mission",
    },
  },
  vision: {
    title: "ビジョン",
    description:
      "外国人IT技術者の「３つの壁」を乗り超え、、最先端のIT技術を駆使して日本をサポートする。",

    items: [
      {
        title: "言葉の壁",
        description:
          "普通の日本人と同じように、日本語の読み書きや会話ができる。",
      },
      {
        title: "文化の壁",
        description: "日本の文化を理解し、尊重する。、保存する。",
      },
      {
        title: "業務の壁",
        description: "日本人の働き方を学び、仕事に役立つシステムを設計する。",
      },
    ],
  },
  teamCharacteristic: {
    title: "ITチームの特徴",
    description:
      "アジリティーが高く、要件定義から運用・サポートまで、また、小規模な開発から大規模開発まで、ご予算と納期に合わせたチームとご提案します。生産性と品質に自信があります。",
    image: {
      src: teamcharacteristic,
      alt: "teamcharacteristic",
    },
    items: [
      {
        icon: { src: box, alt: "icon1" },
        description: "アジリティが高い 高い実装能力を持ち、変更にも強い。",
      },
      {
        icon: { src: key, alt: "icon2" },
        description:
          "要件定義から運用・サポートまでアプリケーション開発の全ての工程に対応可能です。",
      },
      {
        icon: { src: briefcase, alt: "icon3" },
        description:
          "小規模から大規模まで納期と予算に合わせたチームをご提案します。",
      },
      {
        icon: { src: lifebuoy, alt: "icon4" },
        description:
          "生産性と品質トレーニングされた息の合ったチームだから、生産性と品質の高さに自信があります。",
      },
    ],
  },
  memberCharacteristic: {
    title: "ITチームメンバーの特徴",
    description: "私たちは第二世代のベトナム人ITエンジニアのチームです。",

    items: [
      {
        css: "member-characterstic__items--border-red",
        title: "日本が好きで",
        description:
          "技術が好きなメンバーです。日本人の仕事の仕方や新しい技術を積極的に学習しています。また、お互いを助け合うベトナム人の国民性もあり、チームワークが得意です。",
      },
      {
        css: "member-characterstic__items--border-yellow",
        title: "日本が好き",
        description:
          "全員が日本在住。日本に興味を持って一生懸命に日本語を学び、日本で暮らし日本人と働いて、日本の良さを体験している技術者です。言葉や文化、そして業務の理解力で違いが出ます。",
      },
      {
        css: "member-characterstic__items--border-green",
        title: "技術が好き",
        description:
          "全員が中高時代からITに興味を持ち、ベトナムまたは、日本で情報処理系の教育を受けた技術者です。好きなことだから頑張れる。また、最先端の技術を常に学んでいます。",
      },
      {
        css: "member-characterstic__items--border-blue",
        title: "チームが好き",
        description:
          "お互いを理解しあい、強い絆で結ばれたチームです。技術の習得も仕事も力を合わせて、最高の結果を出します。",
      },
    ],
  },
  memberIntroduction: {
    title: "メンバー紹介",
    description:
      "我々は優秀なベトナム人エンジン中心としたチームです。レベルの高いべトナム大学の情報処理学科を卒業し、実務経験も豊富にあります。",
    items: [
      {
        title: "CTO 鈴木高弘",
        image: {
          src: szksensei,
          alt: "szksensei",
        },
        description:
          "ITアーキテクトとして、様々な分野のプロジェクトを成功させた実績があります。オブジェクト指向の教育をする会社の立ち上げや教育コースの設計や技術者の育成も手掛けています。ワールドのITチームでは、これからIT業界で活躍するために必要なスキルを身に着ける為の教育プログラムを監修しています。ベトナムが大好きです。写真は、ベトナムの村のお寺に行った時のものです。",
      },
      {
        title: "ヴー・ドゥック・フィー",
        image: {
          src: huy,
          alt: "huy",
        },
        description:
          "ベトナムであるハノイ工科大学で情報技術を卒業した後、日本に就職することにしました。私はインターネットというツールの魅力を最大限に活かし、クライアントのビジネスを成功へと導くサイトをつくりあげるプロとして、WEBデザインを手がけてきました。今後も顧客とコミュニケーションをとりながら、多くのサービスを提供できるエンジニアとしてスキルアップしていきたいと考えています。",
      },
      {
        title: "チャン・ミン・ロック",
        image: {
          src: loc,
          alt: "loc",
        },
        description:
          "ベトナムであるハノイ工科大学で情報技術を卒業した後、日本に就職することにしました。私はインターネットというツールの魅力を最大限に活かし、クライアントのビジネスを成功へと導くサイトをつくりあげるプロとして、WEBデザインを手がけてきました。今後も顧客とコミュニケーションをとりながら、多くのサービスを提供できるエンジニアとしてスキルアップしていきたいと考えています。",
      },
      {
        title: "ダオ・ハイ・イエン",
        image: {
          src: yen,
          alt: "yen",
        },
        description:
          "私はダオ・ハイ・イエンと申します。郵政電信工芸 学院での専攻はITです。大学卒業して担当したプロジェクトは病院や銀行や電子情 報やイントラネットに関するものです。私はテスターとし て参加していました。プロジェクトの開発環境はジャーバ 、シェアポイント、アイオーエスやアンドロイドなどです 。私は調査、分析、テスト、管理を担当しました。 テストについて単体テスト、結合テストとシステムテストを 担当しました。将来、私は色々 な技術を学びたいです。",
      },
      {
        title: "ハ・ラム ・ヴィエン",
        image: {
          src: vien,
          alt: "vien",
        },
        description:
          "ダナン工科大学に電子通信学部を卒業した後ベトナムに日本精機株式会社のブランチで働きました。日本精機会社で組込システムのプロジェクトに約二年間働きました。車メータのソフトに関する仕事、詳細設計、コーディング、単体テスト、結合テストなどの開発を経験しました。日本にてITの知識や経験をもっと伸ばしていきたいと思い、ワールド会社に入社して、今まで1年半働いています。プロジェクトの言語は、C、Javaなどを習得しました。特に、C言語は実務経験がありました。日本に就職する目的は、技術・スキルを向上させて、日本語を勉強します。",
      },
      {
        title: "ヴー・アイン・ドゥック",
        image: {
          src: duc,
          alt: "duc",
        },
        description:
          "どうも、初めまして！ 今期から新たにワルードITチームの一員として活動させていただく事になった山口短期大学情報メディア学部の　ヴ　アインドｳックと言います！出身はベトナムのハノイです。来日してからちょうど２年迎えました。経験が浅くて分からないことが多いかもしれませんがワルードチームでは”一人じゃない”で先輩たちは優しく教え頂いた本当に有り難い！ 顧客満足のため、良い品質、生産性を高めるようにすると考えています。 精一杯頑張りますので、宜しくお願い致します！",
      },
    ],
  },
  worldRecruitHistory: {
    title: "ベトナム人技術者の採用",
    description:
      "ベトナムは若者の人国が多く、国としてもIT技術に力を入れていますので、IT業界での慢性的な人材不足を解決する国として注目されています。ワールドでも、ベトナムに注目して、2018年からIT人材の採用をしてきています。",
    image: {
      src: wrh,
      alt: "WorldRecruitHistory",
    },
  },
  vietnamUniversity: {
    title: "ベトナムの大学",
    description:
      "ワールドのITチームでは、ベトナムのトップレベル大学とMOUを締結するとともに、情報処理系学部の卒業生たちを採用しています。ITチームのメンバーの卒業大学をご紹介します。",
    items: [
      {
        title: "ハノイ 工科大学",
        image: {
          src: bkhn,
          alt: "bkhn",
        },
        description: [
          {
            title: "■経歴",
            subtitle: ["1956 創立"],
          },
          {
            title: "■特徴",
            subtitle: [
              "ハノイ工科大学は、ベトナムで最初の国立工科大学として創立された。その後エンジニアの訓練のための機関や国のほとんど全ての工業部局のための科学研究のための機関としての役割を担っている。",
            ],
          },
          {
            title: "■規模",
            subtitle: [
              "学部生：33,000名以上, 大学院生：3,600名以上（修士課程学生 ：3,000名以上、博士課程学生：600名）",
              "教職員：1,748名、（うち教授・准教授：259名, 博士：765名）",
            ],
          },
        ],
        link: "https://hust.edu.vn/",
      },
      {
        title: "ダナン工科大学",
        image: {
          src: bkdn,
          alt: "bkdn",
        },
        description: [
          {
            title: "■経歴",
            subtitle: ["1953 創立"],
          },
          {
            title: "■特徴",
            subtitle: [
              "ダナン工科大学は、ダナン大学傘下の技術系大学。ダナン工科大学の卒業生たちの多くが専門家として、ベトナム国内の学術、経済、教育などの発展を支えている。大学の位置するダナン市は、ベトナム５大都市のひとつで。",
            ],
          },
          {
            title: "■規模",
            subtitle: [
              "学部生：14,000名以上）",
              "教職員：830名、（うち教授・准教授：63名,  博士：295名 ）",
            ],
          },
        ],
        link: "http://dut.udn.vn/",
      },
      {
        title: "郵政電信工芸学院",
        image: {
          src: bcvt,
          alt: "bcvt",
        },
        description: [
          {
            title: "■経歴",
            subtitle: ["1975 創立"],
          },
          {
            title: "■特徴",
            subtitle: [
              "郵政電信工芸学院は、研究力の評判の高い研究教育機関です。 情報通信技術の大学院および大学院教育があります。 アカデミーは、情報通信省の訓練機関です。",
            ],
          },
          {
            title: "■規模",
            subtitle: [
              "学部生：15,000名以上 、大学院生：400名以上",
              "教職員：767名、（うち  博士：112名 ）",
            ],
          },
        ],
        link: " https://portal.ptit.edu.vn/",
      },
    ],
  },
  relationship: {
    title: "ベトナムと日本との関係",
    description:
      "2009年に日・ベトナム経済連携協定を締結、貿易の自由化、ベトナム人人材の受け入れ経済的結びつきを強める下地が出来ました。2012年にEPAが発効しベトナムの看護師・介護福祉士候補者の受け入れとベトナム人労働者の受け入れが始まりました。その後、日本国内の日本語学校が急増し出稼ぎ目的の留学生が来日するようにもなっています。技能実習生の数では、2016年に中国を抜き2018年には半分を占めるほどになりました。",
    image: {
      src: vnjp,
      alt: "about-us-vietnam-and-japan",
    },
  },
  companyInformation: {
    address: "〒500-8856  岐阜県岐阜市橋本町2-8  濃飛ニッセイビル6階",
    phone: "TEL 058-255-3066",
    fax: "FAX 058-255-3633",
  },
  // footer: {
  //   title: "WORLD WORKS",
  //   link: "Info@https://world-works.co.jp",
  //   description:
  //     "Copyright (C)　愛知・岐阜・三重の人材派遣や業務請負など総合人材サービスはワールドグループ",
  //   items: [
  //     {
  //       title: "icon1",
  //       descripsion: "Twitter",
  //     },
  //     {
  //       title: "icon2",
  //       descripsion: "Facebook",
  //     },
  //     {
  //       title: "icon3",
  //       descripsion: "Instagram",
  //     },
  //   ],
  // },
};

export default AboutUsData;
