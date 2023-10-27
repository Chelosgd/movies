//Import dependencies 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

//Get body data
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
})

app.use("", routes);

//define initial endpoint
app.get("", (req, res) =>{
    res.send("Si funciono")
}) 

const urlDB = 'mongodb+srv://cheloiteso:Pa$$w0rd@clusteriteso.ic1trvq.mongodb.net/dasw?retryWrites=true&w=majority';
mongoose.connect(urlDB).then(() => {
    app.listen(5050, () => {
        console.log("Conectado a la base de datos");
    })
}).catch((error) => {
    console.log("No se pudo conectar", error);
})


