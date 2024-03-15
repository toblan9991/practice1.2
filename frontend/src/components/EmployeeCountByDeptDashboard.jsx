import React , {useState , useEffect} from 'react';
import { Box, Typography, Slider, Grid, Card } from '@mui/material';





const EmployeeCountByDeptDashboard = ({departmentCount}) => {

  const [emp, setEmp] = useState([]);
  
  useEffect(() => {
    setEmp(departmentCount);
  }, [departmentCount])

/* const departmentValues = [
  { name: 'Carpet Cleaning', value:emp, color: '#F44336' },
  { name: 'Residential Cleaning', value:emp, color: '#2196F3' },
  { name: 'Floor Restoration', value:emp, color: '#4CAF50' },
  { name: 'Commercial Cleaning', value:emp, color: '#FFC107' },
  { name: 'Window Cleaning', value:emp, color: '#9C27B0' },
]; */

/* function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} */

const departmentValues = [
  { name : departmentCount[0].department, value: departmentCount[0].count, color: '#F44336' },
  { name : departmentCount[1].department, value: departmentCount[1].count, color: '#2196F3' },
  { name : departmentCount[2].department, value: departmentCount[2].count, color: '#4CAF50' },
  { name : departmentCount[3].department, value: departmentCount[3].count, color: '#FFC107' },
  { name : departmentCount[4].department, value: departmentCount[4].count, color: '#9C27B0'}
]

  return (
    <Card>
      <Typography sx={{ textAlign: 'left', padding:"1rem" }} variant='h6' component="div">Employee Count By Department</Typography>
      <Box sx={{padding:"1rem"}}>
        {departmentValues.map(({ name, value, color }) => (
          <Box sx={{display:"flex", gap:"1rem", justifyContent:"center", alignItems:"center", width:"70%", margin:"auto"}} key={name} >
            <Box sx={{textAlign:"right", flex:"1 0 30%"}}>
              <Typography gutterBottom sx={{textAlign:"right"}}>{name}</Typography>
            </Box>
            <Box sx={{flex:"1 0 60%"}}>
              <Slider 
                value={value}
                sx={{
                  color: "#F5F5F5",
                  height: "10px",
                  '& .MuiSlider-thumb': {
                    display: 'none', 
                    color: color,
                  },
                  '& .MuiSlider-track': {
                    color: color, 
                  },
                  /* '& .MuiSlider-rail': {
                    color: color
                  }, */
                }}
                valueLabelDisplay="off"
                aria-label={`${name} slider`}
              />
            </Box>
            <Box sx={{flex:"1 0 10%"}}>
              <Typography>{value}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default EmployeeCountByDeptDashboard;
