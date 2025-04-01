import admin from "../../../../firebaseAdmin";

export async function POST(req) {
  try {
    const body = await req.json();
    const { token } = body;

    // Verify ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    // Fetch user data from Firestore
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
