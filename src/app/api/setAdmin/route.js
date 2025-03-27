import admin from "firebaseAdmin";

export async function POST(req) {
  try {
    const { token } = await req.json();
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    // Check Firestore users collection for admin role
    const userRef = admin.firestore().collection("users").doc(userId);
    const userDoc = await userRef.get();

    console.log(userDoc.data().role);

    if (!userDoc.exists || userDoc.data().role !== "admin") {
      return new Response(JSON.stringify({ isAdmin: false }), { status: 403 });
    }

    return new Response(JSON.stringify({ isAdmin: true }), { status: 200 });
  } catch (error) {
    console.error("Admin verification failed:", error);
    return new Response(JSON.stringify({ isAdmin: false }), { status: 500 });
  }
}
