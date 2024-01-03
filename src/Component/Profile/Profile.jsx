import React from "react";
import Box from "@mui/material/Box";
import ClearIcon from '@mui/icons-material/Clear';
import  Avatar  from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import VideoChatIcon from '@mui/icons-material/VideoChat';
import CallIcon from '@mui/icons-material/Call';
import Button from "@mui/material/Button";
function Profile() {
  return (
    <>
    <Box sx={{ width: "20%", height: "190%", border: 1, borderRadius: "10px", bgcolor: "blanchedalmond", }} >
        <ClearIcon />
        
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: '50%', height: '15%', m:7 }}
      />
        <ListItem>
        <ListItemAvatar>
          
        </ListItemAvatar>
        <ListItemText primary="Bharada divyesh" secondary="online" sx={{p:0}} />
      </ListItem>
      <Box sx={{display : 'flex'}}>
        <VideoChatIcon sx={{width : "70%"}}/>
        <CallIcon sx={{width : "10%"}}/>
      </Box>
     <Box>
       <ListItemText
    //    sx={{alignItems : "center"}}
          primary="Bio"
          secondary={
            <React.Fragment>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
         <ListItemText
    //    sx={{alignItems : "center"}}
          primary="Phone Number"
          secondary={
            <React.Fragment>
              {9327511543}
            </React.Fragment>
          }
        />
         <ListItemText
    //    sx={{alignItems : "center"}}
          primary="UserName"
          secondary={
            <React.Fragment>
              {"Bharada Divyesh"}
            </React.Fragment>
          }
        />
        </Box>
        <Box>
            <Button
              variant="outlined"
              sx={{
                border: 1,
                borderRadius: "20px",
                width: "100%",
                color: "black",
              }}
            >
              edit contact
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: 1,
                borderRadius: "20px",
                width: "100%",
                color: "black",
              }}
            >
              block
            </Button>
          </Box>
      </Box>
  </>
  )
}

export default Profile