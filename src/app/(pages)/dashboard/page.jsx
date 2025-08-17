"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Oval } from "react-loader-spinner";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const res = await fetch("/api/checkAdmin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();
        if (data.isAdmin) {
          setIsAdmin(true);
          fetchServices();
          fetchTestimonials();
          fetchUsers();
        } else {
          router.push("/"); // Redirect non-admins
        }
      } else {
        router.push("/sign-in");
      }
      setLoading(false);
    });
  }, [router]);

  const fetchServices = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));
    const servicesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setServices(servicesData);
  };

  const fetchTestimonials = async () => {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    const testimonialsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTestimonials(testimonialsData);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/getUsers", { method: "GET" });
      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
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
  if (!isAdmin) return null;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">لوحة المعلومات</h1>

      {/* Users Table */}
      <h2 className="text-xl font-semibold mt-5">المستخدمين</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray text-white">
            <th className="p-2 border">الاسم</th>
            <th className="p-2 border">البريد الإلكتروني</th>
            <th className="p-2 border">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td className="p-2 border">{user.displayName}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">
                <Link
                  href={`/admin/user/${user.uid}`}
                  className="text-blue-500"
                >
                  إدارة
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Services Table */}
      <h2 className="text-xl font-semibold mt-5">الخدمات</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray text-white">
            <th className="p-2 border">العنوان</th>
            <th className="p-2 border">الوصف</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td className="p-2 border">{service.title}</td>
              <td className="p-2 border">{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Testimonials Table */}
      <h2 className="text-xl font-semibold mt-5">أراء العملاء</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray text-white">
            <th className="p-2 border">الاسم</th>
            <th className="p-2 border">الرأي</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial) => (
            <tr key={testimonial.id}>
              <td className="p-2 border">{testimonial.name}</td>
              <td className="p-2 border">{testimonial.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
