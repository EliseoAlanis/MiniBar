// server/server.js
const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware para parsear JSON del body
app.use(express.json());

// Servir archivos estáticos
const publicPath = path.join(__dirname, '..', 'client', 'src');
app.use(express.static(publicPath));

// Rutas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'html', 'Landing.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(publicPath, 'html', 'InicioDeSesion.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(publicPath, 'html', 'Register.html'));
});

// Rutas de la API
app.use('/api/users', userRoutes);

// Escuchar en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});



const servoRoutes = require('./routes/servo');
app.use('/api', servoRoutes);

app.get('/control', (req, res) => {
    res.sendFile(path.join(publicPath, 'html', 'ControlServo.html'));
});
