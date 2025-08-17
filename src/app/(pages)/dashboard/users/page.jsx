"use client";

import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/getUsers");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (uid) => {
    if (!confirm("هل أنت متأكد أنك تريد حذف هذا المستخدم؟")) return;

    try {
      const res = await fetch(`/api/deleteUser`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      });

      if (!res.ok) throw new Error("Failed to delete user");

      setUsers(users.filter((user) => user.uid !== uid));
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("حدث خطأ أثناء حذف المستخدم");
    }
  };

  const toggleAdmin = async (uid, isAdmin) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) throw new Error("User is not authenticated");

      const token = await user.getIdToken();

      // Send request to toggle admin status
      const res = await fetch(`/api/setAdmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, userId: uid, isAdmin: !isAdmin }),
      });

      const data = await res.json();
      console.log("Admin Response:", data);

      if (!res.ok) throw new Error(data.error || "Failed to update admin role");

      // Re-fetch users after the update to reflect the changes
      fetchUsers(); // Re-fetch the user list
    } catch (err) {
      console.error("Error updating admin role:", err);
      alert("حدث خطأ أثناء تحديث دور المستخدم");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">إدارة المستخدمين</h1>

      {loading && <p>جاري تحميل البيانات...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="p-2 border">اسم المستخدم</th>
            <th className="p-2 border">البريد الإلكتروني</th>
            <th className="p-2 border">الحالة</th>
            <th className="p-2 border">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td className="p-2 border">{user.displayName || "غير معروف"}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">
                {user.isAdmin ? "مسؤول" : "مستخدم"}
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => toggleAdmin(user.uid, user.isAdmin)}
                  className={`px-3 py-1 rounded ml-3 ${
                    user.isAdmin ? "bg-red-500" : "bg-green-500"
                  } text-white`}
                >
                  {user.isAdmin ? "إزالة المسؤول" : "تعيين كمسؤول"}
                </button>
                <button
                  onClick={() => deleteUser(user.uid)}
                  className="ml-2 px-3 py-1 bg-red-600 text-white rounded"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
