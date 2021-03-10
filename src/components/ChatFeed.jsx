import { useEffect } from 'react';
import MessageForm from './messageForm';
import MyMessage from './myMessage';
import theirMessage from './theirMessage';
const ChatFeed=(props)=>{
    const {chats, activeChat, username, messages} = props;
    const chat= chats && chats[activeChat];
    console.log(chat, username, messages);

    const renderMessages=()=>{
        const keys=Object.keys(messages);
        console.log(keys);

        return keys.map((keys,index)=>{
            const message=messages[keys];
            const lastMessageKey= index===0 ? null: keys[index-1];
            const isMyMessage = username===message.sender.username;

            return(
                <div key={'msg_${index}'} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            :<theirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft:isMyMessage ? '0px' : '68px'}}></div>
                    read-receipts
                </div>
            )
        }
        
        )
    }


    if(!chat) return 'Loading...';
    return(
        <div>
            <div className="chat-feed">
                <div className="chat-title-container">
                    <div className="chat-title">{chat.title}</div>
                    <div className="chat-subtitle">
                        {chat.people.map((person)=>` ${person.person.username}`)}
                    </div>
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}></div>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} /> 
            </div>
        </div>
    )
}

export default ChatFeed;