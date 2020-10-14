const ServiceData = {
  ServiceHeader: {
    title: "サービス",
    description: "高品質な次世代型Webアプリを迅速に開発するチーム",
    image: {
      src: "../../images/Service/servicePH.jpg",
      alt: "service-page-header",
    },
    subDescription:
      "簡単なランティング・ページから高機能なWebアプリケーションまで、様々な規模のプロジェクトに対応します",
  },
  WebApplication: {
    title: "急速に進化を続けるWebアプリーケーション",
    description: "この次世代Webアプリを車に例えると、夢のような車になります。",
    items: [
      {
        icon:{
          name:"FiCircle",
          type:"FiCircle"
        },
        description: "10倍早く走る",
      },
      {
        icon: {          
          name:"FiSquare",
          type:"FiSquare"
        },
        description: "燃費が10倍良い",
      },
      {
        icon: {          
          name:"FiTriangle",
          type:"FiTriangle"
        },
        description: "安全性が高い",
      },
      {
        icon: {          
          name:"FiHexagon",
          type:"FiHexagon"
        },
        description: "車の価格は２分の1",
      },
    ],
    subDescription1: "PWA、JAM Stack、ヘッドレスCMOの登場により、全く姿を変えつつある現在のWebアプリケーション開発は、WorldのITチームにお任せ下さい。",
    subDescription2: "WorldのITチームお勧めの最新テクノロジーは",
    link: {
      title: "こちら",
      src: "../technology",
    },
    image: {
      src: "",
      alt: "Image",
      },
  },
    
  WebApplicationRequirment: {
    title: "Webアプリケーション開発チームに求められる要件にとは",
    items: [
      {
        title: ["生産性と品質の高さ"],
        row: [
          {
            icon:{
              name:"FiCircle",
              type:"FiCircle"
            },
            description: "生産性が高く、予算と納期の範囲内で製品を開発できること"
          },
          {
            icon:{
              name:"FiSquare",
              type:"FiSquare"
            },
            description: "短いテスト期間でも高品質な製品を開発できること"
          },
        ]
      },
      {
        title: ["アジリティの高さ"],
        row: [
          {
            icon:{
              name:"FiCircle",
              type:"FiCircle"
            },
            description: "短いサイクルでリリースを繰り返し行えること"
          },
          {
            icon:{
              name:"FiSquare",
              type:"FiSquare"
            },
            description: "リリースを繰り返しても生産性が落ちないこと"
          },
          {
            icon:{
              name:"FiTriangle",
              type:"FiTriangle"
            },
            description: "リリース直前の変更でも受け入れられること"
          },
        ]
      },
      {
        title: ["少人数先鋭であること", "(ピザ2枚ルール *)"],
        row: [
          {
            icon:{
              name:"FiCircle",
              type:"FiCircle"
            },
            description: "チーム編成または会議において、無駄がなく生産性が高いこと"
          },
          {
            icon:{
              name:"FiSquare",
              type:"FiSquare"
            },
            description: "効率的で各自のモチベーションが高いこと"
          },
          {
            icon:{
              name:"FiTriangle",
              type:"FiTriangle"
            },
            description: "お互いをフォローしあい、チームの団結力が強いこと"
          },
        ]
      },
    ],
    image: {
      src: "../../images/Service/servicePH.jpg",
      alt: "",
    },
    comment: ["* ピザ2枚ルールとは","ピザ2枚ルールとはAmazonのジェフ・ベゾスが提唱したルールで、1つのチームはピザ2枚を囲める人数以下にしなければならないというものです"],
  },
  
  AgileTeamComposition: {
    title: "アジャイル・チームの構成",
    description: "それぞれが得意分野を持ち、全員がコーディング出来るIT技術者のチームです。チームの共通言語は、HTML、CSS、JavaScriptです。必要最小限のドキュメントで迅速に実際に動作するプロダクトを開発します。",
    items: [
      {
        title: "ディレクタ",
        description: "コミュニケーション能力が高く、ディレクションが出来る人材です        ",
        
      },
      {
        title: "デザイナ",
        description: "レスポンシブなWebデザインを理解し、XDにより迅速に要求を目に見える形にします",
      },
      {
        title: "フロントエド・エンジニア",
        description: "Reactにより、Webコンポーネントベースの開発を行います。再利用性、保守性の高いコンポーネントの開発により、システムの規模が大きくなっても、開発スピードが落ちることはありません",
      },
      {
        title: "バックエンド・エンジニア",
        description: "クラウド・バックエンド・サービスを使いこなすエンジニアです。サーバーレスにも対応します",
      },
    ],
  },
};

export default ServiceData;
