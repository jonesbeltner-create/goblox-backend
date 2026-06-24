const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for Godot
app.use(cors());

// Railway requires dynamic port
const PORT = process.env.PORT || 3000;

// Root route (fixes "Cannot GET /")
app.get('/', (req, res) => {
    res.json({ message: "Goblox backend is online!" });
});

// Ping route
app.get('/ping', (req, res) => {
    res.json({ message: "Goblox backend is running!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Goblox backend listening on port ${PORT}`);
});
