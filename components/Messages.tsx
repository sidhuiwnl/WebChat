import { type Message as TMessages } from  "@ai-sdk/react"
import Message from "@/components/Message";
import {MessageSquare} from "lucide-react";

interface MessagesProps {
    messages: TMessages[];
}

export default function Messages({ messages } : MessagesProps){
    return (
        <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
            { messages.length ? messages.map((message, index) => (
                <Message key={index} content={message.content} isUserMessage={message.role === "user"} />
            )) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <MessageSquare className="size-8 text-blue-500" />
                    <h3 className="font-semibold text-xl text-white">You&apos;re all set!</h3>
                    <p className="text-zinc-500 text-sm">Ask your first question to get started.</p>
                </div>
            )}
        </div>
    )
}