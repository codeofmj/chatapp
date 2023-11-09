const express = require("express");
const mongoose = require("mongoose");
const app = express();

//process.env를 사용하기 위함
require('dotenv').config()
const cors = require('cors')

app.use(cors())

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 }).then(()=>console.log('데이터베이스 연결 성공 '));

 module.exports = app