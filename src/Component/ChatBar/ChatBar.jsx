/* eslint-disable react/prop-types */
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {List,ListItem,ListItemAvatar,ListItemText} from "@mui/material";

function ChatBar({selectedContact,onNavClick}) {
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
        <Box sx={{cursor : 'pointer'}}>
        <List sx={{ width: '200%', maxWidth: '100%', bgcolor: '#1c7534' }}  onClick={onNavClick(true)}>
          <ListItem  >
            <ListItemAvatar>
            <Avatar alt={selectedContact?.name} src={selectedContact?.image}  />
            </ListItemAvatar>
            <ListItemText primary={selectedContact?.name} secondary={selectedContact?.lastseen} sx={{color : "white"}} />
          </ListItem>
        </List>
      </Box>
        {/* navbar over*/}
       {selectedContact?.message.map((items,index)=>{
        return(
          <>
          {console.log(index)}
           <Box sx={{ textAlign: "right"}}>
           {items.sender &&  <Chip label={items?.sender} variant="outlined" />}
           </Box>
            <Box>
            {items.receiver &&  <Chip label={items?.receiver} />}
            </Box>
          </>
        )
       })}
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
    </>
  );
}

export default ChatBar;
