import React, {useEffect, useCallback} from "react";
import useFetch from "../hooks/useFetch";
import { Box, Typography, Grid, Button , useMediaQuery, useTheme} from "@mui/material";
import { useSelector } from "react-redux";
import DashboardFourCards from "../components/DashboardFourCards";
import NewlyJoinedEmployeeList from "../components/NewlyJoinedEmployeeList";
import EmployeeManagementChart from "../components/EmployeeManagementChart";
import EmployeeCountByDeptDashboard from "../components/EmployeeCountByDeptDashboard";
import EmployeeTypeDashboardCard from "../components/EmployeeTypeDashboardCard";
import TeamDirectoryDashboardCard from "../components/TeamDirectoryDashboardCard";
// import { useTheme, useMediaQuery } from "@mui/system";

/* const companyEmployeeCount = 57;
const contractorCount = 23; */

const Dashboard = () => {


  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { currentCompany } = useSelector((state) => state.company);
  console.log("currentCompany", currentCompany);
  /* const {companyID} = currentCompany || {}; // Make sure currentCompany is not undefined */
  // const companyID = currentCompany ? currentCompany['65e7806186f16b4f825966c3'] : undefined;
const companyID = currentCompany ? currentCompany._id : undefined;

  // console.log("hello", companyID);
 
  const { data: employees, isLoading, error, fetchData } = useFetch(`/api/v1/companies/${companyID}/employees`);

  const initialData = useCallback(async () => {
        await fetchData();
  },[]);
  useEffect(() => {
      initialData();
  }, [initialData]);
  
  // useEffect(() => {
  //   console.log("heelo",employees); 
  // }, [employees]);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!employees) return <div>No employee data available</div>;

  // total employee count
  const totalEmployeeCount = employees.length;
  // filtering the data to get the count of company employees that are active
  const companyEmployeeCount = employees.filter((employee) => 
  (employee.jobType === "employee" || employee.jobType === "contractor") && employee.status === "active").length;
  // filtering the data to get count of offboarded employees
  const offboardedEmployeeCount = employees.filter((employee) => employee.status === "inactive").length;
  // filtering the data to get the new employee count
  const newEmployeeCount = employees.filter((employee) => employee.startDate >= new Date().toISOString().split("T")[0]).length;
  //filtering the data to get the department wise employee count
  const departmentWiseEmployeeCount = employees.reduce((acc, employee) => {
    const departmentName = employee.department.toLowerCase();
    if (acc[departmentName]) {
      acc[departmentName]++;
    } else {
      acc[departmentName] = 1;
    }
    return acc;
  }, {});

  // newly joined employee list with name and department
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const newlyJoinedEmployeeList = Array.isArray(employees) ? employees
    .filter(employee => {
      const employeeStartDate = new Date(employee.startDate);
      return employeeStartDate >= thirtyDaysAgo;
    })
    .map(employee => ({
      name: employee.name,
      department: employee.department,
      selectedMonth: employee.startDate.split(',')[1]
    })) : [];
  

  // offboard and onboard employee count based on start and end date to show in the chart
 
  const isDateWithinLastMonths = (date, months) => {
    const pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth() - months);
    return new Date(date) >= pastDate;
  };

  // Initialize counts
  const onboardOffboardCounts = {
    monthly: { onboard: 0, offboard: 0 },
    quarterly: { onboard: 0, offboard: 0 },
    yearly: { onboard: 0, offboard: 0 },
  };

  // Aggregate counts
  for (const employee of employees) {
    const onboardedRecently = isDateWithinLastMonths(employee.startDate, 1);
    const offboardedRecently = employee.status === 'inactive' && isDateWithinLastMonths(employee.lastWorkingDay, 1);

    // Monthly counts
    if (onboardedRecently) {
      onboardOffboardCounts.monthly.onboard++;
    }
    if (offboardedRecently) {
      onboardOffboardCounts.monthly.offboard++;
    }

    // Quarterly counts
    if (isDateWithinLastMonths(employee.startDate, 3)) {
      onboardOffboardCounts.quarterly.onboard++;
    }
    if (employee.status === 'inactive' && isDateWithinLastMonths(employee.lastWorkingDay, 3)) {
      onboardOffboardCounts.quarterly.offboard++;
    }

    // Yearly counts
    if (isDateWithinLastMonths(employee.startDate, 12)) {
      onboardOffboardCounts.yearly.onboard++;
    }
    if (employee.status === 'inactive' && isDateWithinLastMonths(employee.lastWorkingDay, 12)) {
      onboardOffboardCounts.yearly.offboard++;
    }
  }


  // department count based on the department available in the data
  const departmentCount = Object.keys(departmentWiseEmployeeCount).map((key) => {
    const departmentName = key.charAt(0).toUpperCase() + key.slice(1);
    return { department: departmentName, count: departmentWiseEmployeeCount[key] };
  })

  // employee type count based on the jobType available in the data
  const employeeTypeCount = employees.reduce(
    (acc, employee) => {
      if (employee.jobType === "employee") {
        acc.companyEmployee++;
      } else {
        acc.contractor++;
      }
      return acc;
    },
    { companyEmployee: 0, contractor: 0 }
  );

  // images for the team directory 3 images in array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const shuffledEmployees = shuffleArray([...employees]);
  const teamDirectory = shuffledEmployees.slice(0, 3).map((employee) => {
    return {
      image: employee.image
    };
  });

  

  return (
    <Box sx={{ p: 3, backgroundColor:"rgb(244, 245, 247)"}}>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box>
          <Typography variant="h4">
            Dashboard
          </Typography>
          <Typography variant="subtitle1" sx={{mb:1}}>
          Access a consolidated overview of your company's employee data effortlessly
          </Typography>
        </Box>
        <Button variant="contained" sx={{position:"sticky", bottom: isMobile ? "4rem" : "90%" }}>Export Report</Button>
      </Box>
      <DashboardFourCards 
        companyEmployeeCount={companyEmployeeCount}
        newEmployeeCount={newEmployeeCount}
        offboardedEmployeeCount={offboardedEmployeeCount}
        departmentWiseEmployeeCount={departmentWiseEmployeeCount}
        totalEmployeeCount={totalEmployeeCount}
      />

      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={4}>
          <NewlyJoinedEmployeeList
            newlyJoinedEmployeeList={newlyJoinedEmployeeList}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <EmployeeManagementChart 
            data={onboardOffboardCounts}
            timePeriod={"Month"} 
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 , alignItems:"stretch" }}>
        <Grid item xs={12} md={6} sx={{minHeight:"100%", flex:"1 0 40%"}}>
          <EmployeeCountByDeptDashboard 
            departmentCount={departmentCount}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ flex: "2 0 40%" ,minHeight:"100%"}}>
          <EmployeeTypeDashboardCard
            employeeTypeCount={employeeTypeCount}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{minHeight:"100%"}}>
          <TeamDirectoryDashboardCard 
            teamDirectory={teamDirectory}
          />
        </Grid>
      </Grid>
    </Box>
  ) ; (
    <Navigate to="/login" />
  );
};

export default Dashboard;
