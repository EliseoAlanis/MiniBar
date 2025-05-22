// server/controllers/userController.js
const pool = require('../db/pool');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
            [email, password] // ¡Importante! Deberías hashear la contraseña en producción
        );
        res.status(201).json({ message: 'Usuario creado', user: result.rows[0] });
    } catch (err) {
        console.error('Error al registrar usuario', err);
        res.status(500).json({ error: 'Error del servidor' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );

        if (result.rows.length > 0) {
            res.json({ message: 'Login exitoso', user: result.rows[0] });
        } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    } catch (err) {
        console.error('Error al iniciar sesión', err);
        res.status(500).json({ error: 'Error del servidor' });
    }
};

module.exports = { registerUser, loginUser };
