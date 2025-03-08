"use client";

import {useChat} from "@ai-sdk/react";
import Messages from "@/components/Messages";
import ChatInput from "@/components/ChatInput";
import type {Message} from "@ai-sdk/react";


export default function ChatWrapper({ sessionId,initialMessages } : { sessionId: string, initialMessages: Message[] }) {
    const { messages,handleInputChange,input,handleSubmit,setInput } = useChat({
        api : "/api/chat-stream",
        body : { sessionId },
        initialMessages : initialMessages,
    })
    return (
        <div className="relative h-screen bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
            <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
               <Messages messages={messages} />
            </div>

            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
            />


        </div>
    )
}