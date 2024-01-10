import { useState } from 'react';
import ChatBar from '../ChatBar/ChatBar'
import ContactBar from "../ContactBar/ContactBar"
import Profile from "../Profile/Profile"
import contacts from "../../../contacts.json"
function MainComponent() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDisplay,setIsDisplay] = useState(true);
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };
  const handleNavClick = () =>{
    setIsDisplay(true);
  }
  return (
    <>
    <div className='flex h-96'>
      <div>
    <ContactBar contacts={contacts} onItemClick={handleContactClick} />
    </div> 
    <ChatBar selectedContact={selectedContact} selectdata={selectedContact} onNavClick={handleNavClick} />
    <Profile data={selectedContact} isDisplay={isDisplay}/>
    </div>
    </>
  )
}
export default MainComponent