import React from "react";
import { Link } from "react-router-dom";
import { messages } from "../JsonData/messages";

const Messages = () => {
  return (
    <div className="bg-blue-400 text-center h-screen text-white p-10">
      {messages.map((msg) => {
        return (
          <div
            key={msg.id}
            className="w-5/12 border mx-auto border-gray-600 p-2 text-left cursor-pointer"
          >
            <Link
              to={{
                pathname: `/messages/${msg.id}`,
              }}
              className="text-base sm:text-lg"
            >
              {msg.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
