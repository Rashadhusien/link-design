// import { testimonials } from "../../data/data";
import { NextResponse } from "next/server";

import { db } from "../../../../firebaseConfig";

import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const testimonialsCollection = collection(db, "testimonials");
    const testimonialSnapshot = getDocs(testimonialsCollection);

    const testimonials = (await testimonialSnapshot).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(testimonials, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
