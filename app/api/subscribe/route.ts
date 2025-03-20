import type { NextRequest } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  const msg = {
    to: "info@highbrowengineering.com",
    from: "website@highbrowengineering.com", // Must be verified in SendGrid
    subject: "New Newsletter Subscription",
    text: `New subscriber: ${email}`,
  }

  try {
    await sgMail.send(msg)
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

