const express = require('express');
const path = require('path');
const app = express();

// Ruta absoluta al directorio estático donde está tu HTML y CSS
const publicPath = path.join(__dirname, '..', 'client', 'src');

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(publicPath));

// Ruta principal que sirve el HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'html', 'Landing.html'));
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
