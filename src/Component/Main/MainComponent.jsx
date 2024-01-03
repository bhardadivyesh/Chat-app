import ChatBar from '../ChatBar/ChatBar'
import ContactBar from "../ContactBar/ContactBar"
import Profile from '../Profile/Profile'

function MainComponent() {
  return (
    <>
    <div className='flex h-96'>
      <div>
    <ContactBar />
    </div>
    
    <ChatBar  />
    <Profile />
    </div>
   
    </>
  )
}

export default MainComponent