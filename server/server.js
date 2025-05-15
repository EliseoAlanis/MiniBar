const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const app = express();

// Ruta absoluta al directorio estático donde está tu HTML y CSS
const publicPath = path.join(__dirname, '..', 'client', 'src');

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(publicPath));

// Ruta principal que sirve el HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'html', 'Landing.html'));
});

// Configuración de PostgreSQL (una sola vez)
const pool = new Pool({
    user: 'postgres',
    host: '172.31.21.69',
    database: 'minibar',
    password: '16474264',
    port: 5432,
});

// Comprobar conexión a PostgreSQL
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error de conexión:', err);
    } else {
        console.log('Conectado a PostgreSQL:', res.rows);
    }
});

// Puerto - importante: escuchar en 0.0.0.0 para aceptar conexiones externas
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});