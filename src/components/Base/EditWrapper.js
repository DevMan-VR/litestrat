import React, {useState, useEffect, Fragment} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { FormControlLabel } from '@material-ui/core';
import { Switch } from '@material-ui/core';
import Datepicker from '../Helpers/Datepicker';

import { CreatableObjective } from '../Helpers/Creatable/CreatableObjective';
import { CreatableTactic } from '../Helpers/Creatable/CreatableTactic';
import { CreatableExternalInfluence } from '../Helpers/Creatable/CreatableExternalInfluence';

import './EditWrapper.css'

const EditWrapper = ({options=[], element,editElement, children, type}) => {

    console.log("En EditWrapper, el "+ type +" es: ", element)

    const initOrg = () => {
        let value = "some"
        switch(type){
            case 'externalActor':
                if(element && element.influencedOrganization){
                    value = element.influencedOrganization
                }
        }

        return value
    }
 

    const [isHover, setIsHover] = useState(true)
    const [open, setOpen] = React.useState(false);

    //Base Attr
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [until, setUntil] = useState(null)

    const [organization, setOrganization] = useState(null) //External Actor & External Influence
    const [team, setTeam] = useState(null) //Tactics
    const [role, setRole] = useState(null) //Objectives
    const [tactic, setTactic] = useState(null) //External Influence
    const [isInfluencer, setIsInfluencer] = useState(false)



    useEffect(() => {
        setTitle(element.title)
        setDescription(element.description)
        setOrganization(element.influencedOrganization)
    }, [])


    let elementTitle
    let elementType
    let isTactic = false
    let isObjective = false
    let isExternalActor = false
    let isExternalInfluence = false
    let descriptionLabel = "Descripción"
    let titleLabel = "Título"
    let firstTimeExternalActor = "Ingresa el nombre de tu organización"



    switch(type){
        case 'externalActor':
            elementTitle = "Editar Actor Externo"
            elementType = "Actor Externo"
            isExternalActor = true
            descriptionLabel = "¿Como influencia a tu organización?"
            titleLabel = "¿Como se llama el Actor Externo?"
            firstTimeExternalActor = "Ingresa el nombre de tu organización"

            break;
        case 'goal':
            elementTitle = "Editar Meta"
            elementType = "Meta"
            break;
        case 'strategy':
            elementTitle = "Editar Estrategia"
            elementType = "Estrategia"
            break;
        case 'tactic':
            elementTitle = "Editar Táctica"
            elementType = "Táctica"
            isTactic = true
            break;
        case 'objective':
            elementTitle = "Editar Objetivo"
            elementType = "Objetivo"
            isObjective = true
            break;
        case 'influencingActor':
          elementTitle = "Editar Actor Influyente Externo",
          elementType = "Actor Influyente Externo",
          isExternalInfluence = true
          titleLabel = "¿Como se llama el Actor Influyente Externo?"
          descriptionLabel ="Ingresa el nombre del producto o servicio"
            
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

      const handleChangeOrgname = (e) => {
        console.log("Orgname change is: ", e.target.value)
        setOrganization(e.target.value)
      }

      const handleSubmit = (e) => {
        console.log("EDITING AN EXTERNAL ACTOR!")
        e.preventDefault()

        //Preparing the object by case
        var newElement;
        switch(type){
            case 'externalActor':
                newElement = {
                    ...element,
                    title: title,
                    description: description,
                    influencedOrganization: organization

                }
                break;
        }

        editElement(newElement, type)
        setOpen(false)
      }


      const renderCreatable = () => {

        if(!isTactic && !isObjective && !isExternalActor && !isExternalInfluence) {
          return (<Fragment/>)
        }

        var optionsCreatable
        //var teams = [...teamsDummy]

        if(isTactic){
           //data dummy, aqui se deberia hacer un fetch para obtener la data acerca de los equipos de la organizacion
          console.log("OPTIONS IN CREATABLE FOR TACTIC ARE: ", options)
          optionsCreatable = options.map((t) => {
            return {
              label: t.title,
              value: t.id
            }
          })

          return (<CreatableTactic options={optionsCreatable} type={type} setData={setTeam}/>)

        } else if (isObjective){
          
          console.log("OPTIONS FOR OBJECTIVE ARE: ", options)
          //console.log(teams) 
          //const {roles} = teams[0] //EQUIPO SELECCIONADO
          //console.log("ROLES:  ",roles)
          optionsCreatable = options.map((r) => {
            return {
              label: r.title,
              value: r.title
            }
          })

          return (<CreatableObjective options={optionsCreatable} type={type} setData={setRole}/>)

        } else if(isExternalActor){
          //No options at first...
          
          return (<Fragment></Fragment>)
          
          //return (<CreatableExternalActor setData={setOrganization} />)


        } else if(isExternalInfluence){

          console.log("External Influences ALL Tactics are.. ", options)

          optionsCreatable = options.map((tactic) => {
            return {
              label: tactic.title,
              value: tactic.title,
              id: tactic.id
            }
          })

          console.log("Options for External Influence ARE: ", optionsCreatable)

          return (<CreatableExternalInfluence options={optionsCreatable} type={type} setData={setTactic}/>)

        }

        
      }


      const renderIsInfluencing = () => {

        if(isExternalInfluence){
          return(
           
            <FormControlLabel
            control={
              <Switch
                checked={isInfluencer}
                onChange={() => setIsInfluencer(!isInfluencer)}
                value="Holangas"
              />
            }
            label={isInfluencer ? "Recibe un producto o servicio" : "Entrega un producto o servicio"}
          />
              
            
            
          )

        } else {
          return <Fragment/>
        }
        
      }

      const renderUntil = () => {
        if(isExternalActor){
          return <Fragment />
        } else {
          return <Datepicker setUntil={setUntil} />
        }
      }


      const renderOrgname = () => {
        if(isExternalActor){
          return (
            <FormControl style={{width: '100%'}} >
            <TextField
              id="orgnameID"
              label={firstTimeExternalActor}
              value={organization}
              variant="outlined"
              onChange={handleChangeOrgname}
            />
            
            </FormControl>
          )
        } else {
          return <Fragment></Fragment>
        }
      }

      
  


    return(

            <div>
        
              {/**BUTTON */}
                <button
                  onClick={handleOpen}
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
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
        
                        <div>
                          {renderIsInfluencing()}
        
                        </div>
        
                        <FormControl style={styles.formField} className="FormField">
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
        
                        <div className="Creatable" style={styles.creatable}>
        
                          {renderCreatable()}
        
                        </div>
        
        
                        
        
        
                        <div>
                          {renderOrgname()}  
                        </div>
        
        
                        
        
        
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
                          <button style={styles.addButton} className="addButton" type="button" onClick={handleSubmit}>
                            Editar {elementType}
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

export default EditWrapper