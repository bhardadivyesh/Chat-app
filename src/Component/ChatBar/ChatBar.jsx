import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import  Box  from '@mui/material/Box';
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import MicIcon from '@mui/icons-material/Mic';
// import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
// import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
function ChatBar() {
  const [message,setMessage] = useState('');
  function handleClick(){
    console.log("click work");
    setMessage("user")
  }
  return (
    <>
    {console.log(message)}
    <Box sx={{ display: 'block',borderRadius : '10px',border : 1,width : '80%',height:'190%' }}>
     
       <div style={{ position: 'fixed',  backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div  style={{ textAlign: message === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <Typography
              variant="body1"
              style={{
                padding: '8px',
                borderRadius: '8px',
                backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E6E6E6',
                display: 'inline-block',
              }}
            >
             {"bharada divyesh"}
            </Typography>
          </div>
      
      </div>
    
    </div> 
      <Chip label="bharada divyesh" sx={{bgcolor : "green",color : "white",width : '40%',display : "block"}} />
      <Chip label="bharada divyesh" sx={{bgcolor : "green",color : "white",width : '40%',}} />

      
      <Box sx={{ position: 'fixed', bottom: 0, left: 500,width : '40%', backgroundColor: '#fff'}}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>  
        <TextField
         
          placeholder='type your message'
          variant="outlined"
          fullWidth
          style={{ marginRight: 8 }}
        />
        <IconButton color="primary" onClick={handleClick}>
          <SendIcon />
        </IconButton>
      {/* </div>
    </div> */}
    </Box>

        </Box>
      {/* <Grid container justifyContent='end'>
        <Grid item>
         
           
        <InsertEmoticonIcon />
        <TextField id="input-with-sx"  placeholder='Type a Message'
       sx={{borderRadius : '10px',width : '50%'}} />
        <AttachmentIcon />
        <MicIcon />
        <SendIcon />
         
        </Grid>
        </Grid> */}

       
      </Box>
    </>
  )
}

export default ChatBar