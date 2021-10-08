import React, { useState, Fragment } from 'react'
import '../Litestrat/Litestrat.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useLitestratContext } from '../Litestrat/LitestratContext';

const DropdownItemShowJSON = () => {

    const {state} = useLitestratContext()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <div className="subItem"> 
                <a href="#" onClick={() => handleOpen()}> 
                    <span className="sceneName">  Mostrar Datos en JSON </span>
                </a>
            </div>

            <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={styles.container}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                        Mostrar Datos en JSON
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Visualiza todos los datos almacenados por el modelo y sus distintos escenarios, si quieres guardalo en tu portapapeles!
                        </Typography>
                        <Box sx={styles.jsonContainer}> 
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <p>{JSON.stringify(state, null, 2)} </p>
                            </Typography>

                            


                        </Box>

                        <Stack direction="row" spacing={2}>
                                <Button variant="outlined" onClick={() => navigator.clipboard.writeText(JSON.stringify(state, null, 2))}>Copiar en portapeles</Button>
                                <Button variant="outlined" href="#outlined-buttons" onClick={handleClose}>Cerrar</Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    </Fragment>
    )

}


const styles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
        height: '70vh',
        borderRadius: '2em',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    jsonContainer: {
        marginTop: '2em',
        height: '80%',
        backgroundColor: '#23232e',
        color:'whitesmoke',
        overflow: 'hidden',
        overflowY: 'scroll',
    }
    
  };

export default DropdownItemShowJSON