const express = require('express');
const router = express.Router();
const mqtt = require('mqtt');

// Conexión al broker MQTT
const client = mqtt.connect('mqtt://3.230.133.173:1883'); // Cambiá esto si usás Mosquitto privado
const topic = 'minibar/servo';


client.on('connect', () => {
    console.log('Conectado a MQTT desde servidor Express');
});

// POST /api/servir
// router.post('/servir', (req, res) => {
//     const mensaje = 'SERVIR';
//
//     client.publish('minibar/control', mensaje, () => {
//         console.log('Mensaje enviado al ESP32:', mensaje);
//         res.status(200).json({ msg: 'Orden enviada al minibar' });
//     });
// });
router.post('/servir', (req, res) => {
    const bebida = req.body.bebida || '1'; // Default to 1 if not provided
    const mensaje = `SERVIR:${bebida}`;

    client.publish('minibar/control', mensaje, () => {
        console.log('Mensaje enviado al ESP32:', mensaje);
        res.status(200).json({ msg: 'Orden enviada al minibar' });
    });
});
module.exports = router;
