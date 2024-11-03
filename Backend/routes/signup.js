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
    const { username, email, password } = req.body;

    // Check if the user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).send('Database query error');

        if (results.length > 0) {
            return res.status(400).send('User already exists with this email');
        }

        // Hash the password before saving
        bcrypt.hash(password, 10, (hashErr, hash) => {
            if (hashErr) return res.status(500).send('Error hashing password');

            const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            db.query(sql, [username, email, hash], (error) => {
                if (error) return res.status(500).send('Error inserting user');
                res.status(201).send('User registered successfully');
            });
        });
    });
});

module.exports = router;
