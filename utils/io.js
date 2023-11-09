const chatController = require("../Controllers/chat.controller");
const userController = require("../Controllers/user.controller");

module.exports = (io) => {
  //io~
  io.on("connection", async (socket) => {
    console.log(`client is connected: ${socket.id}`);

    //대화의주제를 들었을 때 처리
    socket.on("login", async (username, cb) => {
      //유저정보 저장
      try {
        const user = await userController.saveUser(username, socket.id);

        //로그인 시 접속자 알림 띄우기
        const welcomeMessage = {
          chat: `${user.name} is joined to this room!`,
          user: { id: null, name: "system" },
        };
        io.emit("message", welcomeMessage);

        cb({ ok: true, data: user });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    });

    socket.on("sendMessage", async (message, cb) => {
      try {
        //1.유저찾기 -> socket.id 활용
        const user = await userController.checkUser(socket.id);

        //2.메시지 저장
        const newMessage = await chatController.saveChat(message, user);

        io.emit("message", newMessage);
        cb({ ok: true });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    });

    //사용자가 나갔을 때 처리
    socket.on("disconnect", () => {
      console.log("user is disconnected.");
    });
  });
};
