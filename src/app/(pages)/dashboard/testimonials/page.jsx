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

// const TestimonialsPage = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [newTestimonial, setNewTestimonial] = useState({
//     name: "",
//     description: "",
//   });
//   const [editingTestimonial, setEditingTestimonial] = useState(null);

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const fetchTestimonials = async () => {
//     const querySnapshot = await getDocs(collection(db, "testimonials"));
//     const testimonialsData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setTestimonials(testimonialsData);
//   };

//   const handleAddTestimonial = async () => {
//     if (!newTestimonial.name || !newTestimonial.description)
//       return alert("يرجى ملء جميع الحقول");

//     const docRef = await addDoc(collection(db, "testimonials"), newTestimonial);
//     setTestimonials([...testimonials, { id: docRef.id, ...newTestimonial }]);
//     setNewTestimonial({ name: "", description: "" });
//   };

//   const handleEditTestimonial = async () => {
//     if (!editingTestimonial.name || !editingTestimonial.description)
//       return alert("يرجى ملء جميع الحقول");

//     await updateDoc(doc(db, "testimonials", editingTestimonial.id), {
//       name: editingTestimonial.name,
//       description: editingTestimonial.description,
//     });

//     setTestimonials(
//       testimonials.map((t) =>
//         t.id === editingTestimonial.id ? editingTestimonial : t
//       )
//     );
//     setEditingTestimonial(null);
//   };

//   const handleDeleteTestimonial = async (id) => {
//     await deleteDoc(doc(db, "testimonials", id));
//     setTestimonials(
//       testimonials.filter((testimonial) => testimonial.id !== id)
//     );
//   };

//   return (
//     <div className="p-6 bg-bgtestemonial min-h-screen">
//       <h1 className="text-2xl font-bold text-gray">إدارة آراء العملاء</h1>

//       {/* Add / Edit Testimonial Form */}
//       <div className="mt-4 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-semibold text-grayp">
//           {editingTestimonial ? "تعديل رأي" : "إضافة رأي جديد"}
//         </h2>
//         <input
//           type="text"
//           placeholder="الاسم"
//           className="border border-gray p-2 w-full mt-2 rounded-lg bg-whitep text-gray"
//           value={
//             editingTestimonial ? editingTestimonial.name : newTestimonial.name
//           }
//           onChange={(e) =>
//             editingTestimonial
//               ? setEditingTestimonial({
//                   ...editingTestimonial,
//                   name: e.target.value,
//                 })
//               : setNewTestimonial({ ...newTestimonial, name: e.target.value })
//           }
//         />
//         <textarea
//           placeholder="الوصف"
//           className="border border-gray p-2 w-full mt-2 rounded-lg bg-whitep text-gray"
//           value={
//             editingTestimonial
//               ? editingTestimonial.description
//               : newTestimonial.description
//           }
//           onChange={(e) =>
//             editingTestimonial
//               ? setEditingTestimonial({
//                   ...editingTestimonial,
//                   description: e.target.value,
//                 })
//               : setNewTestimonial({
//                   ...newTestimonial,
//                   description: e.target.value,
//                 })
//           }
//         />
//         <button
//           onClick={
//             editingTestimonial ? handleEditTestimonial : handleAddTestimonial
//           }
//           className="bg-primary text-white px-4 py-2 mt-2 w-full rounded-lg hover:bg-btnhover"
//         >
//           {editingTestimonial ? "حفظ التعديلات" : "إضافة"}
//         </button>
//         {editingTestimonial && (
//           <button
//             onClick={() => setEditingTestimonial(null)}
//             className="text-grayp mt-2 w-full"
//           >
//             إلغاء التعديل
//           </button>
//         )}
//       </div>

//       {/* Testimonials List */}
//       <ul className="mt-4">
//         {testimonials.map((testimonial) => (
//           <li
//             key={testimonial.id}
//             className="flex justify-between items-center  flex-col lg:flex-row text-center lg:text-start gap-3 p-3 border-b border-gray bg-white rounded-lg shadow-md my-2"
//           >
//             <div>
//               <p className="font-semibold text-gray mb-2">{testimonial.name}</p>
//               <p className="text-grayp">{testimonial.description}</p>
//             </div>
//             <div className="flex justify-between lg:justify-normal gap-2 items-center w-full lg:w-auto">
//               <button
//                 onClick={() => setEditingTestimonial(testimonial)}
//                 className="text-primary mx-2"
//               >
//                 تعديل
//               </button>
//               <button
//                 onClick={() => handleDeleteTestimonial(testimonial.id)}
//                 className="text-red-500"
//               >
//                 حذف
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TestimonialsPage;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
