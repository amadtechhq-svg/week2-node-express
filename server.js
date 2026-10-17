const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request made to: ${req.url}`);
    next();
};
app.use(requestLogger);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Missing required data: name and email are required.' });
    }

    res.status(201).send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

