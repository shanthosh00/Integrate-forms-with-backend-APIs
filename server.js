const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = []; // temporary database

// SIGNUP API
app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    users.push({ name, email, password });
    res.json({ message: "Signup successful" });
});

// LOGIN API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        res.json({ message: "Login successful", name: user.name });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
