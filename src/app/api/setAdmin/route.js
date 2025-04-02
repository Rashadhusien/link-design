import { NextResponse } from "next/server";
import admin from "../../../../firebaseAdmin";

export async function POST(req) {
  try {
    // change fire base admin key
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { isAdmin: false, error: "Token is required" },
        { status: 400 }
      );
    }

    // Verify Firebase Auth Token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    // Check Admin Role (Option 1: Using Firestore)
    const userRef = admin.firestore().collection("users").doc(userId);
    const userDoc = await userRef.get();
    const isAdmin = userDoc.exists && userDoc.data().role === "admin";

    // (Option 2: Using Custom Claims)
    // const isAdmin = decodedToken.admin === true;

    if (!isAdmin) {
      return NextResponse.json(
        { isAdmin: false, error: "Not an admin" },
        { status: 403 }
      );
    }

    return NextResponse.json({ isAdmin: true }, { status: 200 });
  } catch (error) {
    console.error("Admin verification failed:", error);
    return NextResponse.json(
      { isAdmin: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
