const express = require('express');
// import express from 'express' // just different style common js or module js
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send(`Hello! `);
    
})

app.get('/twitter', (req,res)=>{
    res.send("Body of response for twitter")
})

// To parse form data, add this middleware
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.send(`
        <form action="/home" method="POST" style="display:flex; flex-direction:column; width:250px; gap:10px;">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
        </form>
    `)
})

app.post('/home', (req, res) => {
    const username = req.body.username;
    res.send(`
        <nav style="background:#eee; padding:10px;">
            <span>Welcome, <strong>${username}</strong>!</span>
        </nav>

    `)
})


app.get('/chai', (req, res)=>{
    res.send(`
        <div style="border:1px solid #ccc; padding:16px; border-radius:8px; width:300px; font-family:sans-serif;">
            <h2>Chai Card</h2>
            <p>This is a sample card served from the /chai route.</p>
        </div>
    `)
})

app.listen(port, ()=>{
    console.log(`listning on the port ${port}`)
})