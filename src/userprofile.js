import React from "react";
import { Card,CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';

const Userprofile = ({ data, repositories }) => {
    return (
    <Card
        style={{textAlign:"justify"}}
    >
        <CardContent
            style={{ backgroundColor: "#e0e0e0", color: "black" , padding:"0px" }}
        >   
        <Grid container>
            <Grid item xs={12} style={{padding:"5%"}}>
                <h2>Repositories </h2>
            <Typography
                gutterBottom
                variant="body1"
                component="p"
                noWrap={true}
                style={{ color: "black" }}
            >
              {repositories.map(repo => (
                  <Card>
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                      <a href={repo.html_url} className="header" target="_blank">
                        {repo.name}
                      </a>
                    </div>
                 </Card>
              ))}
              </Typography>
              </Grid>
        </Grid>
    </CardContent>
      </Card>
    );
  };

export default Userprofile;