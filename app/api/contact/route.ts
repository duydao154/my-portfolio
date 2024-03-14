import { log } from "console";
import { NextResponse, NextRequest } from "next/server";
import { resolve } from "path";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(req: Request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  try {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",

      auth: {
        user: username,
        pass: password,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: email,
      to: "duydao1504@gmail.com",
      subject: `Send from ${email} from My Portfolio `,
      text: message,
    };

    const thanksMail = {
      from: "duydao1504@gmail.com",
      to: email,
      subject: `Thanks for visisting my portfolio `,
      text: `Hi ${name} Im Duy, \n Your interest in my portfolio website means a lot! I appreciate you taking the time to explore my work. I'll be sure to reach out to you soon. Stay tuned for further updates. Looking forward to connecting with you! \n Best wishes, \n Anh Duy Dao`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
          // do something useful
        }
      });
    });

    await new Promise((resolve, reject) => {
      transporter.sendMail(thanksMail, function (error: any, info: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
          // do something useful
        }
      });
    });

    return NextResponse.json("EMAIL SEND SUCCESSFULLY", { status: 200 });
  } catch (error) {
    console.log("EMAIL_SERVICE", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
