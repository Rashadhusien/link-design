"use client";
import { useEffect, useState } from "react";
import { db } from "firebaseConfig";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

const ServiceContentPage = () => {
  const [serviceContents, setServiceContents] = useState([]);
  const [newContent, setNewContent] = useState({
    title: "",
    description: "",
    imgs: [],
  });
  const [editingContent, setEditingContent] = useState(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get("serviceId");

  useEffect(() => {
    if (!serviceId) return;

    const q = query(
      collection(db, "serviceContent"),
      where("serviceId", "==", serviceId)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setServiceContents(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    return () => unsubscribe();
  }, [serviceId]);

  const handleSaveContent = async () => {
    if (!newContent.title || !newContent.description)
      return alert("يرجى ملء جميع الحقول");

    if (editingContent) {
      await updateDoc(
        doc(db, "serviceContents", editingContent.id),
        newContent
      );
      setEditingContent(null);
    } else {
      const docRef = await addDoc(collection(db, "serviceContents"), {
        serviceId,
        ...newContent,
      });
      setServiceContents([
        ...serviceContents,
        { id: docRef.id, ...newContent },
      ]);
    }

    setNewContent({ title: "", description: "", imgs: [] });
  };

  const handleDeleteContent = async (id) => {
    if (!confirm("هل أنت متأكد؟")) return;
    await deleteDoc(doc(db, "serviceContents", id));
    setServiceContents(serviceContents.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-slate">
      <button
        onClick={() => router.push("/dashboard/services")}
        className="text-primary mb-4 flex items-center"
      >
        <span className="ml-2">←</span> الرجوع إلى الخدمات
      </button>

      <h1 className="text-2xl font-bold text-gray">إدارة محتوى الخدمة</h1>

      <div className="mt-4 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-grayp">
          {editingContent ? "تعديل المحتوى" : "إضافة محتوى جديد"}
        </h2>
        <input
          type="text"
          placeholder="العنوان"
          className="border p-2 w-full mt-2 rounded text-gray"
          value={newContent.title}
          onChange={(e) =>
            setNewContent({ ...newContent, title: e.target.value })
          }
        />
        <textarea
          placeholder="الوصف"
          className="border p-2 w-full mt-2 rounded text-gray"
          value={newContent.description}
          onChange={(e) =>
            setNewContent({ ...newContent, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="إضافة صورة (أدخل رابط الصورة)"
          className="border p-2 w-full mt-2 rounded"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              setNewContent({
                ...newContent,
                imgs: [...newContent.imgs, e.target.value],
              });
              e.target.value = "";
            }
          }}
        />

        <div className="flex flex-wrap gap-2 mt-2">
          {newContent.imgs.map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img}
                alt={`img-${index}`}
                width={500}
                height={500}
                className="w-16 h-16 rounded-lg"
              />
              <button
                onClick={() =>
                  setNewContent({
                    ...newContent,
                    imgs: newContent.imgs.filter((_, i) => i !== index),
                  })
                }
                className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs rounded"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSaveContent}
          className="bg-primary text-white px-4 py-2 mt-2 w-full rounded hover:bg-btnhover"
        >
          {editingContent ? "حفظ التعديلات" : "إضافة"}
        </button>

        {editingContent && (
          <button
            onClick={() => setEditingContent(null)}
            className="text-gray mt-2 w-full"
          >
            إلغاء التعديل
          </button>
        )}
      </div>

      <ul className="mt-4">
        {serviceContents.map((content) => (
          <li
            key={content.id}
            className="p-4 bg-white shadow-md rounded-lg mt-2 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-center md:text-left">
              <p className="font-bold text-gray">{content.title}</p>
              <p className="text-grayp">{content.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {content.imgs?.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width={500}
                    height={500}
                    alt={`content-img-${index}`}
                    className="w-20 h-20 rounded-lg"
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setEditingContent(content)}
                className="text-green-500"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDeleteContent(content.id)}
                className="text-red-500"
              >
                حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceContentPage;
