import { NextApiRequest, NextApiResponse } from "next";
import os from "os";
import nodemailer from "nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 587,
        // secure: false,
        // requireTLS: true,
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.EMAIL_ID,
        to: process.env.RECEIVER_EMAIL,
        subject: "89Alkaline Request for Free Demo",
        text: `First Name − ${req.body.firstName}
Last Name − ${req.body.lastName}
Mobile Phone − ${req.body.mobile}
Comments − ${req.body.comments}
-------------------------------------------------------
IP DATA − ${JSON.stringify(req.body.ipAddress)}
`,
    });

    res.status(200).json({
        message_id: info.messageId,
        preview_url: nodemailer.getTestMessageUrl(info),
    });
}
