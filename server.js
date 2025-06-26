const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 8000;

//its a middleware used to parse json in requests
app.use(express.json());

// Serve static files (index.html, js/main.js, etc.)
app.use(express.static(__dirname));


// POST /reverse

app.post('/reverse', (req, res) => {
    const { input } = req.body;

    if (typeof input !== 'string') {
        return res.status(400).json({ error: 'Input must be a string' });
    }

    const reversed = input.split('').reverse().join('');
    res.json({ reversed });
});


app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
