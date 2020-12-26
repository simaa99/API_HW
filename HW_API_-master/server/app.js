const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.get('/user',(req,res)=>{
    res.json({message:"Hello "+req.query.name});
})

app.post('/user',(req,res)=>{
    res.json({message:"Hello "+req.body.user.name});
})


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});
