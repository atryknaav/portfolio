import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');


interface resInt {
    message: string
}

export default async function POST(request: NextApiRequest, res:NextApiResponse<resInt>) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const { email, message } = request.body


    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,

        auth: {

            user: username,
            pass: password
        }
    });



    

    try {

        await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: JOB </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })



        res.status(200).json({ message: `${username} + ${password} + ${myEmail}` });


    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: `${username} + ${password} + ${myEmail}` });
    }

  }