const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tüm alanlar zorunludur.' })
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `[HC Dijital] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0c122d;">Yeni İletişim Formu Mesajı</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:120px;">Ad Soyad:</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">E-posta:</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Konu:</td><td style="padding:8px 0;font-weight:600;">${subject}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee;" />
          <p style="color:#333;line-height:1.7;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Mail gönderilemedi:', err)
    res.status(500).json({ error: 'Mail gönderilemedi.' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server çalışıyor: http://localhost:${PORT}`))
