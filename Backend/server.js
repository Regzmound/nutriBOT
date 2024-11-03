const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000; // You can choose any port

// Enable CORS
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Create a connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = db

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Import the auth routes
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

// Use the signup and login routes
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);


app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM yourTableName', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the nutribot API!'); // You can customize this message
});
