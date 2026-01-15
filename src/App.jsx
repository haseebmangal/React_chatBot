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
  return (
    <>
    <Chatbot />
    <ChatMessage 
      message="Hello chatBot" 
      sender="user" 
    />
    <ChatMessage 
      message="Hello! How may I help you?" 
      sender="bot" 
    />
    <ChatMessage 
      message="Can you get me today's date?" 
      sender="user" 
    />
    <ChatMessage 
      message="Today's date is 2026-01-06  ." 
      sender="bot" 
    />

    </>
  )
}
