const express = require("express");
const app = express();
const multer = require("multer");
const path = require ("path");


//para rodar node index.js

app.set('view engine','ejs');
//app.set("views", path.join(__dirname, "views"));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');


const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,"uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.));
    }
})

const upload = multer({storage})

app.get("/",(req,res) => {
    res.render("indexx");
})

app.post("/upload",upload.single("file"),(req,res) => {
    res.send("Arquivo recebido")
})

app.listen(3333, () => {
    console.log("Servidor ON!");
})
