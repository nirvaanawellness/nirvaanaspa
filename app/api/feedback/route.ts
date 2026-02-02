import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const FEEDBACK_SHEET_ID = process.env.FEEDBACK_SHEET_ID!;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: FEEDBACK_SHEET_ID,
      range: "A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.name,
          body.phone,
          body.age,
          body.city,
          body.therapy,
          body.therapist,
          body.rating,
          body.feedback,
          new Date().toLocaleString("en-IN"),
        ]]
      }
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("FEEDBACK ERROR", err);
    return new Response(
      JSON.stringify({ error: "Failed to save feedback" }),
      { status: 500 }
    );
  }
}
