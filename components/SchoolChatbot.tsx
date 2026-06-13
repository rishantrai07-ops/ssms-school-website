"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function SchoolChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the Sunshine Model School Assistant. How can I help you today?",
    },
  ]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again later.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#800020] text-white w-16 h-16 rounded-full shadow-xl hover:scale-105 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden border">

          {/* Header */}
          <div className="bg-[#800020] text-white p-4">
            <h2 className="font-bold text-lg">
              Ask SSMS Assistant
            </h2>

            <p className="text-sm text-white/80">
              Sunshine Model School
            </p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.role === "user"
                    ? "ml-auto bg-[#800020] text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-100 p-3 rounded-xl inline-block">
                Typing...
              </div>
            )}

          </div>

          {/* Input */}
          <div className="border-t p-4 flex gap-2">

            <input
              type="text"
              value={input}
              placeholder="Ask a question..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-[#800020] text-white px-4 rounded-lg"
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}