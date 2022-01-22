import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4
  };
const ModalComponent = (props) => {
    const handleClose = () => props.setOpen(false)
    return(
        <Modal
        keepMounted
        open={props.open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
      <Box sx={style}>
        <div style={{textAlign:"end"}}>
           <CloseIcon onClick={handleClose}/>
        </div>
        {props.children}
      </Box>
      </Modal>
    ) 
}

export default ModalComponent
