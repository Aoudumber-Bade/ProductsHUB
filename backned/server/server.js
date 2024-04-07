const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("Welcome to ou home page!!!");
})

app.get("/register",(req,res) => {
    res.send("Welcome to registrtaion page!!!!!");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})