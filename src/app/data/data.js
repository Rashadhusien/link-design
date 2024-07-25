import { v4 as uuid } from "uuid";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleIcon from "@mui/icons-material/People";

export const headerNav = {
  home:  "الرئيسية",
  about: "معلومات عننا",
  services: "الخدمات",
  contactUs: "تواصل معنا",
  projects: "المشاريع",
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
    text:'الرئيسية' ,
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
    text: 'اتصل بنا',
  },
  {
    href: "/projects",
    icon: <BusinessCenterIcon />,
    text: 'المشاريع',
  },
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
    message: "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
  {
    id: uuid(),
    imgSrc: "/testi-2.jpg",
    name: "سيمون ميندوزا",
    message: "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
  {
    id: uuid(),
    imgSrc: "/testi-3.jpg",
    name: "هنري بارتون",
    message: "هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، وذلك من خلال صناعة التنضيد. لقد كان النص الوهمي القياسي في الصناعة منذ ذلك الحين.",
  },
]


export const services = [
  {
    id: 1,
    imgSrc: "/service-thumb-1.jpg",
    title: "سباكة المطبخ",
    description: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
    iconUrl: "/icon-1.png",
    servicesContent : [
      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/kitchen/service-single.jpg'
        ],
      },
      
      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/kitchen/kitchen-content1.jpg','/kitchen/kitchen-content2.jpg'
        ],
      },
      
      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/kitchen/kitchen-content3.jpg'
        ],
      },
      
      {
        id: uuid(),
        title: "خدمات سباكة المطبخ الاحترافية في مصر",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/kitchen/service-thum.jpg','/kitchen/service-thum2-1.jpg'
        ],
      },
      
    ]


  },
  {
    id: 2,
    imgSrc: "/service-thumb-2.jpg",
    title: "خدمات خطوط الغاز",
    description: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
    iconUrl: "/icon-2.png",
    servicesContent : [
      {
        id: uuid(),
        title: "خبير في خدمات خطوط الغاز",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/gas/gas-content1.jpg'
        ],
      },
      
      {
        id: uuid(),
        title: "خبير في خدمات خطوط الغاز",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/gas/gas-content2.jpeg'
        ],
      },
      
    ]
  },
  {
    id: 3,
    imgSrc: "/service-thumb-3.jpg",
    title: "إصلاح خط المياه",
    description: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
    iconUrl: "/icon-3.png",
    servicesContent : [
      {
        id: uuid(),
        title: "خبير في خدمات إصلاح خطوط المياه",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/waterlinerepair/water-1.jpeg'
        ],
      },
      
      {
        id: uuid(),
        title: "خبير في خدمات إصلاح خطوط المياه",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/waterlinerepair/water-2.jpg'
        ],
      },
      
    ]
  },
  {
    id: 4,
    imgSrc: "/service-thumb-4.jpg",
    title: "سباكة الحمام",
    description: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
    iconUrl: "/icon-4.png",
    servicesContent : [
      {
        id: uuid(),
        title: "خدمات سباكة الحمامات الاحترافية في مصر",
        descirption: "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: [
          '/bathroom/bathroom.jpg','/bathroom/bathroom2.jpeg','/bathroom/bathroom3.jpg'
        ],
      },
      {
        id: uuid(),
        title: "خدمات سباكة الحمامات الاحترافية في مصر",
        descirption: "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: [
          '/bathroom/bathroom3.jpg','/bathroom/bathroom4.jpg',
        ],
      },
    ]
  },
  {
    id: 5,
    imgSrc: "/service-thumb-5.jpg",
    title: "شبكات الحريق",
    description: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
    iconUrl: "/icon-5.png",
    servicesContent : [
      {
        id: uuid(),
        title: "خدمات مكافحة الحرائق في مصر",
        descirption: "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: [
          '/fire/fire6.jpg','/fire/fire7.jpg', '/fire/fire8.jpg'
        ],
      },
      {
        id: uuid(),
        title: "خدمات مكافحة الحرائق في مصر",
        descirption: "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم ",
        images: [
          '/fire/fire5.jpg','/fire/fire2.jpg', '/fire/fire1.jpg'
        ],
      },
    ]
  },
  {
    id: 6,
    imgSrc: "/service-thumb-6.jpg",
    title: "خدمة إعادة البناء",
    description: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
    iconUrl: "/icon-6.png",
    servicesContent : [
      {
        id: uuid(),
        title: "خبير في خدمة إعادة البناء",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسيتم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/pasment/pasment-1.jpeg'
        ],
      },
      
      {
        id: uuid(),
        title: "خبير في خدمة إعادة البناء",
        descirption: "تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسيتم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي تم نشر التنضيد الإلكتروني دون تغيير بشكل أساسي",
        images: [
          '/pasment/pasment-2.jpeg'
        ],
      },
      
    ]
  },
]




