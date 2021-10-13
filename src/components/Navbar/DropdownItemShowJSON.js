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

const DropdownItemShowJSON = ({type}) => {

    const {state} = useLitestratContext()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let titleBtn;
    let descrBtn;
    let content;

    if(type === 'current'){
        titleBtn = "Mostrar datos de escena actual en JSON "
        descrBtn = "Visualiza los datos almacenados por el modelo en el escenario actual y si quieres guardalo en tu portapapeles!"
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        content = JSON.stringify(scene, null, 2)

    } else if (type === 'all') {
        titleBtn = "Mostrar todos los datos en JSON"
        descrBtn = "Visualiza todos los datos almacenados por el modelo y sus distintos escenarios, si quieres guardalo en tu portapapeles!"
        content = JSON.stringify(state, null, 2)
    }



    return (
        <Fragment>
            <div className="subItem"> 
                <a href="#" onClick={() => handleOpen()}> 
                    <span className="sceneName"> {titleBtn}   </span>
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
                        {titleBtn}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {descrBtn}
                        </Typography>
                        <Box sx={styles.jsonContainer}> 
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <p>{content} </p>
                            </Typography>

                            


                        </Box>

                        <Stack direction="row" spacing={2}>
                                <Button variant="outlined" onClick={() => navigator.clipboard.writeText(content)}>Copiar en portapeles</Button>
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