import { useState } from 'react'
import './App.css'

// chatbot
function Chatbot(){
  return (
    <div className='container'>
      <h1>chatBot</h1>
      {/* for cleaner code put each attribute on it's own line. */}
      <input 
        size="30" 
        placeholder='Send a message to Chatbot..'
      />
      <button >Send</button>
    </div>
  )
}

//  we will use props to make our component reusable.
//  we will use Destructuring, and Guard operator &&.
// function for chatMessage
function ChatMessage({ message, sender }){ // we have another way to destructure right in the parameter  
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props; // This is called destructuring,and is the shorter version of the above 2 commented lines.


  // lets code this if statement inside the jsx of ChatMessage component to avoid duplicated line of code. it works same as if statement and it is written in one line of code.
  // instead of if statement we will use Guard operator &&, which works as "exp: const result = value1 && value2;", it means if the value1 is true the result will be value 2.
  /*if (sender === "bot") {
    return(
      <div>
        <img src="./src/assets/Ai.png" alt="user" width="50" />
        {message}
        
      </div>
    )
  }
    */

  return(
    <div>
      {/* using Guard operator &&  */}
      {sender === "bot" && 
        (<img src="./src/assets/Ai.png" alt="user" width="50" />
        
      )}
      {message}
      {sender === "user" && 
        (<img src="./src/assets/User.png" alt="user" width="50" />

      )}
      
    </div>
  )
}

export default function App(){
  //01, to save this data we will use state hooks and create a varaible.
  const chatMessages = [{
    message: "Hello chatBot",
    sender: "user"
  }, {
    message: "Hello! How may I help you?",
    sender: "bot"
  }, {
    message: "can you get me today's date?",
    sender: "user"
  }, {
    message: "Today's date is 2026-01-06 .",
    sender: "bot"
  }]
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
    <>
    <Chatbot />
    {chatMessages.map((chatMessage) => {
    return (
      <ChatMessage 
        message = {chatMessage.message}
        sender = {chatMessage.sender}
      />
    )
  })}
    

    </>
  )
}
