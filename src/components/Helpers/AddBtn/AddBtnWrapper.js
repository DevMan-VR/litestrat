import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, FormLabel, RadioGroup,FormControlLabel,Radio,TextField } from '@mui/material';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';
import { CreatableExternalActor } from '../Creatable/CreatableExternalActor';
import { CreatableTactic } from '../Creatable/CreatableTactic';
import { CreatableObjective } from '../Creatable/CreatableObjective';
import { CreatableExternalInfluence } from '../Creatable/CreatableExternalInfluence';
import { CreatableRelatedUnit } from '../Creatable/CreatableRelatedUnit';

import Datepicker from '../Datepicker';
import {teamsDummy} from '../../../data/dummy'

import {useLitestratCrudContext} from '../../Litestrat/LitestratCrudContext.js'

import './AddBtnWrapper.css'

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

 const AddBtnWrapper = ({ options=[], children, type, element}) => {


    const {addElement} = useLitestratCrudContext();

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [until, setUntil] = useState(null)
    const [role, setRole] = useState(null)
    const [team, setTeam] = useState(null)
    const [organization, setOrganization] = useState(null)

    const [error, setError] = useState('')

    const [assocTeam, setAssocTeam] = useState(null)
    const [isInfluencer, setIsInfluencer] = useState(false)

    const [open, setOpen] = React.useState(false);

    const [externalActor, setExternalActor] = useState(null)
    const [externalInfluence, setExternalInfluence] = useState(null)
    const [relatedUnit, setRelatedUnit] = useState(null)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
    let isExternalInfluence = false
    let isRelatedUnit = false

    let descriptionLabel = "Descripción"
    let titleLabel = "Título"
    let firstTimeExternalActor ="some"

    switch(type){
        case 'externalActor':
            elementTitle = "Nuevo Actor Externo"
            elementType = "Actor Externo"
            isExternalActor = true
            descriptionLabel = "¿Como influencia a tu organización?"
            titleLabel = "¿Como se llama el Actor Externo?"
            firstTimeExternalActor = "Ingresa el nombre de tu organización"
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
            break;
            
        case 'externalInfluence':
          elementTitle = "Nuevo Actor Influyente Externo"
          elementType = "Actor Influyente Externo"
          isExternalInfluence = true
          titleLabel = "¿Como se llama el Actor Influyente Externo?"
          descriptionLabel ="Ingresa el nombre del producto o servicio"
          break;
          

        case 'relatedUnit':
          elementTitle = "Nueva Unidad Organizacional Relacionada"
          elementType = "Unidad Organizacional Relacionada"
          isRelatedUnit = true
          titleLabel = "¿Como se llama la Unidad Organizacional Relacionada?"
          descriptionLabel ="Ingresa el nombre del producto o servicio"
          break;
            
    }


    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeUntil = (e) => {
        setUntil(e.target.value)
    }

    const handleChangeOrgname = (e) => {
      console.log("Orgname change is: ", e.target.value)
      setOrganization(e.target.value)
    }

    const handleChangeIsInfluencer = (e) => {
      if(e.target.value === true){
        setIsInfluencer(true)
      } else {
        setIsInfluencer(false)
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
          if(!title ){
            setError("Debe llenar el campo de titulo*")
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
          if(!title || isInfluencer === null || !assocTeam ){
            setError("Todos los campos deben ser llenados*")
            hasError = false
          } else {
            hasError = true
          }

          case 'relatedUnit':
          if(!title || isInfluencer === null ){
            setError("Todos los campos deben ser llenados*")
            hasError = false
          } else {
            hasError = true
          }

          break;
      }

      return hasError

    }

    const handleSubmitExternalActor = (e) => {
      console.log("CREATING AN EXTERNAL ACTOR!")
      e.preventDefault()

      if(!checkErrors('externalActor')){ //Si el chequeo de errores sale negativo retorna vacio
        return
      }

      //Preparing the object
      var element = {
        title: title,
        influenceDescription: description, //influence description
        influencedOrganization: organization,
        externalActor: {
          title: externalActor.value
        }
      }

      console.log("ACTOR IS: ", element)

      addElement(type, element)
      setOpen(false)

      setTitle('')
      setDescription('')
      setOrganization(null)
    }

    const handleSubmit = (e) => {
      console.log("CREATING AN ELEMENT!")
      e.preventDefault()

      if(!checkErrors(type)){ //Si el chequeo de errores sale negativo retorna vacio (no submit)
        return
      }

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
      } else if (isExternalInfluence){

        element.associatedTeam = assocTeam
        element.isInfluencer = isInfluencer
        
      } else if (isRelatedUnit){

        element.associatedTeam = assocTeam
        element.isInfluencer = isInfluencer
        element.relatedUnit = relatedUnit
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

      if(!isTactic && !isObjective && !isExternalActor && !isExternalInfluence && !isRelatedUnit) {
        return (<Fragment/>)
      }

      let optionsCreatable
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

      }
    }


    const renderCreatableExternalActor = () => {
      let optionsCreatable
      if (isExternalActor){
        
        console.log("OPTIONS FOR External Actor ARE: ", options)
        //console.log(teams) 
        //const {roles} = teams[0] //EQUIPO SELECCIONADO
        //console.log("ROLES:  ",roles)
        optionsCreatable = options.map((r) => {
          return {
            label: r.title,
            value: r.title
          }
        })

        return (<CreatableExternalActor options={optionsCreatable} type={type} setTitle={setTitle} setExternalActor={setExternalActor}/>)

      }
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

        return (<CreatableRelatedUnit options={optionsCreatable} type={type} setTitle={setTitle} setRelatedUnit={setRelatedUnit}/>)

      }
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

      }  else if (isRelatedUnit) {

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
      if(isExternalActor || isExternalInfluence){
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
            required
          />
          
          </FormControl>
        )
      } else {
        return <Fragment></Fragment>
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

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
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

                {/** Rendering Title or Creatable */}
                {renderTitle()}
                
                

                <div style={{marginTop: '1em'}}>
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
                        required
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


                <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
                  <button style={styles.addButton} className="addButton" type="button" onClick={definitiveSubmit}>
                    Agregar {elementType}
                  </button>

                </div>

                <div style={{width:'100%', display: 'flex', justifyContent: 'flex-end', marginTop: '2em'}}>
                  <div>
                    <a style={{color: '#9c9c9c', fontWeight: 500}} href="#" onClick={() => handleClose()} >Cerrar </a>
                  </div>
                </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
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
    color:'whitesmoke'
  }
  
};

export default AddBtnWrapper;