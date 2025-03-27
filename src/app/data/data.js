import { v4 as uuid } from "uuid";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

import { Home, Info, Wrench, Mail, Users } from "lucide-react";

export const NumberOfClientsData = [
  {
    src: "funfact-icon-1",
    countNumber: 8,
    txt: "مشاريع تشغيلية",
    IsThousand: false,
    plus: false,
  },
  {
    src: "funfact-icon-2",
    countNumber: 10,
    txt: "أعضاء الفريق",
    IsThousand: false,
    plus: true,
  },
  {
    src: "funfact-icon-3",
    countNumber: 10,
    txt: "عملاء سعداء",
    IsThousand: true,
    plus: false,
  },
  {
    src: "funfact-icon-4",
    countNumber: 7,
    txt: "عدد الجوائز",
    IsThousand: false,
    plus: false,
  },
];

export const social = [
  {
    id: uuid(),
    href: "https://wa.me/+201003905069",
    title: "WhatsApp",
    icon: <FaWhatsapp size={22} className="hover:scale-105 duration-300" />, // React Icons
  },
  {
    id: uuid(),
    href: "https://www.facebook.com/enghusseinrashad/",
    title: "Facebook",
    icon: <FaFacebookF size={22} className="hover:scale-105 duration-300" />, // Lucide
  },
  {
    id: uuid(),
    href: "tel:+201003905069",
    title: "01003905069",
    icon: <IoCallSharp size={22} className="hover:scale-105 duration-300" />, // Lucide
  },
];

export const headerNav = {
  home: "الرئيسية",
  about: "معلومات عننا",
  services: "الخدمات",
  contactUs: "تواصل معنا",
  // projects: "المشاريع",
  testimonial: "بعض الأراء",
};

export const quickLinks = [
  {
    id: uuid(),
    href: "/about",
    content: headerNav.about,
  },
  {
    id: uuid(),
    href: "/services",
    content: headerNav.services,
  },
  {
    id: uuid(),
    href: "/contact",
    content: headerNav.contactUs,
  },
  {
    id: uuid(),
    href: "/testemonials",
    content: headerNav.testimonial,
  },
];

export const navData = [
  {
    href: "/",
    icon: <Home size={22} />,
    text: "الرئيسية",
  },
  {
    href: "/about",
    icon: <Info size={22} />,
    text: "معلومات عننا",
  },
  {
    href: "/services",
    icon: <Wrench size={22} />,
    text: "الخدمات",
  },
  {
    href: "/contact",
    icon: <Mail size={22} />,
    text: "اتصل بنا",
  },
  {
    href: "/testimonials",
    icon: <Users size={22} />,
    text: "بعض الأراء",
  },
];

export const itemData = [
  {
    img: "/about-img-2.jpg",
    title: "bathroom",
    width: 400,
    height: 400,
  },
  {
    img: "/about-img-2.jpg",
    title: "Burger",
    rows: 1,
    cols: 1,
  },
  {
    img: "/about-img-2.jpg",
    title: "Burger",
    rows: 1,
    cols: 1,
  },
  {
    img: "/about-img-2.jpg",
    title: "Camera",
    rows: 1,
    cols: 1,
  },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Coffee',
  //   cols: 2,
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Hats',
  //   cols: 2,
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Honey',
  //   author: '@arwinneil',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Basketball',
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Fern',
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Mushrooms',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Sea star',
  // },
  // {
  //   img: '/about-img-2.jpg',
  //   title: 'Bike',
  //   cols: 2,
  // },
];

// export const services = [
//   {
//     id: 1,
//     imgSrc: "swimming-pool-banner",
//     title: "حمامات سباحة & ميكانيك",
//     description:
//       "نحن متخصصون في تصميم وتركيب وصيانة حمامات السباحة بأنظمة ميكانيكية متطورة تضمن الأداء الأمثل. نقدم حلول متكاملة بدءًا من أنظمة الفلترة وتنقية المياه إلى التحكم في درجات الحرارة والإضاءة تحت الماء، لضمان تجربة سباحة آمنة ومريحة.",
//     iconUrl: "swimming-pool-icon",

//     servicesContent: [
//       {
//         id: uuid(),
//         title: "مسبح فاخر لتجربة منعشة ومثالية",
//         descirption:
//           "نوفر لك تجربة سباحة آمنة ومريحة بمستوى فاخر. اغمر نفسك في التميز اليوم!",
//         images: ["pool-1"],
//       },
//       {
//         id: uuid(),
//         title: "تصميم وصيانة المسابح بأعلى المعايير",
//         descirption: "f",
//         images: ["pool-3"],
//       },
//     ],
//   },
//   {
//     id: 2,
//     imgSrc: "pluming-banner",
//     title: "السباكة و شبكات المياه",
//     description:
//       "نوفر حلول سباكة وشبكات مياه متكاملة تغطي جميع احتياجاتك، من تركيب الأنابيب وإصلاح التسريبات إلى تصميم وتنفيذ الشبكات المائية المعقدة.",
//     iconUrl: "pluming-icon",

//     servicesContent: [
//       {
//         id: uuid(),
//         title: "خدمات صيانة وإصلاح سباكة المطبخ",
//         descirption:
//           "نقدم حلول سباكة احترافية للمطابخ، بما في ذلك إصلاح التسريبات، تركيب المواسير، وصيانة الأحواض لضمان أداء مثالي.",
//         images: ["service-single-1"],
//       },

//       {
//         id: uuid(),
//         title: "تركيب وصيانة سباكة المطبخ بأعلى جودة",
//         descirption:
//           "خدمات متكاملة لسباكة المطابخ تشمل تركيب الأنابيب، إصلاح الأعطال، وضمان تدفق المياه بسلاسة وكفاءة.",
//         images: ["kitchen-content1_udunxt", "kitchen-content2_csqjib"],
//       },

//       {
//         id: uuid(),
//         title: "إصلاح أعطال السباكة في المطابخ بسرعة وكفاءة",
//         descirption:
//           "مهندسون متخصصون في معالجة مشاكل سباكة المطابخ، بما في ذلك انسداد المواسير، تسريبات المياه، وصيانة الصمامات.",
//         images: ["kitchen-content3_snlzjk"],
//       },

//       {
//         id: uuid(),
//         title: "خدمات سباكة الحمامات الشاملة",
//         descirption:
//           "توفير حلول سباكة متكاملة للحمامات، من تركيب أنظمة الصرف إلى إصلاح التسريبات وضبط ضغط المياه لضمان تجربة مريحة وآمنة.",
//         images: ["bathroom4_zdddtc", "bathroom_xzjgox", "bathroom3_kqrdyn"],
//       },
//     ],
//   },
//   {
//     id: 3,
//     imgSrc: "firefighting-banner",
//     title: "firefighting and fire alarm",
//     description:
//       "نقدم حلولاً شاملة لمكافحة الحرائق وأنظمة الإنذار، بدءًا من تركيب وصيانة أجهزة الإنذار بالحريق إلى تصميم أنظمة الإطفاء الآلية. هدفنا هو توفير الأمان والحماية لممتلكاتك وسلامة الأشخاص.",
//     iconUrl: "fire-icon",

//     servicesContent: [
//       {
//         id: uuid(),
//         title: "حلول متكاملة لمكافحة الحرائق في مصر",
//         descirption:
//           "نقدم لك أحدث تقنيات مكافحة الحرائق لضمان سلامتك وسلامة ممتلكاتك، مع فريق محترف وخدمات متميزة تناسب جميع الاحتياجات.",
//         images: ["fire-10_xtpooq", "fire7_p7m8uj", "fire8_di3ngt"],
//       },

//       {
//         id: uuid(),
//         title: "أنظمة حديثة للحماية من الحرائق",
//         descirption:
//           "نقوم بتصميم وتركيب أنظمة إطفاء متطورة تضمن أعلى معايير الأمان، مع صيانة دورية لضمان الكفاءة والاستجابة السريعة.",
//         images: ["fire-12_k30e8e", "fire9_v3ckyc", "fire-11_sikqg9"],
//       },
//     ],
//   },
//   {
//     id: 4,
//     imgSrc: "air-conditioning-banner",
//     title: "التكيفات و الشيلد واتر",
//     description:
//       "نقدم خدمات التكييف المتكاملة والشيلد واتر، مع التركيز على توفير أنظمة تبريد فعالة وموفرة للطاقة. سواء كنت بحاجة إلى تركيب أنظمة جديدة أو صيانة الأنظمة الحالية، فإن فريقنا مستعد لضمان راحتك",
//     iconUrl: "air-conditioner-icon",
//     servicesContent: [
//       {
//         id: uuid(),
//         title: "تركيب وصيانة أجهزة التكييف في مصر",
//         descirption:
//           "نقدم خدمات متكاملة في تركيب وصيانة التكييفات بمختلف أنواعها، مع ضمان الكفاءة العالية وتوفير استهلاك الطاقة.",
//         images: ["air-1_rob3bl"],
//       },

//       {
//         id: uuid(),
//         title: "أفضل حلول التبريد والتكييف لمختلف الاحتياجات",
//         descirption:
//           "استمتع بجو مثالي في منزلك أو مكتبك مع خدماتنا المتخصصة في تركيب وصيانة أنظمة التكييف بأحدث التقنيات.",
//         images: ["air-2_cag2kc"],
//       },
//     ],
//   },
//   {
//     id: 5,
//     imgSrc: "finishing-banner",
//     title: "التشطيب المتكامل",
//     description:
//       "نقدم خدمات التشطيب المتكامل التي تغطي جميع جوانب البناء والتجديد، من الأرضيات والحوائط إلى الأسقف والديكورات. نحن نحرص على تقديم حلول تشطيب تعكس رؤيتك وتحقق أعلى معايير الجودة والجمال.",
//     iconUrl: "finishing-icon",
//     servicesContent: [
//       {
//         id: uuid(),
//         title: "خدمات التشطيبات والديكور بأعلى جودة",
//         descirption:
//           "نقدم لك حلول تشطيبات متكاملة، باستخدام أحدث المواد والتقنيات العصرية، لنحقق لك التصميم المثالي لمنزلك أو مكتبك.",
//         images: ["finish-1_cqe82e", "finish-2_bpnpkw"],
//       },

//       {
//         id: uuid(),
//         title: "تشطيبات راقية بتصاميم عصرية",
//         descirption:
//           "سواء كنت تبحث عن تشطيب فاخر أو تصميم عملي ومريح، فريقنا المتخصص سيحول أفكارك إلى واقع بأعلى جودة ودقة.",
//         images: ["finish-3_lhzjb9"],
//       },
//     ],
//   },
// ];

// export const testimonials = [
//   {
//     id: uuid(),
//     name: "أحمد القحطاني",
//     message:
//       "خدمة رائعة! كانوا محترفين للغاية ووصلوا في الوقت المحدد. أوصي بهم بشدة لأي شخص يحتاج إلى خدمات سباكة موثوقة.",
//   },
//   {
//     id: uuid(),
//     name: "سارة يوسف",
//     message:
//       "عمل ممتاز! فريق العمل كان ودودًا ومتعاونًا جدًا، وتم حل مشكلتي بسرعة وكفاءة. بالتأكيد سأتعامل معهم مرة أخرى.",
//   },
//   {
//     id: uuid(),
//     name: "محمد العتيبي",
//     message:
//       "أفضل خدمة حصلت عليها على الإطلاق! جودة العمل لا يعلى عليها، والأسعار مناسبة جدًا. شكراً لكم!",
//   },
//   {
//     id: uuid(),
//     name: "ليلى الكندي",
//     message:
//       "كنت مترددة في البداية، ولكن التجربة كانت مذهلة. خدمة العملاء رائعة، والعمل تم بسرعة ودقة. أنصح بهم بشدة!",
//   },
//   {
//     id: uuid(),
//     name: "خالد المري",
//     message:
//       "احترافية عالية وأسعار معقولة. قاموا بإصلاح المشكلة في وقت قصير وتركوني راضيًا تمامًا عن الخدمة.",
//   },
// ];
