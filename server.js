const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
res.send('pong');
});

app.get('/status', (req, res) => {
res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

app.get('/equity', (req, res) => {  
res.json({ equity: 0 });
});
