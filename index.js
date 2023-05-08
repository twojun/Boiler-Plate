const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://wonjun:dnjswns032@youtubecloneproject.amvf3zc.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello Express Server!'));

app.listen(port, () => console.log(`Express server listening on port ${port}!`));