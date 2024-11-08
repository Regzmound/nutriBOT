// routes/user.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleWare');
const db = require('../config/db')

// Protected route to get user profile
router.get('/profile', authMiddleware, (req, res) => {
    const userId = req.user.userId;  // userId comes from JWT payload
    
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ profile: results[0] });
    });
});

// Protected route to update user profile
router.put('/profile', authMiddleware, (req, res) => {
    const userId = req.user.userId; // userId comes from JWT payload
    const { username, gender, height, weight, age } = req.body;

    // SQL query to update the user profile
    const updateQuery = `
        UPDATE users
        SET username = COALESCE(?, username),
            gender = COALESCE(?, gender),
            height = COALESCE(?, height),
            weight = COALESCE(?, weight),
            age = COALESCE(?, age)
        WHERE id = ?;
    `;

    db.query(updateQuery, [username, gender, height, weight, age, userId], (err, results) => {
        if (err) {
            console.error('Error updating profile:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Profile updated successfully' });
    });
});

module.exports = router;
