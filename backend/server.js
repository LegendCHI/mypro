const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/log', (req, res) => {
  const ip = req.body.ip;
  const line = `${new Date().toISOString()} - ${ip}\n`;
  fs.appendFileSync('ips.txt', line);
  res.sendStatus(200);
});

app.get('/ips', (req, res) => {
  const data = fs.existsSync('ips.txt') ? fs.readFileSync('ips.txt', 'utf8') : '';
  res.type('text/plain').send(data);
});

app.get('/', (req, res) => {
  res.send('Backend funcionando en Render 🚀');
});

app.listen(process.env.PORT || 3000, () => console.log('Servidor activo'));
