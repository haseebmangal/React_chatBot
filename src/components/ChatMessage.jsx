// chatbot
//  we will use props to make our component reusable.
//  we will use Destructuring, and Guard operator &&.
// function for chatMessage
export function ChatMessage({ message, sender }){ // we have another way to destructure right in the parameter  
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