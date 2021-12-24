import React, { useState } from "react";
import FriendListItem from "components/FriendsListItem";

function FriendList() {
  const [count, setCount] = useState(34);
  const renderItems = () => {
    var indents = [];
    for (let i = 0; i <= count; i++) {
      indents.push(<FriendListItem />);
    }
    return indents;
  };
  return <>{renderItems()}</>;
}

export default FriendList;
