import { db } from "../../../../../firebaseConfig";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { serviceId } = params;

    // Reference to the main service document
    const serviceRef = doc(db, "services", serviceId);
    const serviceSnap = await getDoc(serviceRef);

    if (!serviceSnap.exists()) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    const serviceData = serviceSnap.data();

    // Reference to the serviceContent subcollection
    const serviceContentRef = collection(
      db,
      "services",
      serviceId,
      "serviceContent"
    );
    const serviceContentSnap = await getDocs(serviceContentRef);

    // Extract serviceContent data
    const serviceContent = serviceContentSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(
      { ...serviceData, serviceContent },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
