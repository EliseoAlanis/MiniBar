// const bcrypt = require('bcrypt');
// const pool = require('../db');
//
// exports.register = async (req, res) => {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     try {
//         await pool.query('INSERT INTO usuarios (email, password) VALUES ($1, $2)', [email, hashedPassword]);
//         res.status(201).send('Usuario registrado');
//     } catch (err) {
//         res.status(500).send('Error al registrar usuario');
//     }
// };
//
// exports.login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
//         if (result.rows.length === 0) return res.status(401).send('Usuario no encontrado');
//
//         const user = result.rows[0];
//         const match = await bcrypt.compare(password, user.password);
//         if (!match) return res.status(401).send('Contraseña incorrecta');
//
//         res.send('Login exitoso');
//     } catch (err) {
//         res.status(500).send('Error en el login');
//     }
// };
