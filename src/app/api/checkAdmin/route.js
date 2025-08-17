import { NextResponse } from "next/server";
import admin from "../../../../firebaseAdmin";

export async function POST(req) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ isAdmin: false }, { status: 400 });
    }

    const decoded = await admin.auth().verifyIdToken(token);
    const userId = decoded.uid;

    const userSnap = await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .get();
    if (!userSnap.exists) {
      return NextResponse.json({ isAdmin: false }, { status: 404 });
    }

    const userData = userSnap.data();
    return NextResponse.json({ isAdmin: userData.role === "admin" });
  } catch (error) {
    console.error("Check admin failed:", error);
    return NextResponse.json({ isAdmin: false }, { status: 500 });
  }
}
