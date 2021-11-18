import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';

import {Backdrop,Box,Modal,Button,Typography, FormControl, FormLabel, RadioGroup,FormControlLabel,Radio,TextField } from '@mui/material';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';
import { CreatableTactic } from '../Helpers/Creatable/CreatableTactic';
import { CreatableObjective } from '../Helpers/Creatable/CreatableObjective';

import { CreatableExternalInfluence } from '../Helpers/Creatable/CreatableExternalInfluence';
import { CreatableRelatedUnit } from '../Helpers/Creatable/CreatableRelatedUnit';
import { CreatableExternalActor } from '../Helpers/Creatable/CreatableExternalActor';

import Datepicker from '../Helpers/Datepicker';
import { teamsDummy } from '../../data/dummy';

import './EditWrapper.css'

import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext';





const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});


Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '0.7em',
  boxShadow: 24,
  p: 4,
};







const EditWrapper = ({index=null, options=[], element, children, type, teamProp}) => {

  const {editElement, removeElement} = useLitestratCrudContext()



  const [isHover, setIsHover] = useState(true)
  const [open, setOpen] = React.useState(false);

  //Base Attr
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [until, setUntil] = useState(null)

  const [organization, setOrganization] = useState(null) //External Actor & External Influence
  const [team, setTeam] = useState(null) //Tactics
  const [role, setRole] = useState(null) //Objectives
  const [isInfluencer, setIsInfluencer] = useState(false)

  const [externalActor, setExternalActor] = useState(null)
  const [relatedUnit, setRelatedUnit] = useState(null)

  const [error, setError] = useState('')

  //console.log("En EditWrapper, el "+ type +" es: ", element)





  useEffect(() => {
    setTitle(element.title)
    setDescription(element.description)
    switch(type){
      case 'externalActor': setExternalActor(element.externalActor); setOrganization(element.influencedOrganization); break;
      case 'externalInfluence': setIsInfluencer(element.isInfluencer); setTeam(teamProp);  break;
      case 'tactic': setTeam(element.team); break;
      case 'objective': setRole(element.role); break;
      case 'relatedUnit': setIsInfluencer(element.isInfluencer); setRelatedUnit(element.associatedTeam); setTeam(teamProp); break;
    }
    
    switch(type){
      case 'goal': setUntil(element.until); break;
      case 'strategy': setUntil(element.until); break;
      case 'tactic': setUntil(element.until); break;
      case 'objective': setUntil(element.until); break;
    }
    
    

}, [])






    let elementTitle
    let elementType
    let isTactic = false
    let isObjective = false
    let isExternalActor = false
    let isExternalInfluence = false
    let isRelatedUnit = false
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
        case 'externalInfluence':
          elementTitle = "Editar Actor Influyente Externo"
          elementType = "Actor Influyente Externo"
          isExternalInfluence = true
          titleLabel = "¿Como se llama el Actor Influyente Externo?"
          descriptionLabel ="Ingresa el nombre del producto o servicio"

        case 'relatedUnit':
          elementTitle = "Nueva Unidad Organizacional Relacionada"
          elementType = "Unidad Organizacional Relacionada"
          isRelatedUnit = true
          titleLabel = "¿Como se llama la Unidad Organizacional Relacionada?"
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
        e.preventDefault()

        console.log("NOW TYPE IS ::: ", type)

        if(!checkErrors(type)){ //Si el chequeo de errores sale negativo retorna vacio
          return
        }

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
            case 'externalInfluence':
              newElement = {
                ...element,
                title: title,
                description: description,
                associatedTeam: team,
                isInfluencer: isInfluencer
              }
              break;

            case 'relatedUnit':
              newElement = {
                ...element,
                title: title,
                description: description,
                associatedTeam: team,
                isInfluencer: isInfluencer
              }
              break;

            case 'goal': 
              newElement = {
                ...element,
                title: title,
                description: description,
                until: until
              }
              break;
            case 'strategy': 
              newElement = {
                ...element,
                title: title,
                description: description,
                until: until
              }
              break;

            case 'tactic': 
              newElement = {
                ...element,
                title: title,
                description: description,
                until: until,
                team: team,

              }
              break;

            case 'objective':
              newElement = {
                ...element,
                title: title,
                description: description,
                until: until,
                role: role,

              }
              break;

        }
        setOpen(false)
        editElement(index, newElement, type)
        
      }




      const renderCreatable = () => {

        if(!isTactic && !isObjective && !isExternalActor && !isExternalInfluence && !isRelatedUnit) {
          return (<Fragment/>)
        }

        var optionsCreatable
        //var teams = [...teamsDummy]

        if(isTactic){
           //data dummy, aqui se deberia hacer un fetch para obtener la data acerca de los equipos de la organizacion
          console.log("OPTIONS IN CREATABLE FOR TACTIC ARE: ", team)
          var value
          if(team){
            value =  {
              label: team.title,
              value: team.id
            }
          } else {
            optionsCreatable = options.map((r) => {
              return {
                label: r.title,
                value: r.title
              }
            })
          }
          


          return (<CreatableTactic value={value} options={optionsCreatable} type={type} setData={setTeam}/>)

        } else if (isObjective){
          
          console.log("OPTIONS FOR OBJECTIVE ARE: ", role)
          //console.log(teams) 
          //const {roles} = teams[0] //EQUIPO SELECCIONADO
          //console.log("ROLES:  ",roles

          var value;
          if(role){
            value = {
              label: role.title,
              value: role.title
            }
          } else {

            optionsCreatable = options.map((r) => {
              return {
                label: r.title,
                value: r.title
              }
            })

          }

          

          return (<CreatableObjective value={value} options={optionsCreatable} type={type} setData={setRole}/>)

        }

        

        
      }

      const checkErrors = (type) => {
        var hasError
        switch(type){
          case 'externalActor': 
            //Ningun campo puede estar vacio (title, description, organization)
            if(!title || !organization){
              setError("Todos los campos deben ser llenados*")
              hasError = false
            } else {
              hasError = true
            }
            break;
          case 'goal':
          case 'strategy':
            if(!title  || !until){
              setError("Todos los campos deben ser llenados*")
              hasError = false
            } else {
              hasError = true
            }
            break;
    
          case 'tactic':
            if(!title || !team){
              setError("Todos los campos deben ser llenados*")
              hasError = false
            } else {
              hasError = true
            }
    
            break;
    
            case 'objective':
            if(!title || !role){
              setError("Todos los campos deben ser llenados*")
              hasError = false
            } else {
              hasError = true
            }
    
            break;
    
            case 'externalInfluence':
            if(!title ){
              setError("Todos los campos deben ser llenados*")
              hasError = false
            } else {
              hasError = true
            }


            case 'relatedUnit':
            if(!title ){
              setError("Todos los campos deben ser llenados*")
              hasError = false
            } else {
              hasError = true
            }
    
            break;
        }
    
        return hasError
    
      }


      const renderIsInfluencing = () => {

        if(isExternalInfluence){
          return(
            <FormControl component="fieldset">
            <FormLabel component="legend" style={{marginBottom: '0.7em'}}>Tipo de Influencia</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender2"
  
              
            >
              <FormControlLabel
                value={true}
                checked={isInfluencer}
                onChange={() => setIsInfluencer(true)}
                control={<Radio style={{marginLeft: '0.5em'}}  color="primary" />}
                label="Entrega un producto o servicio a la organización"
                labelPlacement="start"
                style={{marginBottom: '0.7em'}}
              />
              <FormControlLabel
                checked={!isInfluencer}
                value={false}
                onChange={() => setIsInfluencer(false)}
                control={<Radio style={{marginLeft: '0.5em'}}  color="primary" />}
                label="Recibe un producto o servicio de la organización"
                labelPlacement="start"
              />
  
            </RadioGroup>
          </FormControl>
  
          
              
            
            
          )
  
        } else if (isRelatedUnit) {

          return(
            <FormControl component="fieldset">
            <FormLabel component="legend" style={{marginBottom: '0.7em'}}>Tipo de Influencia</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender2"
  
              
            >
              <FormControlLabel
                value={true}
                checked={isInfluencer}
                onChange={() => setIsInfluencer(true)}
                control={<Radio style={{marginLeft: '0.5em'}}  color="primary" />}
                label="Influencia a la unidad organizacional"
                labelPlacement="start"
                style={{marginBottom: '0.7em'}}
              />
              <FormControlLabel
                checked={!isInfluencer}
                value={false}
                onChange={() => setIsInfluencer(false)}
                control={<Radio style={{marginLeft: '0.5em'}}  color="primary" />}
                label="Es influenciado por la unidad organizacional"
                labelPlacement="start"
              />
  
            </RadioGroup>
          </FormControl>
  
          
              
            
            
          )
  
        } else {
          return <Fragment/>
        }
        
      }

      const renderUntil = () => {
        if(isExternalActor){
          return <Fragment />
        } else {
          return <Datepicker setUntil={setUntil} until={until} />
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


      const handleRemove = () => {
        removeElement(type)
      }

      const renderCreatableExternalActor = () => {
        let optionsCreatable
        let value
        if (isExternalActor){
          
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

          value = {
            label: element.title,
            value: element.title
          }


  
          return (<CreatableExternalActor value={value} options={optionsCreatable} defaultValue={externalActor} type={type} setTitle={setTitle} setExternalActor={setExternalActor}/>)
  
        }
      }
      
  
    const renderTitle = () => {

      let title;
      if(type==='externalActor'){
        title = (
          <div className="Creatable" style={styles.creatable}>

            {renderCreatableExternalActor()}

          </div>
        )
      } else if(type==='relatedUnit'){
        title = (
          <div className="Creatable" style={styles.creatable}>

            {renderCreatableRelatedUnit()}

          </div>
        )
      } else {
        title = (
          <FormControl style={{padding: 0, marginTop: '1em', width: '100%'}}>
            <TextField
                        
              label={titleLabel}
              value={title}
              required
              id="outlined-required"
              onChange={handleChangeTitle}
                         
            />
                    
          </FormControl>
        )
      }

      return title
        
      
    }


    const renderCreatableRelatedUnit = () => {
      let optionsCreatable
      if (isRelatedUnit){
        
        console.log("OPTIONS FOR Related Unit ARE: ", options)
        //console.log(teams) 
        //const {roles} = teams[0] //EQUIPO SELECCIONADO
        //console.log("ROLES:  ",roles)
        optionsCreatable = options.map((r) => {
          return {
            label: r.title,
            value: r.title
          }
        })
        let value = null
        console.log("ELEMENT ISSSSSSSS ZDASDA SD  ", element)
        if(element.associatedTeam) {
          value = element.associatedTeam.title
        }

        return (<CreatableRelatedUnit value={value} options={optionsCreatable} type={type} setTitle={setTitle} setRelatedUnit={setRelatedUnit}/>)

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
                    onClose={() => handleClose()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <FormControl>
                      <Typography style={{fontSize: '1.5em', marginBottom: '0.2em', fontWeight: '500'}}>
                      {elementTitle}
                      </Typography>
                    </FormControl>

                        {renderTitle()}
        
                        <div>
                          {renderIsInfluencing()}
        
                        </div>
        
                        <FormControl style={styles.formField} className="FormField">
                            <TextField
                                id="descriptionID"
                                label={descriptionLabel}
                                multiline
                                rows={3}
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
        
        
                        <div>
                  <FormControl >

                      {error !== '' ? <div style={{color: 'red'}} id="errorForm" ><p>{error}</p></div> : <Fragment/> }
                      
                  </FormControl>
                </div>


                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '3em'}}>
                    <button style={styles.addButton} className="addButton" type="button" onClick={handleSubmit}>
                      Guardar
                    </button>

                    


                  </div>

                  <div style={{width:'100%', display: 'flex', marginTop: '2em'}}>

                  <div style={{display: 'flex', width:'100%', justifyContent: 'flex-start'}}>
                      <a style={{color: '#ff4b4b', fontWeight: 700}} href="#" onClick={() => handleRemove()} >Eliminar </a>
                    </div>

                    <div style={{display: 'flex', width:'100%', justifyContent: 'flex-end'}}>
                      <a style={{color: '#9c9c9c', fontWeight: 500}} href="#" onClick={() => handleClose()} >Cerrar </a>
                    </div>

                    
                  </div>
                        
        
                        
                  </Box>
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
        marginTop: '1em',
        width: '100%',
        padding: '0',
    },
  
    addButton: {
      width: '100%',
      height: 50,
      borderRadius: '0.2em',
      fontSize: '1em',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: 'rgb(86,100,139)',
      color:'whitesmoke',
      marginBottom: '0.5em'
    },

    removeButton: {
      width: '100%',
      height: 50,
      borderRadius: '0.2em',
      fontSize: '1em',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: 'rgb(86,100,139)',
      color:'whitesmoke'
    }
    
  };

export default EditWrapper