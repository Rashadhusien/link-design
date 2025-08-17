import { db } from "../../../../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { uid } = await req.json();
    if (!uid)
      return NextResponse.json({ error: "UID is required" }, { status: 400 });

    await deleteDoc(doc(db, "users", uid));

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
