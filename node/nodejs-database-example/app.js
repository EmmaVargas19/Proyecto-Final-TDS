const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const User = mongoose.model('User', {
    username: String,
    password: String,
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nodejs_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a data model (example)
const Data = mongoose.model('Data', {
    name: String,
});

// Route to fetch data
app.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Define a simple route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // You may use more secure authentication mechanisms in a real application
        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/save-data', async (req, res) => {
    try {
        const { username, data } = req.body;

        // Find the user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Save data for the user
        user.data = data;
        await user.save();

        res.json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});
