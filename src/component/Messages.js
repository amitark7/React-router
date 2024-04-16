import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const messages = [
    {
      id: 1,
      title: "Messages 1",
      messages:
        "You Want to learn React Router then You must read React-Router Documentation",
    },
    { id: 2, title: "Messages 2", messages: "Hey User How are You ?" },
    {
      id: 3,
      title: "Messages 3",
      messages: "Thanks for Visit this site. Visit Again",
    },
  ];
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
              state={{ message: msg }}
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
