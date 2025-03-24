"use client";

import { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth, db } from "../../../../firebaseConfig"; // ✅ Import Firestore
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore"; // ✅ Firestore functions
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // ✅ Stores error messages
  const [loading, setLoading] = useState(false); // ✅ Disable button when signing up

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // ✅ Clear previous errors
    setLoading(true); // ✅ Show loading state

    if (!formData.name || !formData.email || !formData.password) {
      setError("يرجى ملء جميع الحقول");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        formData.email,
        formData.password
      );

      if (!userCredential.user) {
        throw new Error("حدث خطأ أثناء إنشاء الحساب");
      }

      // ✅ Update Firebase user profile with name
      await updateProfile({ displayName: formData.name });

      // ✅ Save user data in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name: formData.name,
        email: formData.email,
      });

      setFormData({ name: "", email: "", password: "" });
      router.push("/");
    } catch (err) {
      console.error(err);
      setError("البريد الإلكتروني مستخدم بالفعل أو يوجد خطأ آخر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-10 p-5 bg-bgtestemonial max-w-[600px] mx-auto rounded-md">
      <h2 className="text-4xl md:text-5xl mx-auto my-3 text-center text-primary">
        إنشاء حساب
      </h2>

      <form
        onSubmit={handleSubmit}
        className="py-3 flex justify-center items-center"
      >
        <div className="container mx-auto max-w-[600px]">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="مثال: أحمد محمد"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-4 h-14 border outline-none text-[#333] rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ex:test@test.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-4 h-14 border outline-none text-[#333] rounded-lg border-gray-300"
              dir="ltr"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full p-4 h-14 border outline-none text-[#333] rounded-lg border-gray-300"
            />
          </div>

          {/* ✅ Show error message */}
          {error && <p className="text-red text-center my-2">{error}</p>}

          {/* ✅ Disable button when signing up */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-md md:p-4 md:text-lg hover:bg-btnhover text-white bg-primary font-semibold capitalize transition-all duration-300 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </button>
        </div>
      </form>

      <p className="my-2 text-center">
        لديك حساب بالفعل؟
        <Link href={"/sign-in"} className="text-primary mr-1">
          تسجيل الدخول
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
