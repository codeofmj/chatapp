import "./App.css";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";
import socket from "./server";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  console.log(messageList);

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요");
    // console.log(userName);

    //emit(대화의주제, 보낼내용, 콜백함수)
    socket.emit("login", userName, (res) => {
      //모든 처리가 완료된 후 실행
      // console.log("Response:", res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  //메세지 보내는 함수
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage res", res);
    });
  };

  useEffect(() => {
    socket.on("message", (message) => {
      console.log("res", message);
      setMessageList((prevState) => prevState.concat(message));
    });
    askUserName();
  }, []);

  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user}/>
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        ></InputField>
      </div>
    </div>
  );
}

export default App;
