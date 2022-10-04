

const accountSid = 'AC577ee4893590d031dfc2502856f65d81'; // Your Account SID from www.twilio.com/console
const authToken = '153d003c9051b0f25e08ce06628274f5'; // Your Auth Token from www.twilio.com/console



const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

const port = 80;

app.listen(port,() => {
  console.log('Rodando na porta 80...')
})

app.get('/notification',(req,res)=>{
  res(
    client.messages
  .create({
    body: 'Olá, Daniel Oliveira! O Seu pedido nº 0001 foi finalizado com sucesso!',
    to: 'whatsapp:+556299480476', // Text this number
    from: 'whatsapp:+14155238886'
  })
  .then((message) => console.log(message.sid))
  )
})