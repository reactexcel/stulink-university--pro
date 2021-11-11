import React from "react";
import AddMembers from "./AddMembers";
import ChatRooms from "./ChatRooms";
import TrendingTopic from "./TrendingTopic";

const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 text-center ">
      <div className=" grid grid-cols-3 gap-2">
        <TrendingTopic />
        <AddMembers />
        <ChatRooms />
      </div>
    </div>
  );
};

export default Features;
