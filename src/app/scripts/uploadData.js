import { db, collection, addDoc } from "../../../firebaseConfig.js";

// import { services } from "../data/data.js";

const services = [
  {
    imgSrc: "swimming-pool-banner",
    title: "حمامات سباحة & ميكانيك",
    description:
      "نحن متخصصون في تصميم وتركيب وصيانة حمامات السباحة بأنظمة ميكانيكية متطورة تضمن الأداء الأمثل...",
    iconUrl: "swimming-pool-icon",
    servicesContent: [
      {
        title: "مسبح فاخر لتجربة منعشة ومثالية",
        description:
          "نوفر لك تجربة سباحة آمنة ومريحة بمستوى فاخر. اغمر نفسك في التميز اليوم!",
        images: ["pool-1"],
      },
      {
        title: "تصميم وصيانة المسابح بأعلى المعايير",
        description: "التصميم الفريد إلى الصيانة الدورية والتنظيف العميق...",
        images: ["pool-3"],
      },
    ],
  },
  {
    imgSrc: "pluming-banner",
    title: "السباكة و شبكات المياه",
    description: "نوفر حلول سباكة وشبكات مياه متكاملة تغطي جميع احتياجاتك...",
    iconUrl: "pluming-icon",
    servicesContent: [
      {
        title: "خدمات صيانة وإصلاح سباكة المطبخ",
        description: "نقدم حلول سباكة احترافية للمطابخ...",
        images: ["service-single-1"],
      },
      {
        title: "تركيب وصيانة سباكة المطبخ بأعلى جودة",
        description: "خدمات متكاملة لسباكة المطابخ تشمل تركيب الأنابيب...",
        images: ["kitchen-content1_udunxt", "kitchen-content2_csqjib"],
      },
    ],
  },
];


const uploadData = async () => {
  try {
    const servicesRef = collection(db, "services");
    for (const service of services) {
      await addDoc(servicesRef, service);
    }
    console.log("✅ Data uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

uploadData();
