const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS if needed

//Routes
const signupRoutes = require('./routes/signup');  
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user')

//Use routes
app.use('/api/signup', signupRoutes);  // Use signup route
app.use('/api/login', loginRoutes);    // Use login route
app.use('/api/user', userRoutes);      //User user route

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the nutribot API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


