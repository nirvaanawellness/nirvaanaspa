import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function GET() {
  try {
    const sheets = google.sheets({ version: "v4", auth });

    const therapiesRes = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.THERAPIES_SHEET_ID!,
      range: "A2:A",
    });

    const staffRes = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.STAFF_SHEET_ID!,
      range: "A2:A",
    });

    return Response.json({
      therapies: therapiesRes.data.values?.flat() || [],
      staff: staffRes.data.values?.flat() || [],
    });

  } catch (err) {
    console.error("META ERROR", err);
    return new Response(
      JSON.stringify({ error: "Failed to load meta" }),
      { status: 500 }
    );
  }
}
