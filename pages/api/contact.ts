import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.MAIL_ADDRESS,
    to: process.env.SEND_TO,
    subject: `Message from ${req.body.fullName}`,
    replyTo: req.body.email,
    text: req.body.message + " | Sent by: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent by:
      ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });
};

export default handler;
