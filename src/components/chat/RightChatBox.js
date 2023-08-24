import {  BsCursorFill} from "react-icons/bs";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ConversationHeader from "./ConversationHeader";
import RecieveMessage from "./RecieveMessage";
import SendMessage from "./SendMessage";
import { addChatLog } from "../../store/chatSlice";

function RightChatBox() {
 
  const items = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let date = Date();
    let time = date.slice(16, 21);
    if (text != "") {
      dispatch(addChatLog({ "text": text, "timestamp": time }));
    }
    else {
      alert("Напиши сообщение");
    }

    setText("");
  };
  return (
    <div className="col-md-8 right-bar  ">


      <ConversationHeader />


      <div className="chat setting">
        <div className='scroll'>

          {items[0] && items[1] ? items[0].friends.map((item, index) => {
            if (item.id == items[1].chatID) {
              return (
                <div key={index}>
                  {item.chatlog.map((chatLog, index) => {
                    return (
                      <div>
                        <SendMessage item={chatLog} key={index} />
                        <RecieveMessage item={chatLog} key={index} />
                      </div>
                    )
                  })}
                </div>
              )
            }
          }) : <div className='start-user'>
          </div>
          }
        </div>
      </div>

      {items[1] ?
        <div className="bg-light sticky-md-top  ">
          <form onSubmit={handleSendMessage}>
            <div className="float-end mt-3 chatbox  d-flex">
              <input type="text" id='inputtag' value={text} className="form-control mb-3" onChange={(e) => {
                setText(e.target.value);
              }} placeholder="Пишите" />
              <div className="mt-3">
                <button className="btn-plus">Отправить </button>
              </div>
            </div>
          </form>
        </div> : ""}
    </div>
  )
}

export default RightChatBox