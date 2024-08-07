import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer')

interface ResInt {
    message: string
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResInt>) {
    if (req.method === 'POST') {
        const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
        const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
        const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

        const { email } = req.body;

        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: username,
                pass: password,
            },
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
                    <p>MEOW</p>
                `,
            });

            res.status(200).json({ message: 'Email successfully sent!' });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
