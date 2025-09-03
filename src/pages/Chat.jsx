// src/components/Chat.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import { getSocket } from "../sockets/socket";
import { doctors } from "../assets/assets";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import { AppContext } from "../context/AppContext";
import {
  getDoctorsForChat,
  getRoomId,
  getRoomMessages,
} from "../utils/Api.utils";
import { toast } from "react-toastify";

export default function Chat() {
  // State management
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [roomId, setRoomId] = useState("");

  const socketRef = useRef(null);
  const { token, userData } = useContext(AppContext);

  const handleGetDoctorsToChat = async () => {
    try {
      const { data } = await getDoctorsForChat();
      if (data) {
        setDoctors(data);
        setSelectedDoctor(data[0]);
      }
    } catch (error) {
      toast.error("failed to fetch doctors");
    }
  };
  // Socket connection only if token is present
  useEffect(() => {
    const init = async () => {
      if (token) {
        socketRef.current = getSocket(token);
        socketRef.current.on("private_message", (msg) => {
          console.log(msg, "messageee");
          setMessages((prev) => [...prev, msg]);
        });
      }
      await handleGetDoctorsToChat();
    };

    init();

    return () => {
      if (socketRef.current) {
        socketRef.current.off("private_message");
        socketRef.current.disconnect();
      }
    };
  }, [token]);

  // Send message handler
  const handleSend = () => {
    if (input.trim() && socketRef.current) {
      const message = {
        senderId: userData?._id,
        message: input,
        receiverId: selectedDoctor._id,
      };
      console.log(message, "inputMessage");
      setMessages([...messages, message]);
      socketRef.current.emit("private_message", message);
      setInput("");
    }
  };

  const joinRoom = () => {
    if (socketRef.current) {
      socketRef.current.emit("join_room", roomId);
    }
  };

  socketRef.current?.on("private_message", (msg) => {
    console.log(msg, "onlistener");
    setMessages((prev) => [...prev, msg]);
  });

  const handleFetchRoomId = async () => {
    try {
      const { data } = getRoomId(selectedDoctor._id);
      if (data) {
        setRoomId(data?._id);
      }
    } catch (error) {
      toast.error("failed to fetch room id");
    }
  };

  const handleFetchRoomMessages = async () => {
    try {
      const { data } = await getRoomMessages(selectedDoctor._id);
      console.log(data,"000000000000000");
      if (data) {
        console.log(data,"dataaaaaaaaaaaaaa");
        setMessages(data);
      }
    } catch (error) {
      toast.error("failed to fetch room messages");
    }
  };

  useEffect(() => {
    const fetchAndJoinRoom = async () => {
      if (selectedDoctor) {
        await handleFetchRoomId();
        await handleFetchRoomMessages();
        if (roomId) {
          joinRoom(roomId);
        } else {
          setRoomId(selectedDoctor._id + userData._id);
          joinRoom(roomId);
        }
      }
    };
    fetchAndJoinRoom();
  }, [selectedDoctor]);

  return (
    <div className="flex h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">
      {doctors && selectedDoctor && (
        <>
          <ChatSidebar
            doctors={doctors}
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={setSelectedDoctor}
          />
          <ChatWindow
            selectedDoctor={selectedDoctor}
            messages={messages}
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            userId={userData?._id}
          />
        </>
      )}
    </div>
  );
}
