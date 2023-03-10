const express = require('express')
const cors = require("cors")
const app = express();


app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type",'Authorization');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 

app.use(cors());

app.get("/",(req,res)=>{
  res.send({message:" Socket Api working fine"});
})

const PORT = process.env.PORT || 3030
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}\n`))

const messages = [
  {
    channel: "1",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to Blockchain Discord Group!"
  },
  {
    channel: "1",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hello everyone!"
  },
  {
    channel: "1",
    account: "0x701C484bfb40ac628aFA487b6082f084B14AF0BD",
    text: "Hey are you doing??"
  },
  {
    channel: "1",
    account: "0x189B9cBd4AfF470aF2C0102f365FC1823d857965",
    text: "Hey there, great to be here!"
  },
  {
    channel: "1",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Hope everyone is having a good day ;)"
  },
  {
    channel: "1",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to Discord everyone! My name is Anil Patidar and I've been a blockchain developer for 1+ years."
  },
  {
    channel: "1",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Does anyone have any tips on becoming a blockchain developer?"
  },
  {
    channel: "2",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to Data Science Discord Group!"
  },
  {
    channel: "2",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hello everyone!"
  },
  {
    channel: "2",
    account: "0x701C484bfb40ac628aFA487b6082f084B14AF0BD",
    text: "Hey are you doing??"
  },
  {
    channel: "2",
    account: "0x189B9cBd4AfF470aF2C0102f365FC1823d857965",
    text: "Hey there, great to be here!"
  },
  {
    channel: "2",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Hope everyone is having a good day ;)"
  },
  {
    channel: "2",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hey there! My name is Anil patidar and I'm an Data Scientist for 2+ years!"
  },
  {
    channel: "2",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Does anyone have any tips on becoming a Data Science Roadmap?"
  },

  {
    channel: "3",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to Full Stack Discord Group!"
  },
  {
    channel: "3",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hello everyone!"
  },
  {
    channel: "3",
    account: "0x701C484bfb40ac628aFA487b6082f084B14AF0BD",
    text: "Hey are you doing??"
  },
  {
    channel: "3",
    account: "0x189B9cBd4AfF470aF2C0102f365FC1823d857965",
    text: "Hey there, great to be here!"
  },
  {
    channel: "3",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Hope everyone is having a good day ;)"
  },
  {
    channel: "3",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hey there! My name is Anil patidar and I'm an Full Stack Developer for 2+ years!"
  },
  {
    channel: "3",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Does anyone have any tips on becoming a Full Stack Developer developer?"
  },

  {
    channel: "4",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to New Technology Discord Group!"
  },
  {
    channel: "4",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hello everyone!"
  },
  {
    channel: "4",
    account: "0x701C484bfb40ac628aFA487b6082f084B14AF0BD",
    text: "Hey are you doing??"
  },
  {
    channel: "4",
    account: "0x189B9cBd4AfF470aF2C0102f365FC1823d857965",
    text: "Hey there, great to be here!"
  },
  {
    channel: "4",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Hope everyone is having a good day ;)"
  },
  {
    channel: "4",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Does anyone know, what's new technology is coming or which one is Trending now?"
  },
  {
    channel: "5",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to New Technology Discord Group!"
  },
  {
    channel: "5",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "Hello everyone!"
  },
  {
    channel: "5",
    account: "0x701C484bfb40ac628aFA487b6082f084B14AF0BD",
    text: "Hey are you doing??"
  },
  {
    channel: "5",
    account: "0x189B9cBd4AfF470aF2C0102f365FC1823d857965",
    text: "Hey there, great to be here!"
  },
  {
    channel: "5",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Hope everyone is having a good day ;)"
  },
  {
    channel: "5",
    account: "0x176F3DAb24a159341c0509bB36B833E7fdd0a132",
    text: "Does anyone know, what's new technology is coming or which one is Trending now?"
  },
]


const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});


io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('get messages', () => {
    io.emit('get messages', messages)
  })

  socket.on('new message', (msg) => {
    messages.push(msg)
    io.emit('new message', messages)
  })
})