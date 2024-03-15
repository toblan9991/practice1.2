import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';


const DashboardSingleTopCard = ({ title, year, number, percentage,sx, isFirstCard}) => {

    const theme = useTheme();

    let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Box sx={{flex:isMobile ? "1 0 100%" : "1 0 22%"}}>
            <Card sx={{...sx}}>
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography color="text.secondary" sx={{color: isFirstCard? 'white':'#84858C'}}>
                        {year}
                    </Typography>
                    <Box sx={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
                        <Typography  component="h2" sx={{borderRadius:"10px", padding:"3px 5px", backgroundColor: isFirstCard? "#FFFFFF33" : "rgb(244, 245, 247)"}}>
                            {percentage}
                        </Typography>
                        <Typography color="text.secondary" variant="h3" sx={{color: isFirstCard ? 'white' : 'text.secondary'}}>
                            {number}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
};


export default DashboardSingleTopCard;