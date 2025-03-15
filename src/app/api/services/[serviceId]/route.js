import { NextResponse } from "next/server";
import { services } from "../../../data/data";

export async function GET(req, { params }) {
  const { serviceId } = params; // Extract serviceId from the URL

  const service = services.find((s) => s.id.toString() === serviceId); // Find service by ID

  if (!service) {
    return NextResponse.json({ message: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(service, { status: 200 });
}
