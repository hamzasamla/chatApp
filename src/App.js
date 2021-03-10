import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="09108d02-b44b-463f-afd0-7d14b1f194ae"
            userName="hamzasamla"
            userSecret="12345"
            renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
        />
    )
}

export default App;