import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {List,ListItem,ListItemAvatar,ListItemText} from "@mui/material";
function ChatBar(selectedContact) {
  const handleNavClick = () =>{
    console.log("nav click work");
  }
 
  return (
    <>
   
          <Box
        sx={{
          borderRadius: "10px",
          border: 1,
          width: "80%",
          height: "190%",
          overflow: "auto",
        }}
      >
        {/* navbar */}
        <Box onClick={handleNavClick} sx={{cursor : 'pointer'}}>
        <List sx={{ width: '200%', maxWidth: '100%', bgcolor: '#1c7534' }}>
          <ListItem>
            <ListItemAvatar>
            <Avatar alt={selectedContact.selectdata?.name} src="/static/images/avatar/1.jpg"  />
            </ListItemAvatar>
            <ListItemText primary={selectedContact.selectdata?.name} secondary={selectedContact.selectdata?.lastseen} sx={{color : "white"}} />
          </ListItem>
        </List>
      </Box>
        {/* navbar over*/}
       
        <Box sx={{ textAlign: "right" }}>
        {selectedContact.selectdata?.message.map((items,index)=>{
          return(
            <div key={index}>
            <Chip label={items} variant="outlined" />
          </div>
          )
    })}
        </Box>
        <Box>
          <Chip label="bharada divyesh" />
        </Box>

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 500,
            width: "40%",
            backgroundColor: "#fff",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              placeholder="type your message"
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
  );
}

export default ChatBar;
