// "use client";
// import { useEffect, useState } from "react";
// import { db } from "firebaseConfig";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   addDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { CldImage } from "next-cloudinary";
// import { useRouter } from "next/navigation";

// const ServicesPage = () => {
//   const router = useRouter();
//   const [services, setServices] = useState([]);
//   const [newService, setNewService] = useState({
//     title: "",
//     description: "",
//     banner: "",
//   });
//   const [editingService, setEditingService] = useState(null);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     const querySnapshot = await getDocs(collection(db, "services"));
//     const servicesData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setServices(servicesData);
//   };

//   const handleAddService = async () => {
//     if (!newService.title || !newService.description || !newService.banner)
//       return alert("يرجى ملء جميع الحقول");

//     const docRef = await addDoc(collection(db, "services"), newService);
//     setServices([...services, { id: docRef.id, ...newService }]);
//     setNewService({ title: "", description: "", banner: "" });
//   };

//   const handleEditService = async () => {
//     if (!editingService.title || !editingService.description)
//       return alert("يرجى ملء جميع الحقول");

//     await updateDoc(doc(db, "services", editingService.id), {
//       title: editingService.title,
//       description: editingService.description,
//       banner: editingService.banner,
//     });

//     setServices(
//       services.map((s) => (s.id === editingService.id ? editingService : s))
//     );
//     setEditingService(null);
//   };

//   const handleDeleteService = async (id) => {
//     await deleteDoc(doc(db, "services", id));
//     setServices(services.filter((service) => service.id !== id));
//   };

//   return (
//     <div className="p-6 bg-bgtestemonial min-h-screen">
//       <h1 className="text-2xl font-bold text-gray">إدارة الخدمات</h1>

//       {/* Add / Edit Service Form */}
//       <div className="mt-4 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-semibold text-grayp">
//           {editingService ? "تعديل الخدمة" : "إضافة خدمة جديدة"}
//         </h2>
//         <input
//           type="text"
//           placeholder="عنوان الخدمة"
//           className="border border-gray p-2 w-full mt-2 rounded-lg bg-whitep text-gray"
//           value={editingService ? editingService.title : newService.title}
//           onChange={(e) =>
//             editingService
//               ? setEditingService({ ...editingService, title: e.target.value })
//               : setNewService({ ...newService, title: e.target.value })
//           }
//         />
//         <textarea
//           placeholder="الوصف"
//           className="border border-gray p-2 w-full mt-2 rounded-lg bg-whitep text-gray"
//           value={
//             editingService ? editingService.description : newService.description
//           }
//           onChange={(e) =>
//             editingService
//               ? setEditingService({
//                   ...editingService,
//                   description: e.target.value,
//                 })
//               : setNewService({ ...newService, description: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="رابط الصورة"
//           className="border border-gray p-2 w-full mt-2 rounded-lg bg-whitep text-gray disabled:cursor-no-drop"
//           value={editingService ? editingService.banner : newService.banner}
//           onChange={(e) =>
//             editingService
//               ? setEditingService({
//                   ...editingService,
//                   banner: e.target.value,
//                 })
//               : setNewService({ ...newService, banner: e.target.value })
//           }
//           disabled
//         />

//         <button
//           onClick={editingService ? handleEditService : handleAddService}
//           disabled={!newService.title || !newService.description}
//           className="bg-primary text-white px-4 py-2 mt-2 w-full rounded-lg hover:bg-btnhover disabled:bg-gray-400"
//         >
//           {editingService ? "حفظ التعديلات" : "إضافة"}
//         </button>

//         {editingService && (
//           <button
//             onClick={() => setEditingService(null)}
//             className="text-grayp mt-2 w-full"
//           >
//             إلغاء التعديل
//           </button>
//         )}
//       </div>

//       {/* Services List */}
//       <ul className="mt-4 text-center lg:text-start">
//         {services.map((service) => (
//           <li
//             key={service.id}
//             className="flex flex-col gap-2 lg:flex-row justify-between items-center p-4 border-b border-gray bg-white rounded-lg shadow-md my-2"
//           >
//             <CldImage
//               src={service.banner}
//               alt={service.title}
//               width={500}
//               height={500}
//               className="w-20 h-20 object-cover rounded-lg"
//             />
//             <div className="flex-1 mx-4">
//               <p className="font-semibold text-gray">{service.title}</p>
//               <p className="text-grayp">{service.description}</p>
//             </div>
//             <div className="flex gap-1 justify-evenly w-full lg:w-auto min-w-[100px]">
//               <button
//                 onClick={() => setEditingService(service)}
//                 className="text-primary mx-2"
//               >
//                 تعديل
//               </button>
//               <button
//                 onClick={() => handleDeleteService(service.id)}
//                 className="text-red-500"
//               >
//                 حذف
//               </button>
//               <button
//                 onClick={() =>
//                   router.push(
//                     `/dashboard/service-content?serviceId=${service.id}`
//                   )
//                 }
//                 className="text-green-500"
//               >
//                 إدارة المحتوى
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServicesPage;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
