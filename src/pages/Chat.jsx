import React, { useState } from "react";
import { doctors } from "../assets/assets";

const messagesMock = [
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
  { sender: "doctor", text: "Hello! How can I help you today?" },
  { sender: "user", text: "I have a skin rash. What should I do?" },
];

export default function Chat() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [messages, setMessages] = useState(messagesMock);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex h-[85vh] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Doctor List */}
      <div className="w-1/3 bg-gray-100 p-4 border-r h-full overflow-y-hidden">
        <h2 className="text-lg font-semibold mb-4 flex-shrink">Your Doctors</h2>
        <ul className="h-[90%] overflow-y-auto">
          {doctors.map((doc) => (
            <li
              key={doc.id}
              className={` flex items-center gap-3 p-2 mb-2  rounded-lg cursor-pointer hover:bg-gray-200 ${
                selectedDoctor._id === doc._id
                  ? "bg-blue-100 border-blue-100 border-2"
                  : "border-gray-200 border-2"
              } `}
              onClick={() => setSelectedDoctor(doc)}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{doc.name}</div>
                <div className="text-xs text-gray-500">{doc.specialty}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b bg-gray-50">
          <img
            src={selectedDoctor.image}
            alt={selectedDoctor.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">{selectedDoctor.name}</div>
            <div className="text-xs text-gray-500">
              {selectedDoctor.specialty}
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto bg-white">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t bg-gray-50 flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
