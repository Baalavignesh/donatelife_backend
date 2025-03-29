const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const authRouter = require('./src/routes/authRouter');

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {    
    res.send('Hello World');
});

app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});