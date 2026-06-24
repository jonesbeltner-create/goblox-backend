const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.json({ message: "Goblox backend is running!" });
});

app.listen(port, () => {
    console.log(`Goblox backend listening on port ${port}`);
});
