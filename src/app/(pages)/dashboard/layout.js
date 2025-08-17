"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebaseConfig";
import axios from "axios";
import AdminSidebar from "@/app/components/AdminSidebar";
import { Oval } from "react-loader-spinner";

const DashboardLayout = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(null); // Change default state to null

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        try {
          const token = await user.getIdToken();

          const response = await axios.post("/api/checkAdmin", { token });

          setIsAdmin(response.data.isAdmin); 
        } catch (error) {
          setIsAdmin(false); // Explicitly mark as non-admin to prevent indefinite loading
          console.log("home");
        }
      }
    };

    checkAdmin();
  }, [user, router]);

  // Show a loader while checking authentication and admin status
  if (loading || isAdmin === null)
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          visible={true}
          height="50"
          width="50"
          secondaryColor="#253041"
          color="#0052da"
          ariaLabel="oval-loading"
        />
      </div>
    );

  if (!isAdmin)
    return (
      <p className="text-red-500 my-10 mx-auto w-full text-center">
        ممنوع الدخول
      </p>
    );

  return (
    <div className="flex h-screen ">
      <AdminSidebar />
      <div className="flex-1 p-6 overflow-auto ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
