import {FiCircle, FiSquare, FiTriangle, FiHexagon} from "react-icons/fi";
import servicePH from "../../images/Service/servicePH.jpg";
const ServiceData = {
  ServiceHeader: {
    title: "サービス",
    description: "高品質な次世代型Webアプリを迅速に開発するチーム",
    image: {
      src: servicePH,
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
        icon: FiCircle,
        description: "10倍早く走る",
      },
      {
        icon: FiSquare,
        description: "燃費が10倍良い",
      },
      {
        icon: FiTriangle,
        description: "安全性が高い",
      },
      {
        icon: FiHexagon,
        description: "車の価格は２分の1",
      },
    ],
    subDescription1: "PWA、JAM Stack、ヘッドレスCMOの登場により、全く姿を変えつつある現在のWebアプリケーション開発は、WorldのITチームにお任せ下さい。",
    subDescription2: "WorldのITチームお勧めの最新テクノロジーはこちら",
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
            icon: FiCircle,
            description: "生産性が高く、予算と納期の範囲内で製品を開発できること"
          },
          {
            icon: FiSquare,
            description: "短いテスト期間でも高品質な製品を開発できること"
          },
        ]
      },
      {
        title: ["アジリティの高さ"],
        row: [
          {
            icon: FiCircle,
            description: "短いサイクルでリリースを繰り返し行えること"
          },
          {
            icon: FiSquare,
            description: "リリースを繰り返しても生産性が落ちないこと"
          },
          {
            icon: FiTriangle,
            description: "リリース直前の変更でも受け入れられること"
          },
        ]
      },
      {
        title: ["少人数先鋭であること", "(ピザ2枚ルール)"],
        row: [
          {
            icon: FiCircle,
            description: "チーム編成または会議において、無駄がなく生産性が高いこと"
          },
          {
            icon: FiSquare,
            description: "効率的で各自のモチベーションが高いこと"
          },
          {
            icon: FiTriangle,
            description: "お互いをフォローしあい、チームの団結力が強いこと"
          },
        ]
      },
    ],
    image: {
      src: servicePH,
      alt: "",
    },
    comment: ["ピザ2枚ルールとは","ピザ2枚ルールとはAmazonのジェフ・ベゾスが提唱したルールで、1つのチームはピザ2枚を囲める人数以下にしなければならないというものです"],
  },
  
  AgileTeamComposition: {
    title: "",
    description: "",
    items: {
      icon: "",
      description: "",
    },
    image: {
      src: "",
      alt: "",
    },
  },
};

export default ServiceData;
