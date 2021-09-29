import React, {useState, useEffect, Fragment} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import './ExternalActor.css'

const ExternalActorWrapper = ({externalActor,editElement, selectElement, children}) => {
 

    const [isHover, setIsHover] = useState(true)
    
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState(null)
    const [influenceDescription, setInfluenceDescription] = useState(null)
    const [influencedOrganization, setInfluencedOrganization] = useState(null)

    


    useEffect(() => {
      if(externalActor){
        if(externalActor.title){
          setTitle(externalActor.title)
        }

        if(externalActor.influenceDescription){
            setInfluenceDescription(externalActor.description)
        }

        if(externalActor.influencedOrganization){
            setInfluencedOrganization(externalActor.influencedOrganization)
        }


      }
    }, [])


    let elementTitle = "Nuevo Actor Externo"
    let elementType = "Actor Externo"
    let descriptionLabel = "¿Como influencia a tu organización?"
    let titleLabel = "¿Como se llama el Actor Externo?"
    let firstTimeExternalActor = "Ingresa el nombre de tu organización"



    const handleOpen = () => {
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    
      const handleChangeTitle = (e) => {
          setTitle(e.target.value);
      }

      const handleChangeDescription = (e) => {
        setInfluenceDescription(e.target.value)
      }

      const handleChangeOrgname = (e) => {
        console.log("Orgname change is: ", e.target.value)
        setInfluencedOrganization(e.target.value)
      }

      const handleSubmit = (e) => {
        console.log("EDITING AN EXTERNAL ACTOR!")
        e.preventDefault()

        //Preparing the object
        var externalActor = {
          title: title,
          influenceDescription: influenceDescription, //influence description
          influencedOrganization: influencedOrganization,
        }

        editElement(externalActor, "externalActor")
        setOpen(false)

        setTitle('')
        setInfluenceDescription('')
        setInfluencedOrganization(null)
      }


      const renderOrgname = () => {

          return (
            <FormControl style={{width: '100%'}} >
            <TextField
              id="orgnameID"
              label={firstTimeExternalActor}
              value={influencedOrganization}
              variant="outlined"
              onChange={handleChangeOrgname}
            />
            
            </FormControl>
          )
      }

      
      const renderButton = () => {
        var btn;
        if(externalActor.isSelected){
          btn = (
              <button
                onClick={handleOpen}
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                style={{backgroundColor: 'papayawhip', width: '300px', heigth: '300px'}}
              >
              
              {children}
              
            </button>
          )
        } else {

          <button
            onClick={selectElement}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            style={{backgroundColor: 'papayawhip', width: '300px', heigth: '300px'}}
          >
            
            {children}
            
          </button>
        }
      }
  


    return(

    <div className="ExternalActorWrapperContainer" >

        <button
                onClick={selectElement}
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                style={{backgroundColor: 'papayawhip', width: '300px', heigth: '300px'}}
              >
              
              {children}
              
            </button>

      


        

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        style={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={styles.paper} className="paper">
            <h2 id="transition-modal-title"> {elementTitle} </h2>
            <form className="form" style={styles.form} noValidate autoComplete="off">
                <FormControl >
                    <TextField
                            id="descriptionID"
                            label={titleLabel}
                            multiline
                            rows={1}
                            value={title}
                            variant="outlined"
                            onChange={handleChangeTitle}
                        />
                    
                </FormControl>


                <FormControl style={styles.formField} className="FormField">
                    <TextField
                        id="descriptionID"
                        label={descriptionLabel}
                        multiline
                        rows={4}
                        value={influenceDescription}
                        variant="outlined"
                        onChange={handleChangeDescription}
                    />
                </FormControl>

                <div>
                  {renderOrgname()}  
                </div>


                <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
                  <button style={styles.addButton} className="addButton" type="button" onClick={handleSubmit}>
                    Agregar {elementType}
                  </button>

                </div>
                

                
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
    )
}


const styles = {

    creatable: {
      marginTop: '1em'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'whitesmoke',
      boxShadow: '2px 2px 3px',
      padding: '3em',
      width: 500,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '2em'

    },
    form : {
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        width: 300
    },
    formControlTitle: {
        width: 400
    },

    formField: {
        marginTop: '1em'
    },
  
    addButton: {
      width: 300,
      height: 50,
      borderRadius: '2em',
      fontSize: '1.2em',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#00b289',
      color:'whitesmoke'
    }
    
  };

export default ExternalActorWrapper