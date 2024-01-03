import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import  Box  from '@mui/material/Box';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
function ChatBar() {
    const [message,setMessage] = useState("")
    const handleInputChange = (event) => {
        setMessage(event.target.value);
      };
      const sendMessage = () =>[
        console.log(message)
      ]
  return (
    <>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',borderRadius : '10px',border : 1,width : '80%',height:'190%' }}>
      <div>
      <Chip label="bharada divyesh" sx={{bgcolor : "green",color : "white",width : '40%'}} />
      </div>
        <InsertEmoticonIcon />
        <TextField id="input-with-sx"  placeholder='Type a Message'   value={message}
      onChange={handleInputChange} sx={{borderRadius : '10px',width : '50%'}} />
        <AttachmentIcon />
        <MicIcon />
        <SendIcon onClick={sendMessage}/>
      </Box>
    </>
  )
}

export default ChatBar