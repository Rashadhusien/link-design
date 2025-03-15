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
    imgSrc: "/testi1.jpg",
    name: "أحمد القحطاني",
    message:
      "خدمة رائعة! كانوا محترفين للغاية ووصلوا في الوقت المحدد. أوصي بهم بشدة لأي شخص يحتاج إلى خدمات سباكة موثوقة.",
  },
  {
    id: uuid(),
    imgSrc: "/testi2.jpg",
    name: "سارة يوسف",
    message:
      "عمل ممتاز! فريق العمل كان ودودًا ومتعاونًا جدًا، وتم حل مشكلتي بسرعة وكفاءة. بالتأكيد سأتعامل معهم مرة أخرى.",
  },
  {
    id: uuid(),
    imgSrc: "/testi3.jpg",
    name: "محمد العتيبي",
    message:
      "أفضل خدمة حصلت عليها على الإطلاق! جودة العمل لا يعلى عليها، والأسعار مناسبة جدًا. شكراً لكم!",
  },
  {
    id: uuid(),
    imgSrc: "/testi-4.jpg",
    name: "ليلى الكندي",
    message:
      "كنت مترددة في البداية، ولكن التجربة كانت مذهلة. خدمة العملاء رائعة، والعمل تم بسرعة ودقة. أنصح بهم بشدة!",
  },
  {
    id: uuid(),
    imgSrc: "/testi-5.jpg",
    name: "خالد المري",
    message:
      "احترافية عالية وأسعار معقولة. قاموا بإصلاح المشكلة في وقت قصير وتركوني راضيًا تمامًا عن الخدمة.",
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
    imgSrc: "/sp/swimming-pool.webp",
    title: "حمامات سباحة & ميكانيك",
    description:
      "نحن متخصصون في تصميم وتركيب وصيانة حمامات السباحة بأنظمة ميكانيكية متطورة تضمن الأداء الأمثل. نقدم حلول متكاملة بدءًا من أنظمة الفلترة وتنقية المياه إلى التحكم في درجات الحرارة والإضاءة تحت الماء، لضمان تجربة سباحة آمنة ومريحة.",
    iconUrl: "/servicesIcons/swimming-pool.png",

    servicesContent: [
      {
        id: uuid(),
        title: "مسبح فاخر لتجربة منعشة ومثالية",
        descirption:
          "نوفر لك تجربة سباحة آمنة ومريحة بمستوى فاخر. اغمر نفسك في التميز اليوم!",
        images: ["/sp/pool-1.webp", "/sp/pool-3.webp"],
      },
      {
        id: uuid(),
        title: "تصميم وصيانة المسابح بأعلى المعايير",
        descirption:
          "التصميم الفريد إلى الصيانة الدورية والتنظيف العميق. احصل على مسبح نظيف، آمن، وجاهز للاستخدام في أي وقت. استمتع بالراحة والانتعاش في منزلك!",
        images: ["/sp/pool-2.webp"],
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
        title: "خدمات صيانة وإصلاح سباكة المطبخ",
        descirption:
          "نقدم حلول سباكة احترافية للمطابخ، بما في ذلك إصلاح التسريبات، تركيب المواسير، وصيانة الأحواض لضمان أداء مثالي.",
        images: ["/kitchen/service-single.jpg"],
      },

      {
        id: uuid(),
        title: "تركيب وصيانة سباكة المطبخ بأعلى جودة",
        descirption:
          "خدمات متكاملة لسباكة المطابخ تشمل تركيب الأنابيب، إصلاح الأعطال، وضمان تدفق المياه بسلاسة وكفاءة.",
        images: [
          "/kitchen/kitchen-content1.jpg",
          "/kitchen/kitchen-content2.jpg",
        ],
      },

      {
        id: uuid(),
        title: "إصلاح أعطال السباكة في المطابخ بسرعة وكفاءة",
        descirption:
          "مهندسون متخصصون في معالجة مشاكل سباكة المطابخ، بما في ذلك انسداد المواسير، تسريبات المياه، وصيانة الصمامات.",
        images: ["/kitchen/kitchen-content3.jpg"],
      },

      {
        id: uuid(),
        title: "حلول متكاملة لسباكة المطبخ",
        descirption:
          "نقدم أفضل الخدمات في تركيب وصيانة السباكة للمطابخ، مع استخدام أحدث التقنيات لضمان جودة عالية وأداء مستدام.",
        images: ["/kitchen/service-thum.jpg", "/kitchen/service-thum2-1.jpg"],
      },

      {
        id: uuid(),
        title: "خدمات سباكة الحمامات الشاملة",
        descirption:
          "توفير حلول سباكة متكاملة للحمامات، من تركيب أنظمة الصرف إلى إصلاح التسريبات وضبط ضغط المياه لضمان تجربة مريحة وآمنة.",
        images: [
          "/bathroom/bathroom.jpg",
          "/bathroom/bathroom2.jpeg",
          "/bathroom/bathroom3.jpg",
        ],
      },
    ],
  },
  {
    id: 3,
    imgSrc: "/fire/a-banner.jpg",
    title: "firefighting and fire alarm",
    description:
      "نقدم حلولاً شاملة لمكافحة الحرائق وأنظمة الإنذار، بدءًا من تركيب وصيانة أجهزة الإنذار بالحريق إلى تصميم أنظمة الإطفاء الآلية. هدفنا هو توفير الأمان والحماية لممتلكاتك وسلامة الأشخاص.",
    iconUrl: "/servicesIcons/icon-2.png",

    servicesContent: [
      {
        id: uuid(),
        title: "حلول متكاملة لمكافحة الحرائق في مصر",
        descirption:
          "نقدم لك أحدث تقنيات مكافحة الحرائق لضمان سلامتك وسلامة ممتلكاتك، مع فريق محترف وخدمات متميزة تناسب جميع الاحتياجات.",
        images: ["/fire/fire-10.jpg", "/fire/fire-12.jpeg", "/fire/fire8.jpg"],
      },

      {
        id: uuid(),
        title: "أنظمة حديثة للحماية من الحرائق",
        descirption:
          "نقوم بتصميم وتركيب أنظمة إطفاء متطورة تضمن أعلى معايير الأمان، مع صيانة دورية لضمان الكفاءة والاستجابة السريعة.",
        images: ["/fire/fire-11.png", "/fire/fire2.jpg", "/fire/fire9.jpg"],
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
    servicesContent: [
      {
        id: uuid(),
        title: "تركيب وصيانة أجهزة التكييف في مصر",
        descirption:
          "نقدم خدمات متكاملة في تركيب وصيانة التكييفات بمختلف أنواعها، مع ضمان الكفاءة العالية وتوفير استهلاك الطاقة.",
        images: ["/airconditions/air-1.jpg"],
      },

      {
        id: uuid(),
        title: "أفضل حلول التبريد والتكييف لمختلف الاحتياجات",
        descirption:
          "استمتع بجو مثالي في منزلك أو مكتبك مع خدماتنا المتخصصة في تركيب وصيانة أنظمة التكييف بأحدث التقنيات.",
        images: ["/airconditions/air-2.jpg"],
      },
    ],
  },
  {
    id: 5,
    imgSrc: "/finishing/a-banner.png",
    title: "التشطيب المتكامل",
    description:
      "نقدم خدمات التشطيب المتكامل التي تغطي جميع جوانب البناء والتجديد، من الأرضيات والحوائط إلى الأسقف والديكورات. نحن نحرص على تقديم حلول تشطيب تعكس رؤيتك وتحقق أعلى معايير الجودة والجمال.",
    iconUrl: "/servicesIcons/icon-5.png",
    servicesContent: [
      {
        id: uuid(),
        title: "خدمات التشطيبات والديكور بأعلى جودة",
        descirption:
          "نقدم لك حلول تشطيبات متكاملة، باستخدام أحدث المواد والتقنيات العصرية، لنحقق لك التصميم المثالي لمنزلك أو مكتبك.",
        images: ["/finishing/finish-1.jpg", "/finishing/finish-2.jpg"],
      },

      {
        id: uuid(),
        title: "تشطيبات راقية بتصاميم عصرية",
        descirption:
          "سواء كنت تبحث عن تشطيب فاخر أو تصميم عملي ومريح، فريقنا المتخصص سيحول أفكارك إلى واقع بأعلى جودة ودقة.",
        images: ["/finishing/finish-3.jpg"],
      },
    ],
  },
];
