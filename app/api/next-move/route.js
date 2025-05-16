// app/api/next-move/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { board } = await req.json();
    const backendUrl = "http://localhost:3001/next-move";

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ board }),
    });

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
