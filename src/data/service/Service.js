import {FiCircle, FiSquare, FiTriangle} from "react-icons/fi";
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
    title: "",
    image: {
      src: "",
      alt: "",
    },
    items: {
      subTitle: "",
      subItems: {
        icon: "",
        description: "",
      },
    },
    description: {
      title: "",
      content: "",
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
