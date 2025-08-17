import { NextResponse } from "next/server";
import admin from "../../../../firebaseAdmin";

export async function POST(req) {
  try {
    const { token, targetUserId, makeAdmin } = await req.json();

    if (!token || !targetUserId || typeof makeAdmin !== "boolean") {
      return NextResponse.json(
        { error: "Token, targetUserId, and makeAdmin are required" },
        { status: 400 }
      );
    }

    // Verify token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const currentUserId = decodedToken.uid;

    // Fetch the requesting user from Firestore
    const requesterRef = admin
      .firestore()
      .collection("users")
      .doc(currentUserId);
    const requesterSnap = await requesterRef.get();

    if (!requesterSnap.exists) {
      return NextResponse.json(
        { error: "Requester not found" },
        { status: 404 }
      );
    }

    const requesterData = requesterSnap.data();

    // Only admins can change roles
    if (requesterData.role !== "admin") {
      return NextResponse.json(
        { error: "You do not have permission to change user roles" },
        { status: 403 }
      );
    }

    // Prevent removing own admin status (optional safeguard)
    if (currentUserId === targetUserId && !makeAdmin) {
      return NextResponse.json(
        { error: "You cannot remove your own admin role" },
        { status: 403 }
      );
    }

    // Update target user's role
    const targetRef = admin.firestore().collection("users").doc(targetUserId);
    await targetRef.update({
      role: makeAdmin ? "admin" : "user",
    });

    return NextResponse.json(
      { message: "User role updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin role update failed:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
