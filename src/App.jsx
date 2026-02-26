import { useState } from 'react'
import React from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';

import './App.css';

export default function App(){
  // const [chatMessages, setChatMessages] = array; shortcut for this code is above line, called array destructuring.
  // use array destructuring to get values from the array.
  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  // we used lifted state up technique to move the state up into the parent component app to be used by both parent and child components.
  const [chatMessages, setChatMessages] = useState([{
    message: "Hello chatBot",
    sender: "user",
    id: "id1"
  }, {
    message: "Hello! How may I help you?",
    sender: "bot",
    id: "id2"
  }, {
    message: "can you get me today's date?",
    sender: "user",
    id: "id3"
  }, {
    message: "Today's date is 2026-01-06 .",
    sender: "bot",
    id: "id4"
  }]);
  //01, to save this data we will use state hooks and create a varaible.
  
  // convert this data into components so we don't have to write it manually.
  // now Generate html using map method.
  // map is an array method which goes through each item in the array and returns a new array with results of calling a function on each item.
  // the function inside map method is called arrow function which is a shorter form of a function.
  // we will insert the chatMessages data into ChatMessage component using props.
  // const chatMessComp = chatMessages.map((chatMessage) => {
  //   return (
  //     <ChatMessage 
  //       message = {chatMessage.message}
  //       sender = {chatMessage.sender}
  //     />
  //   )
  // })

  return (
    <div className='app-container'>
      
      <ChatMessages 
        chatMessages = {chatMessages}

      />
      <ChatInput
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}      
      />
    

    </div>
  )
}

// after using usestate hooks now to make our chatbot website interactive we will add Event handlers.
// Event handlers are functions that are called when an event occurs, such as a button click or a form submission.
// state: a way to store and manage data in a component that can change over time, causinng the component to re-render when the state changes.
// state isn data that is connencted to the html, when we update this data, it will update the html.
// event: is an object and contains detail about the event or about thechange. 