import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changeMobile, changeName, new_contact } from '../actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function NewContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = useSelector(state => state.newContact)
  const dispatch = useDispatch()

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={handleOpen}
      ></SpeedDial>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  >
            <h2>Add Contact</h2>
            <TextField id="filled-basic" label="Full Name" variant="filled" value={data.name} onChange={e => dispatch(changeName(e.target.value))}/><br/><br/>
            <TextField id="filled-basic" label="Mobile Number" variant="filled" value={data.mobile} onChange={e => dispatch(changeMobile(e.target.value))}/><br/><br/>
            <TextField id="filled-basic" label="Email ID" variant="filled" value={data.email} onChange={e => dispatch(changeEmail(e.target.value))}/><br/><br/>
            <Button variant="contained" onClick={()=> {dispatch(new_contact(data)) 
                handleClose()
                }}>Save Contact</Button>
        </Box>
      </Modal>
    </div>
  );
}