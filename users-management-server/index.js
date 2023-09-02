const express = require("express");
const app = express();
const port = process.env.PORT || 5000; 
const cors =require('cors');

//middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Rakib', email: 'mrakib@gmail.com'},
    {id: 2, name: 'Rakib1', email: 'mrakib@gmail1.com'},
    {id: 3, name: 'Rakib2', email: 'mrakib@gmail2.com'},
]

app.get('/',(req,res)=>{
    res.send("Users management server running")
})

app.get('/users',(req,res)=>{
    res.send(users);
});

app.post('/users',(req,res)=>{
    console.log('api hitting post req')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`server is running on PORT: ${port}`);
})