import { useState } from 'react'
import React from 'react'
import { Chatbot } from 'supersimpledev';
import './App.css';

// chatbot
function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = React.useState('');
  
  function saveInputText(event){
     setInputText(event.target.value)
  }
  function sendMessage(){
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID() 
      }
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
     setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "bot",
        id: crypto.randomUUID() 
      }
    ]);

    setInputText('');
  };

  return (
    <>
    {/* <h1>chatBot</h1> */}
    <div className='chat-input-container'>
      
      {/* for cleaner code put each attribute on it's own line. */}
      <input 
        className='chat-input'
        size="30" 
        placeholder='Send a message to Chatbot..'
        onChange={saveInputText}
        value={inputText}
      />
      <button 
      className='send-button'
      onClick={sendMessage}
      >Send</button>
    </div>
    </>
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
    <div className={
      sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-bot'
    }>
      {/* using Guard operator &&  */}
      {sender === "bot" && 
        (<img src="./src/assets/Ai.png" 
        className='chat-message-profile'
          />
        
      )}
      <div className='chat-message-text'>
      {message}
      </div>
      {sender === "user" && 
        (<img src="./src/assets/User.png" 
        className='chat-message-profile'
         />

      )}
      
    </div>
  )
}

function ChatMessages({chatMessages}){
  return(
    //onclick is an event handler function that will let us run a function when we click that button.
    <div className='chat-message-container'>
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

export default function App(){
  // const [chatMessages, setChatMessages] = array; shortcut for this code is above line, called array destructuring.
  // use array destructuring to get values from the array.
  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  // we used lifted state up technique to move the state up into the parent component app to be used by both parent and child components.
  const [chatMessages, setChatMessages] = React.useState([{
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