import { useState } from 'react'
import { Chatbot } from 'supersimpledev';


export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');
  
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