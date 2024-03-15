import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const ConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Are you sure you want to offboard this employee?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={onConfirm} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
