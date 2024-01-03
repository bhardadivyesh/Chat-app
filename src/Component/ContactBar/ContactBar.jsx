import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Avatar from '@mui/material/Avatar';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import ImageIcon from "@mui/icons-material/Image";
import contact from "../../../contact.json"

const ContactBar = () => {
  return (
    <>
   
    {/* main div */}
      <Box
        sx={{
          width: "100%",
          height: "190%",
          border: 1,
          borderRadius: "10px",
          bgcolor: "blanchedalmond",
          overflow : "auto"
        }}
      >
        {/* profile div */}
        <Box sx={{ width: 1 / 6 }}>
        
          {/* <Box sx={{position : "sticky"}}> */}
        <List
            sx={{
              width: "500%",
              maxWidth: 360,
              border: 1,
              borderRadius: "40px",
              bgcolor: "#544e4d",
              m: 3,
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="bharada divyesh" secondary="online" />
              <SettingsIcon />
            </ListItem>
          </List>
          {/* </Box> */}
            {/* search box */}
          <Box
            sx={{
              width: "500%",
              display: "flex",
              alignItems: "flex-end",
              border: 1,
              borderRadius: "16px",
              m: 2,
            }}
          >
            
            <TextField
              id="input-with-sx"
              placeholder="search"
              variant="standard"
              sx={{ width: 300 }}
            />
            <SearchIcon />
          </Box>
          {/* icons */}
          <Box sx={{ m: 5, display: "flex" }}>
            <ChatIcon />
            <GroupsIcon sx={{ width: "200px" }} />
            <AddIcCallIcon sx={{ m: 1 }} />
       
          </Box>
          {/* contact list */}
          {contact.map((items,index)=>{
            return(
              <> 
              {console.log(items.image)}
              {console.log(index)}

              <List sx={{ width: "600%" }}>
              <List sx={{ width: "100%", maxWidth: 360 }}>
                <ListItem alignItems="flex-start" sx={{ width: "100%" }}>
                  <ListItemAvatar>
                  <Avatar
                  alt={items.name}
                  src={items.image}
                />
                  </ListItemAvatar>
                  <ListItemText
                    primary={items.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                         
                        </Typography>
                        {items.message}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
              <hr />
            </List>
            </>

            )
          })}
        
          {/* down arror */}
          <Box>
            <KeyboardArrowDownIcon />
          </Box>
          {/* contact button */}
          <Box>
            <Button
              variant="outlined"
              sx={{
                border: 1,
                borderRadius: "20px",
                width: "600%",
                color: "black",
              }}
            >
              <PersonOutlineIcon />
              contact
            </Button>
          </Box>
        
        </Box>
      </Box>
    </>
  );
};

export default ContactBar;
