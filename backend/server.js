const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// API to generate a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

app.get('/api/number', (req, res) => {
    res.json({ number: randomNumber });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
