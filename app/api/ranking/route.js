// app/api/ranking/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const backendUrl = "http://localhost:3001/api/ranking";
    const response = await fetch(backendUrl);

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }
  } catch (error) {
    console.error("Error al comunicarse con el backend:", error);
    return NextResponse.json(
      { error: "Error al comunicarse con el backend" },
      { status: 500 }
    );
  }
}
