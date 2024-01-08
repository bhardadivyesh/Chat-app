import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import  Box  from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
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
    <Box sx={{borderRadius : '10px',border : 1,width : '80%',height:'190%',overflow : "auto" }}>
     <Box sx={{textAlign : "right"}}>
    <Chip label="bharada divyesh" variant="outlined"/>
    </Box>
    <Box>
    <Chip label="bharada divyesh"/>
    </Box>
   
     
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