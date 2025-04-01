import admin from "../../../../firebaseAdmin";

export async function POST(req) {
  try {
    if (!req.body) {
      throw new Error("Missing request body");
    }

    const body = await req.json(); // ✅ Prevent JSON parsing errors
    const { token } = body;

    if (!token) {
      return new Response(
        JSON.stringify({ isAdmin: false, error: "Token is required" }),
        { status: 400 }
      );
    }

    // Verify token with Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    // Check Firestore user role
    const userRef = admin.firestore().collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return new Response(
        JSON.stringify({ isAdmin: false, error: "User not found" }),
        {
          status: 404,
        }
      );
    }

    const userData = userDoc.data();
    if (!userData || userData.role !== "admin") {
      return new Response(
        JSON.stringify({ isAdmin: false, error: "Not an admin" }),
        {
          status: 403,
        }
      );
    }

    return new Response(JSON.stringify({ isAdmin: true }), { status: 200 });
  } catch (error) {
    console.error("Admin verification failed:", error);
    return new Response(
      JSON.stringify({
        isAdmin: false,
        error: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
