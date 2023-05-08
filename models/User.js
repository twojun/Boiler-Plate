const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String, 
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 550
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number
  }
});

// 정의된 스키마들을 Model 내부에 포함시킨다.
const user = mongoose.model('user', userSchema);

exports.module = { user };