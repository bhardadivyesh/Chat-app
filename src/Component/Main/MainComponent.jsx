import { useState } from 'react';
import ChatBar from '../ChatBar/ChatBar'
import ContactBar from "../ContactBar/ContactBar"
import Profile from "../Profile/Profile"
import contacts from '../../../contacts.json'
function MainComponent() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };
  return (
    <>
    <div className='flex h-96'>
      <div>
    <ContactBar contacts={contacts} onItemClick={handleContactClick} />
    </div>
    
    <ChatBar selectedContact={selectedContact} selectdata={selectedContact}/>
    <Profile data={selectedContact}/>
    </div>
   
    </>
  )
}

export default MainComponent