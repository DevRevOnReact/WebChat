import React, { useState } from 'react'
import { BsGithub, BsFillChatLeftDotsFill, BsPlusCircle } from "react-icons/bs";
// import Button from 'react-bootstrap/Button';
import { SearchBox } from './SearchBox';
import ChatLog from './ChatLog';
import ConversationAdd from './ConversationAdd';

function LeftChatBox(props) {

  const [add, setAdd] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // Conversation Add function
  const handleAdd = () => {
    if (add) {
      setAdd(false);
    }
    else {
      setAdd(true);
    }
  };

  const { data2 } = props;
  return (
    <div className="col-md-4 ">
      <div className="sticker sticky-md-top  left">
        <div className="bg-light ">



        </div>

        {/* <!-- **********************  search Bar  ******************* --> */}
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      {/* <!-- **********************  Chat User  *************************** --> */}

      {/* Add user chat only  */}
      <div className="users">
        {data2 ? data2.friends
          .filter((val) => {
            if (searchInput == '') {
              return val;
            }
            else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {
              return val;
            }
          })
          .map((item, index) => {
            if (item.chatlog.length > 0) {
              return <ChatLog item={item} key={index} />
            }
          }) : ""}
      </div>
    </div>
  )
}

export default LeftChatBox