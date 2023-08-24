import React from 'react'

function SendMessage(props) {
  return (
    <div className="message-out FMR">
        <div className="msg-container">
          <div className="its">
            <div className="msg-text ">
            {props.item.text}

            </div>
          </div>
        </div>
      </div>

  )
}

export default SendMessage