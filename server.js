const express = require('express');
const app = express();


app.get('/api', (req,res)=>{
    res.json({"user": ["userOne","userTwo","userDrei"]})
})

app.listen(5000,()=>{ console.log( "server läuft")})