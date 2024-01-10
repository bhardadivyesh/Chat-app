/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ClearIcon from '@mui/icons-material/Clear';
import  Avatar  from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import VideoChatIcon from '@mui/icons-material/VideoChat';
import CallIcon from '@mui/icons-material/Call';
import Button from "@mui/material/Button";
function Profile({data,isDisplay}) {
  const [display,setDisplay] = useState(false)
  const handleClick = () =>{
    setDisplay(false)
  }
  useEffect(()=>{
    setDisplay(isDisplay)
  },[data])
  return (
    <>
    <Box sx={{ width: "20%", height: "190%", border: 1, borderRadius: "10px", bgcolor: "blanchedalmond",display : display ? "" : "none"}} >
        <ClearIcon sx={{cursor : 'pointer'}} onClick={handleClick}/>
        
    <Avatar
        alt={data?.name}
        src={data?.image}
        sx={{ width: '50%', height: '15%', m:7 }}
      />
        <ListItem>
        <ListItemAvatar>
          
        </ListItemAvatar>
        <ListItemText primary={data?.name} secondary={data?.status} sx={{p:0}} />
      </ListItem>
      <Box sx={{display : 'flex'}}>
        <VideoChatIcon sx={{width : "70%"}}/>
        <CallIcon sx={{width : "10%"}}/>
      </Box>
     <Box>
       <ListItemText
          primary="Bio"
          secondary={
            <React.Fragment>
              {data?.bio}
            </React.Fragment>
          }
        />
         <ListItemText
          primary="Phone Number"
          secondary={
            <React.Fragment>
              {data?.number}
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