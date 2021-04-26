import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import User from './Users';
import { Button } from "@material-ui/core";
import GithubLogo from "./github.png";
import { Card } from '@material-ui/core';
import Userprofile from "./userprofile";

const Profile = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
  
    const onChangeHandler = e => {
      setUsername(e.target.value);
    };
  
    const submitHandler = async e => {
      e.preventDefault();
  
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const profileJson = await profile.json();
      console.log(profile);
  
      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      console.log(repoJson);
  
      if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
      }
    };


return (
    <div className="root" style={{display:"flex", flexDirection:"column"}}>
    <Card style={{ width: "50%", margin: "auto" , boxShadow : "none"}}>
    <img src={GithubLogo} style={{height:"60px", weight: "60px", float: "left", marginLeft: "18%"}}/>
    {" "}
    <h2 style = {{float:"left", marginLeft:"3%"}}>Github Profile Finder</h2>
    </Card>

    <Card style={{height: "300px", boxShadow: "none"}}> 
    <br/>
    <br/>
    <TextField id="outlined-basic" label="Search user" variant="outlined" value={username} onChange={onChangeHandler} style={{width:"40%"}}/>
    <Button style={{backgroundColor:"grey", color: "black"}} onClick={submitHandler}> Submit </Button>
    <br/>
    <br/>
    <User data={data} repositories={repositories} style={{overflow: "visible"}}/> 
    <Userprofile data={data} repositories={repositories} target="_blank"/>
    </Card>
    </div>
);

};

 export default Profile;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Standard" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }
