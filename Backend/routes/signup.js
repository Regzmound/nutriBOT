const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../server')


router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the email or username already exists
    db.query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username], (err, results) => {
        if (err) return res.status(500).send({ message: 'Database query error' });

        if (results.length > 0) {
            const isEmailTaken = results.some(user => user.email === email);
            const isUsernameTaken = results.some(user => user.username === username);

            if (isEmailTaken && isUsernameTaken) {
                return res.status(400).send({ message: 'Email and username are already taken' });
            } else if (isEmailTaken) {
                return res.status(400).send({ message: 'Email is already taken' });
            } else if (isUsernameTaken) {
                return res.status(400).send({ message: 'Username is already taken' });
            }
        }

        // Hash the password and insert the user if no conflicts
        bcrypt.hash(password, 10, (hashErr, hash) => {
            if (hashErr) return res.status(500).send({ message: 'Error hashing password' });

            const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            db.query(sql, [username, email, hash], (error) => {
                if (error) return res.status(500).send({ message: 'Error inserting user' });
                res.status(201).send({ message: 'User registered successfully' });
            });
        });
    });
});


module.exports = router;
