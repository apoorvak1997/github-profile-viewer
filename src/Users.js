import React from "react";
import { Card, Grid , Typography , CardActionArea, CardContent } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Userprofile from './userprofile';


const Users = ({ data , repositories }) => {
  return (
      <><Card>
          {!data.avatar_url ? (
              " "
          ) : (
            <Grid container spacing={2} style={{ paddingLeft:"2%",paddingRight:"2%"}}>
                <Grid item xs ={6}>
                    <Card
                        style={{textAlign:"justify"}}
                    >
                        <CardActionArea>

                        </CardActionArea>
                        <CardContent
                            style={{ backgroundColor: "#e0e0e0", color: "black" , padding:"0px" }}
                        >   
                        <Grid container>
                            <Grid item xs={3}>
                            <img src={data.avatar_url} style={{width:"100%" , height:"100%"}}/>
                            </Grid>
                            <Grid item xs={9} style={{padding:"5%"}}>
                            <Typography
                                gutterBottom
                                variant="body1"
                                component="p"
                                noWrap={true}
                                style={{ color: "black" }}
                            >
                                username : {data.login}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{ color: "black" }}
                            >
                                worked-at : {data.company}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{ color: "black" }}
                            >
                               Bio: {data.bio}
                            </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    </Grid>
                    
        </Grid>  
          )}
          <Card>
          
            </Card>
          </Card></>
  )

};

export default Users;

