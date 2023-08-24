import React from 'react'

function RecieveMessage(props) {
  return (
    <div className="message-in FMR">
        <div className="msg-container">
          <div className="it">
            <div className="msg-text ">
            {props.item.text}


            </div>
          </div>
        </div>
      </div>
  )
}

export default RecieveMessage