const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const router = express.Router();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


router.post('/', async (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length > 0) {
            const user = results[0];
            // Check if the password matches
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return res.json({ success: true, message: 'Login successful' });
            } else {
                return res.json({ success: false, message: 'Invalid password' });
            }
        } else {
            return res.json({ success: false, message: 'User not found' });
        }
    });
});


module.exports = router;
