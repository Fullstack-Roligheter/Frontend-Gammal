//Denna script ska fungera som en link mellan dom olika "pages"/scripts man vill ladda in

//const exp = require("constants")
//const res = require("express/lib/response")
const express = require('express')
const path = require('path')

const app = express()

//express.static(path.resolve(__dirname, "frontend", "static"),
	//{extensions: ["js"]}

//Definerar att vi vill använda vår static folder och express.static
app.use("/static", express.static(path.resolve(__dirname, "/frontend", "/static/js")))

app.get("/*", (req, res) => {    //Här specifierar att all path ska alltid gå tillbaka till vår "huvudsida" (index.html) för att denna ska bli en SPA!
    res.sendFile(path.join(__dirname, "frontend/index.html")) 
})

app.listen(process.env.PORT||3000, () => console.log("Server running..."))  //Det här är default porten för webbsidan, när vi kör igång den i terminalen med node server.js ser vi console.log msg