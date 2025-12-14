const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Ruta para registrar IP
app.post('/log', (req, res) => {
  const ip = req.body.ip;
  const line = `${new Date().toISOString()} - ${ip}\n`;
  fs.appendFileSync('ips.txt', line);
  res.sendStatus(200);
});

// Ruta para ver todas las IPs
app.get('/ips', (req, res) => {
  const data = fs.readFileSync('ips.txt', 'utf8');
  res.type('text/plain').send(data);
});

app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));
