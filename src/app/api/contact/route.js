import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.json(); // Parse incoming request body

    // Forward the request to Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxF8XffPhL9o4ylIfwwxJuXy_9YI8ij2cnGX6eGjoeQgHAVnd5e3qPVdTIC9T_ah8C-/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    // Return the response to the client
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form", details: error.message },
      { status: 500 }
    );
  }
}
