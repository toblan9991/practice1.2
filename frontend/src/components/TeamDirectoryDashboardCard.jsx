import React, { useState,useEffect } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const teamImage = [
    {
        image: "https://picsum.photos/200/300",
    },
    {
        image: "https://picsum.photos/200/300?12",
    },
    {
        image: "https://picsum.photos/200/300",
    },
];

const TeamDirectoryDashboardCard = ({teamDirectory}) => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        setTeam(teamDirectory);
    }, [teamDirectory]);


    return (
        <Box>
            <Card sx={{background: "linear-gradient(158.41deg, #FF9A6E -10.4%, #FF524D 111.55%)", color:"white", paddingTop:"0.52rem"}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:"1rem 10px"}}>
                    {teamDirectory.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt={`team member ${index}`}
                            style={{
                                borderRadius: '50%',
                                width: '80px',
                                height: '80px',
                                border: '2px solid white',
                                objectFit: 'cover',
                                transform: index === 1 ? 'scale(1.3)' : 'none',
                                zIndex: index === 1 ? '1' : '0',
                            }}
                        />
                    ))}
                </Box>
                
                <CardContent>
                    <Typography variant="h6" sx={{ textAlign: "center" , margin:"0", color:"white"}} >
                        Team Directory
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ textAlign: "center", "paddingBottom":"0" , color:"white"}}>
                        Manage your team with ease.
                    </Typography>
                    <Link to="/team-directory" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" sx={{ display: "block", margin: "auto", marginTop: "1rem",borderColor: 'white', color:"white" }}>Manage Now</Button>
                    </Link>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TeamDirectoryDashboardCard;
