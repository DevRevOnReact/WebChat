import React from 'react'

import { useDispatch } from 'react-redux';
import { addID } from '../../store/chatSlice';
function ChatLog(props) {
  const dispatch = useDispatch();

  //Add new user in redux
  const setChatID = () => {
    dispatch(addID({
      chatID: props.item.id,
      name: props.item.name,
      picture: props.item.picture
    })) 
  }


  return (
    <div className="users">
      <div className="vq6sj _2nY6U " onClick={() => {setChatID() }}>
        <div className="d-flex">

        </div>
        <div className="aa d-flex ">
          <div className="bb d-flex">
            <div className="bbb d-flex">
            {props.item.name}
            </div>


          </div>
          <div className="cc d-flex">
            <div className="dd">
              <span>{props.item.chatlog[props.item.chatlog.length - 1].text}</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLog