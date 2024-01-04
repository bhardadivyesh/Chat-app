import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import  Box  from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
function ChatBar() {
  return (
    <>
    <Box sx={{borderRadius : '10px',border : 1,width : '80%',height:'190%',overflow : "auto" }}>
      {/* send message box */}
     <Box sx={{textAlign : "right",display : 'grid',justifyContent : "end"}}>
    <Chip label="bharada divyesh" variant="outlined"/>
    <Chip label="bharada divyesh" variant="outlined"/>
    <Chip label="bharada divyesh" variant="outlined"/>
    <Chip label="bharada divyesh" variant="outlined"/>
    </Box>
    {/* receive message */}
    <Box sx={{display : 'grid',justifyContent : 'start'}}>
    <Chip label="bharada divyesh" />
    <Chip label="bharada divyesh" variant="outlined"/>
    <Chip label="bharada divyesh" variant="outlined"/>
    <Chip label="bharada divyesh" variant="outlined"/>
    </Box>
      <Box sx={{ position: 'fixed', bottom: 0, left: 500,width : '40%', backgroundColor: '#fff'}}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>  
        <TextField
         
          placeholder='type your message'
          variant="outlined"
          fullWidth
          style={{ marginRight: 8 }}
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
    </Box>
        </Box>
      </Box>
    </>
  )
}

export default ChatBar