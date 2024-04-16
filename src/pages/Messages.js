import React from "react";
import { Link } from "react-router-dom";
import messageJson from "../JsonData/messageJson.json";

const Messages = () => {
  const { messages } = messageJson;
  return (
    <div className="bg-blue-400 text-center h-screen text-white p-10">
      {messages.map((msg) => {
        return (
          <Link
            key={msg.id}
            to={{
              pathname: `/messages/${msg.id}`,
            }}
            state={{ messages: msg }}
            className="w-5/12 border block mx-auto border-gray-600 p-2 text-left cursor-pointer text-base sm:text-lg"
          >
            {msg.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Messages;
