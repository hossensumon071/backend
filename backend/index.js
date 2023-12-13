const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;


// middleWare 
app.use(cors());
app.use(express.json())

const users = [
    {id: 1, name: "neymar", email: "neymar@gmail.com"},
    {id: 2, name: "messi", email: "messi@gmail.com"},
    {id: 3, name: "Ronaldo", email: "ronaldo@gmail.com"},
]


app.get('/', (req,res) => {
    res.send("Simple node Server Running")
})

app.get('/users', (req,res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    console.log("post api called")
    // console.log(req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    console.log(user)
    res.send(user)
})

app.listen(port, () => {
    console.log(`simple node runinng on port ${port}`)
})