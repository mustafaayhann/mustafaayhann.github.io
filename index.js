const express = require("express");
const path = require('path');





const app = express();

const port=3000;


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))




app.get("/",(req,res)=>{
    res.send('hello world')
});











app.listen(port,()=>{
    console.log(`example listening on port ${port}`)
})
