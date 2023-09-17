/* ort { EmailTemplate } from "../../../components/EmailTemplate"; */
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_LKUSEz6F_Jfeo91AMAJg3fmWHXwDHJEWY");
const fromEmail = new Resend(process.env.FROM_EMAIL);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Felipe <felipe@trilord.live>",
      to: ["escalonaf12@gmail.com", email],
      subject: "Hello world",
      react: (
        <>
          {" "}
          <h1> {subject} </h1>
          <p>Thank you for contacting us!</p>
          <p>New message submited:</p>
          <p>{message} </p>{" "}
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
