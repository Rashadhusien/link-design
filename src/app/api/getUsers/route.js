import { getAuth } from "firebase-admin/auth";
import { initializeApp, cert, getApps } from "firebase-admin/app";

// Firebase Admin SDK credentials (from environment variable)
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK || "{}");

// Initialize Firebase Admin only once
if (!getApps().length) {
  try {
    initializeApp({ credential: cert(serviceAccount) });
    console.log("✅ Firebase Admin Initialized");
  } catch (error) {
    console.error("🔥 Firebase Admin Initialization Error:", error.message);
  }
}

export async function GET() {
  try {
    const usersList = await getAuth().listUsers();
    const users = usersList.users.map((user) => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "No Name",
    }));

    return Response.json({ users });
  } catch (error) {
    console.error("🔥 Error fetching users:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
