import React, {useState, useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography, MenuItem, FormControl,Select, Card } from '@mui/material';


const chartData = [
    {
        name: 'January', 
        onboarded: 10, 
        offboarded: 2 
    },
    {
        name: 'February',
        onboarded: 15,
        offboarded: 4
    },
    {
        name: 'March',
        onboarded: 20,
        offboarded: 3
    },
    {
        name: 'April',
        onboarded: 25,
        offboarded: 5
    },
    {
        name: 'May',
        onboarded: 30,
        offboarded: 6
    },
    {
        name: 'June',
        onboarded: 35,
        offboarded: 7
    },
    {
        name: 'July',
        onboarded: 40,
        offboarded: 8
    },
    

];




export default function EmployeeManagementChart({data, timePeriod}) {


  // const [chartData, setChartData] = useState([]);
  const [groupBy, setGroupBy] = useState('month');

  const handleChange = (event) => {
    setGroupBy(event.target.value);
  };  
  
/*   useEffect(() => {
    if (data && timePeriod) {    
      setChartData(data);
    }
  }, [data, timePeriod, groupBy]); */


  const onboardedData = chartData.map(dataPoint => dataPoint.onboarded);
  const offboardedData = chartData.map(dataPoint => dataPoint.offboarded);
  const months = chartData.map(dataPoint => dataPoint.name);

  return (
    <Card sx={{p:1}}>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Typography variant="h6" component="div" sx={{ mb: 2, flex:"2 0 70%" }}>
                Employee Management
            </Typography>
    
            <FormControl sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <Typography variant="body3" sx={{flex:"1"}}>
                    <p sx={{display:"flex"}}>Group <span>By:</span></p>
                </Typography>
                <Select sx={{width:"100px", height:"40px", flex:"1" }}
                    value={groupBy}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value="month">Month</MenuItem>
                <MenuItem value="quarter">Quarter</MenuItem>
                <MenuItem value="year">Year</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <BarChart
          series={[
            { name: 'Onboarded', data: onboardedData },
            { name: 'Offboarded', data: offboardedData },
          ]}
          height={290}
          xAxis={[{ data: months, scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          legendType="line"
          sx={{marginTop: 2, maxLines: 1, overflow: 'hidden', textOverflow: 'ellipsis'}}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 4 }}>
              <Box sx={{ width: 14, height: 14,  borderRadius:"50%",background: "#3DCC72", marginRight: 1 }} />
              <Typography variant="body2">Onboarded</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: 14, height: 14, borderRadius:"50%", background: '#FF7070', marginRight: 1 }} />
              <Typography variant="body2">Offboarded</Typography>
            </Box>
        </Box>
    </Card>
  );
}

