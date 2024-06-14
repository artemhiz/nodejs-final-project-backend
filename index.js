const express = require('express');
const app = express();
const cors = require('cors');
const postsRouter = require('./posts');
const profileRouter = require('./profile');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require('dotenv').config();

const mongoose = require('mongoose');

app.use('/post', postsRouter);
app.use('/profile', profileRouter);

mongoose.connect(process.env.MONGODB_LINK).then(() => console.log('Connected to MongoDB'));

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server activated at port ${ PORT }`));