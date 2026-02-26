import { useRef, useEffect } from 'react'
import React from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({chatMessages}){
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages])

  return(
    //onclick is an event handler function that will let us run a function when we click that button.
    <div className='chat-message-container'
      ref = {chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage 
              message = {chatMessage.message}
              sender = {chatMessage.sender}
              //add key props to track changes in the array
              key = {chatMessage.id}
            />
          );
      })}
  
    </div>
  )

}