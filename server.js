const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ⭐ ROUTE POST PRINCIPALE — MT5 DEVE VEDERE QUESTA
app.post("/", (req, res) => {
res.setHeader("Content-Type", "application/json");
res.send(JSON.stringify({
status: "ok",
message: "POST ricevuto correttamente",
data: req.body
}));
});

// Ping
app.get('/ping', (req, res) => {
res.send('pong');
});

// Status
app.get('/status', (req, res) => {
res.json({ status: 'ok', time: new Date().toISOString() });
});

// API Equity
app.get('/equity', (req, res) => {
res.json({ equity: 0 });
});

// API Profit & Loss
app.get('/pnl', (req, res) => {
res.json({ pnl: 0 });
});

// API Drawdown
app.get('/drawdown', (req, res) => {
res.json({ drawdown: 0 });
});

// API Operazioni Aperte
app.get('/open_trades', (req, res) => {
res.json({ open_trades: 0 });
});

// API Ordini Pendenti
app.get('/pending_orders', (req, res) => {
res.json({ pending_orders: 0 });
});

// API Ultima News Rossa
app.get('/latest_news', (req, res) => {
res.json({
title: "Nessuna news disponibile",
impact: "none",
time: null
});
});

// Route POST /update (opzionale)
app.post('/update', (req, res) => {
const data = req.body;
res.json({ status: "ok", received: data });
});

// Avvio server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
