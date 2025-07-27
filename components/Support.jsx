"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Support = () => {
  const containerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const now = new Date();
    setMessages([
      {
        id: crypto.randomUUID(),
        persianDate:
          now.toTimeString().split(" ")[0].slice(0, 5) +
          " - " +
          now.toLocaleDateString("fa-IR"),
        type: "AI",
        content: "Hi 👋 How could I help you ?",
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || trimmed.length > 100) return;

    const now = new Date();
    const formattedTime =
      now.toTimeString().split(" ")[0].slice(0, 5) +
      " - " +
      now.toLocaleDateString("fa-IR");

    const userMessage = {
      id: crypto.randomUUID(),
      persianDate: formattedTime,
      type: "USER",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    scrollToBottom();

    try {
      const reply = await sendGPTMessage(trimmed);
      const replyDate = new Date();
      const botMessage = {
        id: crypto.randomUUID(),
        persianDate:
          replyDate.toTimeString().split(" ")[0].slice(0, 5) +
          " - " +
          replyDate.toLocaleDateString("fa-IR"),
        type: "AI",
        content: reply,
      };
      setMessages((prev) => [...prev, botMessage]);
      setTimeout(scrollToBottom, 200);
    } finally {
      setIsTyping(false);
    }
  };

  async function sendGPTMessage(message) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    return data?.choices?.[0]?.message?.content || "No response received.";
  }

  return (
    <div className="w-full flex items-center justify-center text-white">
      <div className="flex flex-col w-[600px] rounded-lg border border-purple-700 overflow-hidden">
        <div className="w-full bg-purple-700 py-4 px-6 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src="/images/chatBot.png" width={24} height={24} alt="icon" />
            <p className="text-white text-lg font-bold">Support</p>
          </div>
        </div>

        <div className="w-full py-6 px-6 flex flex-col gap-6 bg-zinc-900">
          <div
            ref={containerRef}
            className="w-full h-[400px] flex flex-col gap-2 overflow-y-auto px-3"
          >
            {messages.map((item, index) => (
              <div
                key={index}
                className={`w-full flex flex-col ${
                  item.type === "USER" ? "items-start" : "items-end"
                } gap-1`}
              >
                <p
                  className={`text-sm leading-6 px-3 py-2 break-words max-w-[90%] ${
                    item.type === "USER"
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 border border-zinc-600 text-white"
                  }`}
                  style={{
                    borderRadius:
                      item.type === "USER"
                        ? "10px 10px 0px 10px"
                        : "0px 10px 10px 10px",
                  }}
                >
                  {item.content}
                </p>
                <div className="flex gap-1 text-xs text-gray-400">
                  <p>{item.persianDate}</p>
                  <Image src="/images/Unread.svg" width={16} height={16} alt="seen" />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-evenly gap-2 rounded-lg border border-zinc-700 px-3 py-2 bg-zinc-800">
            <Image
              src="/images/Plain.svg"
              width={16}
              height={16}
              alt="send"
              className={`cursor-pointer ${message ? "opacity-100" : "opacity-40"}`}
              onClick={() => message && sendMessage()}
            />
            <input
              type="text"
              placeholder="Write your message..."
              className="w-full text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none"
              value={message}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 100) setMessage(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
