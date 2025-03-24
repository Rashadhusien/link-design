"use client";

import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../../../../firebaseConfig";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth"; // ✅ Correct function
import GoogleIcon from "@mui/icons-material/Google";

import Link from "next/link";

const SignIn = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // ✅ Stores error messages
  const [loading, setLoading] = useState(false); // ✅ Disable button when signing in

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // ✅ Clear previous errors
    setLoading(true); // ✅ Show loading state

    if (!formData.email || !formData.password) {
      setError("يرجى ملء جميع الحقول");
      setLoading(false);
      return;
    }

    try {
      const user = await signInWithEmailAndPassword(
        formData.email,
        formData.password
      );

      if (!user) {
        throw new Error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }

      setFormData({ email: "", password: "" });
      router.push("/");
    } catch (err) {
      console.error(err);
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider); // ✅ Corrected
      router.push("/");
    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول باستخدام جوجل");
      console.error(err);
    }
  };

  return (
    <>
      <div className="container my-10 p-5 bg-bgtestemonial max-w-[600px] mx-auto rounded-md">
        <h2 className="text-4xl md:text-5xl mx-auto my-3 text-center text-primary">
          تسجيل الدخول
        </h2>

        <form
          onSubmit={handleSignIn}
          className="py-3 flex justify-center items-center"
        >
          <div className="container mx-auto max-w-[600px]">
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
            {error && <p className="text-red-500 text-center my-2">{error}</p>}

            {/* ✅ Disable button when signing in */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 text-md md:p-4 md:text-lg hover:bg-btnhover text-white bg-primary font-semibold capitalize transition-all duration-300 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "جاري تسجيل الدخول..." : "الدخول"}
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="mt-4 w-full p-3 text-md md:p-4 md:text-lg flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold capitalize transition-all duration-300 rounded-lg"
            >
              تسجيل الدخول باستخدام جوجل <GoogleIcon className="mr-2" />
            </button>
          </div>
        </form>

        <p className="my-2 text-center">
          ليس لديك حساب؟
          <Link href={"/sign-up"} className="text-primary mr-1">
            انشاء حساب
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
