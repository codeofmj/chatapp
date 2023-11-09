const User = require("../Models/user");
const userController = {};

userController.saveUser = async (userName, sid) => {
  //이미 접속한 유저인지 확인
  let user = await User.findOne({ name: userName });
  console.log("User ", user);

  //없다면 새로운 유저정보 만들기
  if (!user) {
    user = new User({ name: userName, token: sid, online: true });
  }
  //이미 있는 유저라면 token정보만 업데이트
  user.token = sid;
  user.online = true;

  await user.save();
  return user;
};

userController.checkUser = async (sid) => {
  const user = await User.findOne({ token: sid });
  if (!user) throw new Error("user not found.");
  return user;
};

module.exports = userController;
