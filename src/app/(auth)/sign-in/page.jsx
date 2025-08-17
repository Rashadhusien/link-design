"use client";

import { useState, useEffect, useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../../../../firebaseConfig";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false); // 👈 Fix hydration issue

  // UseRef instead of useState to avoid unnecessary re-renders
  const emailRef = useRef();
  const passwordRef = useRef();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    setIsClient(true); // 👈 Ensure form renders only on client side
  }, []);

  if (!isClient) return null; //

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setError("يرجى ملء جميع الحقول");
      setLoading(false);
      return;
    }

    try {
      const user = await signInWithEmailAndPassword(email, password);
      if (!user) throw new Error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      router.push("/");
    } catch (err) {
      setError(err.message || "حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(""); // Reset errors before signing in
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Redirect after successful sign-in
    } catch (err) {
      // Specific error handling for popup closure
      if (err.code === "auth/popup-closed-by-user") {
        setError("تم إغلاق النافذة من قبل المستخدم. يرجى المحاولة مرة أخرى.");
      } else {
        setError(err.message || "حدث خطأ أثناء تسجيل الدخول");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-10 p-5 bg-bgtestemonial max-w-[600px] mx-auto rounded-md">
      <h2
        suppressHydrationWarning
        className="text-4xl md:text-5xl mx-auto my-3 text-center text-primary"
      >
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
              ref={emailRef}
              placeholder="ex:test@test.com"
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
              ref={passwordRef}
              placeholder="••••••••"
              className="mt-2 w-full p-4 h-14 border outline-none text-[#333] rounded-lg border-gray-300"
            />
          </div>

          {/* Show error message */}
          {error && (
            <p className="text-red-500 text-center my-2" aria-live="polite">
              {error}
            </p>
          )}

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-md md:p-4 md:text-lg hover:bg-btnhover text-white bg-primary font-semibold capitalize transition-all duration-300 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "جاري تسجيل الدخول..." : "الدخول"}
          </button>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className={`mt-4 w-full p-3 text-md md:p-4 md:text-lg flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold capitalize transition-all duration-300 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            تسجيل الدخول باستخدام جوجل
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
  );
};

export default SignIn;
