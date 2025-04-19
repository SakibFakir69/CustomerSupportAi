
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require('mongodb');



const express = require('express');
const cors = require('cors');



// socket.io
const OpenAI = require("openai");
const port = 5000;
const app = express();



// mideleware

app.use(cors());
app.use(express.json())

// take user message than reply



const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.h3ji2gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const openai = new OpenAI({
    apiKey: process.env.GEMNI_AI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


const Ai = async (msg) => {

    const response = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
            { role: "system", content: "You are customer supporter." },
            {
                role: "user",
                content: `rice list manago tamoto , cini , eetc call price gave this ${msg}`
            },
        ],
    });

    return response.choices[0].message || "sorry i do not understand";

}

//  {ai : cleanreply , }
// {me:msg}

let messageCollection;
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
   
        // Send a ping to confirm a successful connection
        const chatDB = client.db("chatDB");

        messageCollection = chatDB.collection("message");

        app.get('/message',async(req,res)=>{

            const data = await messageCollection.find().toArray();
            res.send(data);
        })









    } finally {
        // Ensures that the client will close when you finish/error

    }
}
run().catch(console.dir);




app.post('/post', async (req, res) => {

    // ai jaga 2 ta e pacci
    // ai 2 ta akta collection send korata hobba then show korta hobba
    // front-end a 

    const { promt } = req.body;
    console.log(promt);
    const reply = await Ai(promt);
    const cleanReply = reply.content;

    await messageCollection.insertMany([

        {
            message: promt,
            sender: "user",
            timestamp: new Date()
        },
        {
            message: cleanReply,
            sender: Ai,
            timestamp: new Date()
        }
    ])






    res.json({ status: "success", reply: cleanReply });


})




// io.on('connection', (socket) => {


//     const math = Math.floor(Math.random() * 10);

//     socket.emit("welcome", math);






//     socket.on('disconnect', () => {
//         console.log(`${socket.id} disconnected`)
//     })


// })


// mongo db













app.get('/', async (req, res) => {
    res.send("Sever running on " + port)
})

app.listen(port, () => console.log(`Server running on ${port}`));