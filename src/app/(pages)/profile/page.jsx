"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateProfile, updatePassword, signOut } from "firebase/auth";
import Image from "next/image";
import { Oval } from "react-loader-spinner";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [name, setName] = useState(user?.displayName || "");
  const [password, setPassword] = useState("");

  // Separate state for name and password messages/errors
  const [messageName, setMessageName] = useState(null);
  const [messagePassword, setMessagePassword] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/"); // Redirect to homepage if not authenticated
    }
  }, [user, loading, router]);

  const handleUpdateProfile = async () => {
    if (!user) return;
    setIsUpdating(true);

    // Reset messages and errors
    setMessageName(null);
    setMessagePassword(null);
    setErrorName(null);
    setErrorPassword(null);

    try {
      // Update Display Name
      if (name && name !== user.displayName) {
        await updateProfile(user, { displayName: name });
        setMessageName("تم تحديث الاسم بنجاح!");
      }

      // Update Password
      if (password.length >= 6) {
        await updatePassword(user, password);
        setMessagePassword("تم تحديث كلمة المرور بنجاح!");
      } else if (password.length > 0) {
        setErrorPassword("يجب أن تكون كلمة المرور 6 أحرف على الأقل.");
      }
    } catch (err) {
      if (user?.providerData[0]?.providerId === "google.com") {
        setErrorPassword("لا يمكن تغيير كلمة المرور لأنك مسجل بحساب جوجل.");
      } else {
        setErrorPassword(
          "حدث خطأ أثناء تحديث كلمة المرور. تأكد من تسجيل الدخول حديثًا."
        );
      }
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading)
    return (
      <Oval
        visible={true}
        height="50"
        width="50"
        secondaryColor="#253041"
        color="#0052da"
        ariaLabel="oval-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      />
    );

  return (
    <div className="container mx-auto max-w-[800px] p-5">
      {/* Profile Display Section */}
      <div className="bg-gray-100 p-4 text-center rounded-lg bg-bgtestemonial flex flex-col md:flex-row items-center gap-4">
        <Image
          width={100}
          height={100}
          loading="eager"
          src={user?.photoURL || "/default.png"}
          alt="Profile Picture"
          className="w-[100px] h-[100px] rounded-full shadow-lg object-cover"
          unoptimized
        />
        <div>
          <h3 className="text-3xl text-gray mb-4 font-bold">
            {user?.displayName || "مستخدم غير معروف"}
          </h3>
          <p className="text-primary">{user?.email || "غير متوفر"}</p>
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="mt-6 bg-bgtestemonial p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">تعديل الملف الشخصي</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">الاسم الجديد:</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={name}
            placeholder="اتركه فارغًا إذا لم ترد التغيير"
            onChange={(e) => setName(e.target.value)}
          />
          {messageName && <p className="text-green-500 mt-1">{messageName}</p>}
          {errorName && <p className="text-red-600 mt-1">{errorName}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700">كلمة المرور الجديدة:</label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="اتركه فارغًا إذا لم ترد التغيير"
          />
          {messagePassword && (
            <p className="text-green-500 mt-1">{messagePassword}</p>
          )}
          {errorPassword && (
            <p className="text-red-600 mt-1">{errorPassword}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button onClick={handleUpdateProfile} disabled={isUpdating}>
            {isUpdating ? "جارٍ التحديث..." : "حفظ التعديلات"}
          </Button>
          <Button
            onClick={() => {
              signOut(auth);
              router.push("/sign-in");
            }}
            disabled={isUpdating}
            className="bg-red-500 hover:bg-red-600"
          >
            {isUpdating ? "جارٍ التحديث..." : "تسجيل الخروج"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
