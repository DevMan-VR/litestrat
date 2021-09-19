import './ButtonWrapper.css'
import React, {useState, useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Datepicker from '../Datepicker';

import {CreatableExternalActor} from '../Creatable/CreatableExternalActor';
import { CreatableTactic } from '../Creatable/CreatableTactic';
import { CreatableObjective } from '../Creatable/CreatableObjective';

import {teamsDummy} from '../../../data/dummy'

const ButtonWrapper = ({addElement, children, type, element}) => {


    //const [isHover, setIsHover] = useState(false)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [until, setUntil] = useState(null)
    const [role, setRole] = useState(null)
    const [team, setTeam] = useState(null)
    const [organization, setOrganization] = useState(null)

    //const [isTactic,setIsTactic] = useState(false)
    //const [isObjective, setIsObjective] = useState(false)

    useEffect(() => {
      if(element){
        if(element.title){
          setTitle(element.title)
        }

        if(element.description){
          setDescription(element.description)
        }

        if(element.until){
          setUntil(element.until)
        }
      }
    }, [])


    let elementTitle
    let elementType
    let isTactic = false
    let isObjective = false
    let isExternalActor = false
    let descriptionLabel = "Descripción"
    let titleLabel = "Título"

    switch(type){
        case 'externalActor':
            elementTitle = "Nuevo Actor Externo"
            elementType = "Actor Externo"
            isExternalActor = true
            descriptionLabel = "¿Como influencia a la organización?"
            titleLabel = "¿Como se llama el Actor Externo?"
            break;
        case 'goal':
            elementTitle = "Nueva Meta"
            elementType = "Meta"
            break;
        case 'strategy':
            elementTitle = "Nueva Estrategia"
            elementType = "Estrategia"
            break;
        case 'tactic':
            elementTitle = "Nueva Táctica"
            elementType = "Táctica"
            isTactic = true

            break;
        case 'objective':
            elementTitle = "Nuevo Objetivo"
            elementType = "Objetivo"
            isObjective = true
            
    }

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
          setDescription(e.target.value)
      }

      const handleChangeUntil = (e) => {
          setUntil(e.target.value)
      }

      const handleSubmitExternalActor = (e) => {
        console.log("CREATING AN EXTERNAL ACTOR!")
        e.preventDefault()

        //Preparing the object
        var element = {
          title: title,
          influenceDescription: description, //influence description
          influencedOrganization: organization,
        }

        addElement(type, element)
        setOpen(false)

        setTitle('')
        setDescription('')
        setOrganization(null)
      }

      const handleSubmit = (e) => {
        console.log("CREATING AN ELEMENT!")
        e.preventDefault()

        //Preparing the object
        var element = {
          title: title,
          description: description,
          until: until,
        }

        if(isObjective){
          element.role = role
        } else if(isTactic){
          element.team = team
        }

        addElement(type, element)
        setOpen(false)

        setTitle('')
        setDescription('')
        setUntil(null)
      }

      let definitiveSubmit
      if(isExternalActor) definitiveSubmit = handleSubmitExternalActor
      else definitiveSubmit = handleSubmit



      const renderCreatable = () => {

        if(!isTactic && !isObjective && !isExternalActor) {
          return (<Fragment/>)
        }

        var options
        var teams = [...teamsDummy]

        if(isTactic){
           //data dummy, aqui se deberia hacer un fetch para obtener la data acerca de los equipos de la organizacion

          options = teams.map((t) => {
            return {
              label: t.title,
              value: t.id
            }
          })

          return (<CreatableTactic options={options} setData={setTeam}/>)

        } else if (isObjective){
          console.log(teams) 
          const {roles} = teams[0] //EQUIPO SELECCIONADO
          console.log("ROLES:  ",roles)
          options = roles.map((r) => {
            return {
              label: r.title,
              value: r.id
            }
          })

          return (<CreatableObjective options={options} setData={setRole}/>)

        } else if(isExternalActor){
          //No options at first...

          return (<CreatableExternalActor  setData={setOrganization} />)


        }

        
      }

      const renderUntil = () => {
        if(isExternalActor){
          return <Fragment />
        } else {
          return <Datepicker setUntil={setUntil} />
        }
      }

    return(

    <div>
        <button
        onClick={handleOpen}>{children}</button>


        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"> {elementTitle} </h2>
            <form className={classes.form} noValidate autoComplete="off">
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

                <FormControl className={classes.formField}>
                    <TextField
                        id="descriptionID"
                        label={descriptionLabel}
                        multiline
                        rows={4}
                        value={description}
                        variant="outlined"
                        onChange={handleChangeDescription}
                    />
                </FormControl>

                <div>
                    {renderUntil()}
                    
                    
                </div>

                <div className={classes.creatable}>

                {renderCreatable()}

                </div>


                


                <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
                  <button className={classes.addButton} type="button" style={{border: 'none', cursor: 'pointer'}} onClick={definitiveSubmit}>
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


const useStyles = makeStyles((theme) => ({
    creatable: {
      marginTop: '1em'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
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
      fontWeight: '700'
    }
    
  }));

export default ButtonWrapper