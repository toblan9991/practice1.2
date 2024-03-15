import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // employees: [
  //   { id: 1, name: 'Glover', role: 'Lounge Inspector', manager: 'Reese', department: 'Lounge', status: 'Active' },
  //   { id: 2, name: 'Troy', role: 'Office Inspector', manager: 'Kante', department: 'Floor', status: 'Active' },
  // ],
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    onOffboardInitiated: (state, action) => {
        const {employeeName} = action.payload

        state.employees = state.employees.map(employee => employee.name === employeeName ? { ...employee, status: 'Inactive' } : employee);
    },
    addEmployees: (state, action) => {
        state.employees = action.payload
    },
    editEmployee:(state, action) => {
      const {
        id,
        newEmployeeData
      } = action.payload

      state.employees = state.employees.map((employee) => {
          if(employee._id === Number(id)) {
            return {...employee, ...newEmployeeData}
          }
          return employee
      })
    }
  }
})

export const {
    onOffboardInitiated,
    editEmployee,
    addEmployees
} = employeeSlice.actions

export const selectEmployee = (state) => state.employee.employees

export default employeeSlice.reducer