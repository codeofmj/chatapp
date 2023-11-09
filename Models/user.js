const mongoose = require("mongoose");

//schema: 데이터의 설계도(컬럼이름, 타입, 규칙 등을 정의)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true,
  },
  token: {
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema );
