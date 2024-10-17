import { v4 as uuid } from "uuid";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleIcon from "@mui/icons-material/People";

import { Facebook, WhatsApp } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";

export const NumberOfClientsData = [
  {
    src: "/clientsIcons/funfact-icon-1.png",
    countNumber: 8,
    txt: "مشاريع تشغيلية",
    IsThousand: false,
    plus: false,
  },
  {
    src: "/clientsIcons/funfact-icon-2.png",
    countNumber: 10,
    txt: "أعضاء الفريق",
    IsThousand: false,
    plus: true,
  },
  {
    src: "/clientsIcons/funfact-icon-3.png",
    countNumber: 10,
    txt: "عملاء سعداء",
    IsThousand: true,
    plus: false,
  },
  {
    src: "/clientsIcons/funfact-icon-4.png",
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
    title: "whatsapp",
    icon: <WhatsApp sx={{ fontSize: "22px" }} />,
  },
  {
    id: uuid(),
    href: "https://www.facebook.com/enghusseinrashad/",
    title: "facebook",
    icon: <Facebook sx={{ fontSize: "22px" }} />,
  },
  {
    id: uuid(),
    href: "tel:+201003905069",
    title: "01003905069",
    icon: (
      <CallIcon className="text-[15px] md:text-[17px] hover:scale-105 duration-300" />
    ),
  },
  // {
  //   id: uuid(),
  //   href: "/",
  //   title: "instagram",
  //   icon: <InstagramIcon sx={{ fontSize: "22px" }} />,
  // },
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
    icon: <HomeIcon />,
    text: "الرئيسية",
  },
  {
    href: "/about",
    icon: <InfoIcon />,
    text: "معلومات عننا",
  },

  {
    href: "/services",
    icon: <BuildIcon />,
    text: "الخدمات",
  },
  {
    href: "/contact",
    icon: <ContactPageIcon />,
    text: "اتصل بنا",
  },
  // {
  //   href: "/projects",
  //   icon: <BusinessCenterIcon />,
  //   text: "المشاريع",
  // },
  {
    href: "/testemonials",
    icon: <PeopleIcon />,
    text: "بعض الأراء",
  },
];

export const testimonials = [
  {
    id: uuid(),
    imgSrc: "/testi-1.jpg",
    name: "موريل جاريت",
    message:
      "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
  {
    id: uuid(),
    imgSrc: "/testi-2.jpg",
    name: "سيمون ميندوزا",
    message:
      "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
  {
    id: uuid(),
    imgSrc: "/testi-3.jpg",
    name: "هنري بارتون",
    message:
      "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
  {
    id: uuid(),
    imgSrc: "/testi-2.jpg",
    name: "سيمون ميندوزا",
    message:
      "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
  {
    id: uuid(),
    imgSrc: "/testi-3.jpg",
    name: "هنري بارتون",
    message:
      "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
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

export const services = [
  {
    id: 1,
    imgSrc: "/sp/swimming-pool.avif",
    title: "حمامات سباحة & ميكانيك",
    description:
      "نحن متخصصون في تصميم وتركيب وصيانة حمامات السباحة بأنظمة ميكانيكية متطورة تضمن الأداء الأمثل. نقدم حلول متكاملة بدءًا من أنظمة الفلترة وتنقية المياه إلى التحكم في درجات الحرارة والإضاءة تحت الماء، لضمان تجربة سباحة آمنة ومريحة.",
    iconUrl: "/servicesIcons/swimming-pool.png",

    servicesContent: [
      {
        id: uuid(),
        title: "خبير في خدمات خطوط الغاز",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/gas/gas-content1.jpg"],
      },

      {
        id: uuid(),
        title: "خبير في خدمات خطوط الغاز",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/gas/gas-content2.jpeg"],
      },
    ],
  },
  {
    id: 2,
    imgSrc: "/p&w/b-banner.jpg",
    title: "السباكة و شبكات المياه",
    description:
      "نوفر حلول سباكة وشبكات مياه متكاملة تغطي جميع احتياجاتك، من تركيب الأنابيب وإصلاح التسريبات إلى تصميم وتنفيذ الشبكات المائية المعقدة.",
    iconUrl: "/servicesIcons/icon-6.png",

    servicesContent: [
      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/kitchen/service-single.jpg"],
      },

      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          "/kitchen/kitchen-content1.jpg",
          "/kitchen/kitchen-content2.jpg",
        ],
      },

      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/kitchen/kitchen-content3.jpg"],
      },

      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/kitchen/service-thum.jpg", "/kitchen/service-thum2-1.jpg"],
      },
      {
        id: uuid(),
        title: "خبير في خدمات إصلاح خطوط المياه",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/waterlinerepair/water-2.jpg"],
      },

      {
        id: uuid(),
        title: "خبير في خدمات إصلاح خطوط المياه",
        descirption:
          "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: ["/waterlinerepair/water-2.jpg"],
      },
      {
        id: uuid(),
        title: "خدمات سباكة الحمامات الاحترافية في مصر",
        descirption:
          "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: [
          "/bathroom/bathroom.jpg",
          "/bathroom/bathroom2.jpeg",
          "/bathroom/bathroom3.jpg",
        ],
      },
      {
        id: uuid(),
        title: "خدمات سباكة الحمامات الاحترافية في مصر",
        descirption:
          "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: ["/bathroom/bathroom4.jpg", "/bathroom/bathroom3.jpg"],
      },
    ],
  },
  {
    id: 3,
    imgSrc: "/fire/a-banner.jpg",
    title: "fire fighting & Alarm",
    description:
      "نقدم حلولاً شاملة لمكافحة الحرائق وأنظمة الإنذار، بدءًا من تركيب وصيانة أجهزة الإنذار بالحريق إلى تصميم أنظمة الإطفاء الآلية. هدفنا هو توفير الأمان والحماية لممتلكاتك وسلامة الأشخاص.",
    iconUrl: "/servicesIcons/icon-2.png",

    servicesContent: [
      {
        id: uuid(),
        title: "خدمات مكافحة الحرائق في مصر",
        descirption:
          "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: ["/fire/fire6.jpg", "/fire/fire7.jpg", "/fire/fire8.jpg"],
      },
      {
        id: uuid(),
        title: "خدمات مكافحة الحرائق في مصر",
        descirption:
          "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: ["/fire/fire5.jpg", "/fire/fire2.jpg", "/fire/fire1.jpg"],
      },
    ],
  },
  {
    id: 4,
    imgSrc: "/airconditions/a-banner.png",
    title: "التكيفات و الشيلد واتر",
    description:
      "نقدم خدمات التكييف المتكاملة والشيلد واتر، مع التركيز على توفير أنظمة تبريد فعالة وموفرة للطاقة. سواء كنت بحاجة إلى تركيب أنظمة جديدة أو صيانة الأنظمة الحالية، فإن فريقنا مستعد لضمان راحتك",
    iconUrl: "/servicesIcons/air-conditioner.png",
    servicesContent: [],
  },
  {
    id: 5,
    imgSrc: "/finishing/a-banner.png",
    title: "التشطيب المتكامل",
    description:
      "نقدم خدمات التشطيب المتكامل التي تغطي جميع جوانب البناء والتجديد، من الأرضيات والحوائط إلى الأسقف والديكورات. نحن نحرص على تقديم حلول تشطيب تعكس رؤيتك وتحقق أعلى معايير الجودة والجمال.",
    iconUrl: "/servicesIcons/icon-5.png",
    servicesContent: [
      // {
      //   id: uuid(),
      //   title: "خدمات مكافحة الحرائق في مصر",
      //   descirption: "",
      //   images: ["", "", ""],
      // },
      // {
      //   id: uuid(),
      //   title: "خدمات مكافحة الحرائق في مصر",
      //   descirption: "",
      //   images: ["", "", ""],
      // },
    ],
  },
];
