const express = require("express");
const app = express();
const fetch = require("node-fetch");
const pool = require("./dbPool.js");
app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.get("/", async function(req, res) {
    let apiUrl = 'https://api.unsplash.com/photos/random/?client_id=Q3gYkgaCCTPOB5ALBCfBaczf7_CuXF2R3G_1x6-E0Xc&featured=true&orientation=landscape';
    let response = await fetch(apiUrl);
    let data = await response.json();
    res.render("index", { "imageUrl": data.urls.small })

});

app.get("/search", async function(req, res) {
    let keyword = "";
    if (req.query.keyword) {
        keyword = req.query.keyword;
    }

    let apiUrl = `https://api.unsplash.com/photos/random/?count=9&client_id=Q3gYkgaCCTPOB5ALBCfBaczf7_CuXF2R3G_1x6-E0Xc&featured=true&orientation=landscape&query=${keyword}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    let imageUrlArray = [];
    for (let i = 0; i < data.length; i++) {
        imageUrlArray.push(data[i].urls.small);
    }
    
    res.render("results", { "imageUrl": data[0].urls.small, "imageUrlArray": imageUrlArray });
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("express server is running");
});
