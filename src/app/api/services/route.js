import { services } from "../../data/data";

export async function GET() {
  return Response.json(services);
}
