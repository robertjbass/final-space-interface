import { NextResponse } from "next/server";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return NextResponse.json(data);
}
