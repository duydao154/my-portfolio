import { log } from "console";
import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(req: Request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log(name, email, message);

    const transporter = nodemailer.createTransport({
      service: "Gmail",

      auth: {
        user: username,
        pass: password,
      },
    });

    const mailOptions = {
      from: email,
      to: "duydao1504@gmail.com",
      subject: `Send from ${email} from My Portfolio `,
      text: message,
    };

    await transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }
    });
    return NextResponse.json("EMAIL SEND SUCCESSFULLY");
  } catch (error) {
    console.log("EMAIL_SERVICE", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
