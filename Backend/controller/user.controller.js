// user.controller.js
const db = require('../config/db');

exports.getUserDetails = (req, res) => {
    const userId = req.userId; // Assuming you have the userId in the request (after user is authenticated)

    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user details:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, user: results[0] });
    });
};
