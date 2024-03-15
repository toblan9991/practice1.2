import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import ConfirmationModal from './ConfirmationModal';
import { useSelector, useDispatch } from 'react-redux'
import { editEmployee } from '../redux/employee/employeeSlice';
import { useNavigate } from 'react-router-dom';

const OffboardForm = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate();
    const { currentCompany } = useSelector(
        (state) => state.company
    );

    const [modalOpen, setModalOpen] = useState(false);

    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setModalOpen(true);
    };

    const handleConfirmOffboard = async () => {
        setModalOpen(false);
        console.log(formData)
        try {
            const url = `http://localhost:3000/api/v1/companies/${currentCompany._id}/employees/${params.id}`
            console.log('url', url)
            const response = await fetch(url, {
                method: "POST", //
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // transfer form into JSON
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log("Success:", jsonResponse);
                dispatch(editEmployee({
                    id: params.id,
                    newEmployeeData: jsonResponse
                }))
                navigate(-1)
            } else {
                console.error("Server responded with status:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Container>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {/* Offboarding Reason Select */}
        <FormControl fullWidth margin="normal">
            <InputLabel id="offboarding-reason-label">Offboarding Reason</InputLabel>
            <Select
                labelId="offboarding-reason-label"
                id="offboarding-reason"
                label="Offboarding Reason"
                onChange={(e) =>
                    setFormData({ ...formData, offBoardingReason: e.target.value })
                }
            >
                <MenuItem value="Career break">Career break</MenuItem>
                <MenuItem value="Resignation">Resignation</MenuItem>
                <MenuItem value="Retirement">Retirement</MenuItem>
                <MenuItem value="Relocation">Relocation</MenuItem>
            </Select>
        </FormControl>

        {/* Last Employment Day TextField */}
        <FormControl fullWidth margin="normal">
            <TextField
                required
                id="last-employment-day"
                label="Last Employment Day"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) =>
                    setFormData({ ...formData, lastEmploymentDay: e.target.value })
                }
            />
        </FormControl>

        {/* Last Working Day TextField */}
        <FormControl fullWidth margin="normal">
            <TextField
                required
                id="last-working-day"
                label="Last Working Day"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) =>
                    setFormData({ ...formData, lastWorkingDay: e.target.value })
                }
            />
        </FormControl>

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Continue
        </Button>

        {modalOpen && (
            <ConfirmationModal
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmOffboard}
            />
        )}
    </Box>
</Container>
    );
};

export default OffboardForm;
