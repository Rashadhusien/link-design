"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { Oval } from "react-loader-spinner";

function Dashboard() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) {
        router.push("/");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().role === "admin") {
        setIsAdmin(true);
      } else {
        router.push("/"); // Redirect if not admin
      }

      setLoading(false);
    };

    checkAdmin();
  }, [user, router]);

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

  return <div>Dashboard</div>;
}

export default Dashboard;


