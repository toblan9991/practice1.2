import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NewlyJoinedEmployeeCard from "./NewlyJoinedEmployeeCard";
import { useMediaQuery, useTheme } from '@mui/system';

/* const employeeData = [
    {
        id: 1,
        name: "Martin Geidt",
        department: "Carpet Cleaning",
        image: "https://picum.photos.jpg", 
        joinedDate:"January",
        moreAction: () => {
          console.log('More details for Martin Geidt');
        }
    },
    {
        id: 2,
        name: "John Doe",
        department: "Floor Cleaning",
        image: "https://picum.photos.jpg", 
        joinedDate:"February",
        moreAction: () => {
          console.log('More details for John Doe');
        }
    },
    {
        id: 3,
        name: "Jane Doe",
        department: "Window Cleaning",
        image: "https://picum.photos.jpg", 
        joinedDate:"January",
        moreAction: () => {
          console.log('More details for Jane Doe');
        }
    },
    {
        id: 4,
        name: "John Smith",
        department: "Carpet Cleaning",
        image: "https://picum.photos.jpg", 
        joinedDate:"January",
        moreAction: () => {
          console.log('More details for John Smith');
        }
    }
]; */


const NewlyJoinedEmployeeList = ({newlyJoinedEmployeeList}) => {

    const [selectedMonth, setSelectedMonth] = useState('');

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    }

    const theme = useTheme();

    let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{ maxWidth: isMobile ? "100%" : 360,  margin: isMobile ? 'none' : 'auto' ,maxHeight: '400px', overflowY: 'auto','&::-webkit-scrollbar': {
          width: '10px', 
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#E6E6E6', 
          borderRadius: '10px', 
          border: '3px solid #E6E6E6', 
          width: '6px'
        }
        
        }}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", padding:"0 1rem ", position:"sticky", top:0, backgroundColor:"white", zIndex:"2"}}>
                <Typography variant="h6" component="div" sx={{flex:"2 0 60%"}}>
                    Newly Joined
                </Typography>
                <FormControl sx={{width:"100%", overflow:"hidden"}}>
                  <InputLabel id="month-select-label" sx={{fontSize:"12px", position:"relative", top:"9.5px", right:"3rem"}}>Month</InputLabel>
                  <Select
                    // labelId="month-select-label"
                    id="month-select"
                    value={selectedMonth}
                    // placeholder='Month'
                    onChange={handleMonthChange}
                    sx={{width:"80px", height:"30px"}}>
                    <MenuItem value="">
                      Month
                    </MenuItem>
                    <MenuItem value={'January'}>January</MenuItem>
                    <MenuItem value={'February'}>February</MenuItem>
                    <MenuItem value={'March'}>March</MenuItem>
                    <MenuItem value={'April'}>April</MenuItem>
                    <MenuItem value={'May'}>May</MenuItem>
                    <MenuItem value={'June'}>June</MenuItem>
                    <MenuItem value={'July'}>July</MenuItem>
                    <MenuItem value={'August'}>August</MenuItem>
                    <MenuItem value={'September'}>September</MenuItem>
                    <MenuItem value={'October'}>October</MenuItem>
                    <MenuItem value={'November'}>November</MenuItem>
                    <MenuItem value={'December'}>December</MenuItem>
                  </Select>
                </FormControl>
            </Box>

      {/* Filtered employee list based on the selected month */}
        <Box sx={{ mt: 2 }}>
        {newlyJoinedEmployeeList
          .filter(employee => {
            console.log(employee);
            return selectedMonth === '' || employee.joinedDate.includes(selectedMonth);
          })
          .map((employee) => (
            <NewlyJoinedEmployeeCard
              key={employee.id}
              name={employee.name}
              department={<><b>Dept:</b> {employee.department}</>}
              image={employee.image}
              moreAction={employee.moreAction}
            />
          ))}
        </Box>
   
    </Card>
    );
};

export default NewlyJoinedEmployeeList;