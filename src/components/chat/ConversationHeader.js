import React from 'react'
import { useSelector } from 'react-redux';
function ConversationHeader() {
  const items = useSelector((state) => state.chat);
  return (
    <div className="bg-light sticky-md-top right ">
      {items[1] ?
        <div>

          <span className="h6 text-primary">{items[1].name}</span>
        </div> : ""}
    </div>
  )
}

export default ConversationHeader