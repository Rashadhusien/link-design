import { db } from "../../../../firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const servicesCollection = collection(db, "services");
    const querySnapshot = await getDocs(servicesCollection);
    const services = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return Response.json(services);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
