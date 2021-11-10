import React, { useState, Fragment } from 'react'
import '../Litestrat/Litestrat.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TextareaAutosize } from '@mui/material';

import { useLitestratContext } from '../Litestrat/LitestratContext';
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext';

const DropdownItemLoadJSON = ({type}) => {

    const {state} = useLitestratContext()
    const {loadJsonToActualScene} = useLitestratCrudContext()

    const [open, setOpen] = useState(false)
    const [json, setJson] = useState('')

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let titleBtn;
    let descrBtn;

    titleBtn = "Cargar JSON Litestrat en escena actual"
    descrBtn = "Sobre escribe la escena actual cargando un archivo JSON de Litestrat"

    const onChange = (e) => {
        setJson(e.target.value)
    }

    const onLoadBtn = () => {
        loadJsonToActualScene(json)
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
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Empty"
                            minRows={12}
                            value={json}
                            style={{ width: '100%', height:'100%' }}
                            onChange={(e) => onChange(e)}
                            
                        />

                            


                        </Box>

                        <Stack direction="row" spacing={2}>
                                <Button variant="outlined" onClick={onLoadBtn}>Cargar</Button>
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
        color:'whitesmoke',
        overflow: 'hidden',
        overflowY: 'scroll',
    }
    
  };

export default DropdownItemLoadJSON