const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");


const authRouter = require('./src/routes/authRouter');
const { connectToDatabase } = require('./src/services/mongodb');
const bankRouter = require('./src/routes/bankRouter');
const userRouter = require('./src/routes/userRouter');

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


connectToDatabase();





app.get('/', (req, res) => {    
    res.send('Hello World');
});

app.use('/api/auth', authRouter);
app.use('/api/bank', bankRouter);
app.use('/api/user', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});