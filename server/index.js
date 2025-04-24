
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require('mongodb');



const express = require('express');
const cors = require('cors');
const jwt= require("jsonwebtoken")


// socket.io
const OpenAI = require("openai");
const port = 5000;
const app = express();





// mideleware

app.use(cors({
    origin: ['https://chat-mocha-alpha.vercel.app', 'http://localhost:5173'],
}));

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
            { role: "system", content: "You have access to the latest bKash services like mobile recharge, send money, pay bill, cash out, add money, etc. You know the current charges and processes for each." },

            {
                role: "user",
                content: msg
            },
        ],
    });

    return response.choices[0].message || "sorry i do not understand";

}

//  {ai : cleanreply , }
// {me:msg}


// jwt
// JWT Verify Middleware
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Expecting format: "Bearer token"

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Forbidden: Invalid token' });
        }
        req.user = decoded; // Attach user info to request
        next();
    });
};

// Backend: Express route for login
app.post('/login', async (req, res) => {

    const { email } = req.body;
    console.log(email);

    // Here you can verify and generate a JWT if needed
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    console.log(token);

    res.json( {token} );

});




app.post('/post',verifyJWT, async (req, res) => {
    const email = req.body.email;
    console.log(email);

    

    const { promt } = req.body;
    console.log(promt);
    const reply = await Ai(promt);
    // return reply here
    const cleanReply = reply.content;

    await messageCollection.insertMany([

        {
            message: promt,
            sender: "User",
            timestamp: new Date(),
            email:email,
        },
        {
            message: cleanReply,
            sender: "Ai",
            // here face problem
            timestamp: new Date(),
            email:email,
        }
    ])






    res.json({ status: "success", reply: cleanReply });


})




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




















app.get('/', async (req, res) => {
    res.send("Sever running on " + port)
})

app.listen(port, () => console.log(`Server running on ${port}`));