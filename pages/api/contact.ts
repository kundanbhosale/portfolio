import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  name: string
  email: string
  message: string
}

const smtpTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
})

const contact = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { name, email, message }: Data = req.body

  try {
    await smtpTransport.sendMail({
      from: 'me@kundanbhosale.com',
      to: 'me@kundanbhosale.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>`
    })
    res.status(200).json({ success: 'Message Sent Successfully!' })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    // eslint-disable-next-line no-console
    console.log({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    })
    res.status(400).json({ fail: 'Something went Wrong!' })
  }
}

export default contact
