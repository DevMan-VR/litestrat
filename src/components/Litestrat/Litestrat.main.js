import React, {useState} from 'react'
import LitestratView from './Litestrat.view'
import NavbarComponent from '../Navbar/NavbarComponent'
import LitestratProvider from './LitestratContext'
import LitestratCrudProvider from './LitestratCrudContext'
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';

import './Litestrat.css'

const LitestratApp = () => {

    const [tourState, setTourState] = useState({

        run: true,
        steps: [
            {
                title: 'Bienvenido a Litestrat Web',
                content: "Litestrat Web es una herramienta diseñada para ayudar a organizaciones agiles a definir su estrategia de negocio y estructura organizacional. A continuación te mostraremos paso a paso con un caso de ejemplo como se ocupa esta herramienta y que significa cada simbolo en pantalla",
                locale: { skip: <strong aria-label="skip">Saltar</strong> },
                placement: 'center',
                target: '#ExternalActor',
                styles: {
                    options: {
                    width: 700,
                    },
                },
                },
            {

                content: 'Esta pantalla es la zona de trabajo y donde podras modelar tu estrategia de negocio',
                placement: 'left',
                target: '.OrganizationContainer',
                title: 'Zona de Trabajo',

                
            },
            {

                content: 'En este menu desplegable tendrás accesos a las opciones de Litestrat',
                placement: 'right',
                target: '.NavBarAbsContainer',
                title: 'Menu de Opciones',

                
            },
            {

                content: 'Aquí podras crear nuevas escenas, renombrar escenas o eliminarlas',
                placement: 'right',
                target: '#dbIcon',
                title: 'Manejo de Escenas',

                
            },
            {

                content: 'Aqui podras guardar y cargar escenas a Litestrat web',
                placement: 'right',
                target: '#sceneIcon',
                title: 'Gestión de Datos versión alfa',

                
            },
            {

                content: 'El método Litestrat definido por Prof. Rene Nôel cuenta con conceptos de estrategia de negocio que te permitirán ir desde la definición de metas que es el mas alto nivel, hasta la definición de objetivos que es el nivel de especificidad mas concreto. Primero que todo se debe definir el Actor Externo que esta provocando una influencia sobre la organización para poder definir una estrategia que permita reaccionar ante esta influencia.',
                placement: 'center',
                target: '#sceneIcon',
                title: 'Sobre el método Litestrat',

                
            },
            {

                content: 'El Actor Externo es quien influye sobre la organización provocando un efecto negativo sobre la ultima. Puede ser un nuevo competidor que está provocando disminución de clientes con una campaña viral, puede ser un factor externo también como la pandemia Covid19 o bien un conglomerado de entidades externas que provocan una influencia en común sobre la organización.',
                placement: 'bottom',
                target: '#ExternalActor',
                title: 'El Actor Externo',

                
            },
            {

                content: 'Esta es la descripción de la influencia que ejerce el actor externo sobre la organización.',
                placement: 'bottom',
                target: '#influencingText',
                title: 'Influencia',

                
            },
            {

                content: 'En esta sección se encuentra definido el metodo litestrat. Iremos punto por punto explicando cada uno de sus niveles.',
                placement: 'left',
                target: '.OrganizationContainer',
                title: 'Tu Organización y Estrategia',

                
            },
            {

                content: 'La meta representa aquello que se desea alcanzar, en este caso, en respuesta a la influencia que ejerce el actor externo sobre la organización. Que mostramos un ejemplo de Meta: "Ser tendencia en la juventud"',
                placement: 'bottom',
                target: '#GoalContainer',
                title: 'La Meta',

                
            },
            {

                content: 'La estrategia define el como se va a alvanzar esa meta, todavia la estrategia de es de alto nivel por lo que no se debiese ser muy especifico en el como, si no mas bien representa una ruta a seguir. En este caso la estrategia de ejemplo se define como "Aumentar las presencias en redes sociales" como una forma de alcanzar la meta definida',
                placement: 'bottom',
                target: '#StrategyContainer',
                title: 'La Estrategia',

                
            },
            {

                content: 'La tactica define una manera mas concreta de aterrizar la estrategia y quien se va a hacer cargo de llevarla a cabo. En este caso de ejemplo tenemos que la táctica es "Entrar a TikTok y utilizar Neuromarketing"',
                placement: 'bottom',
                target: '#TacticContainer',
                title: 'La Tactica',

                
            },
            {

                content: 'El objetivo es una tarea concreta que deriva de la tactica, representa un paso para llevarla a cabo. En este caso uno de los objetivos definidos es "Creación de Perfil de TikTok"',
                placement: 'bottom',
                target: '#ObjectiveContainer',
                title: 'El Objetivo',

                
            },
            {

                content: 'A continuación tenemos... Unidades Relacionadas y Otros Actores Influyentes',
                placement: 'center',
                target: '#ObjectiveContainer',
                title: 'Ademas...',

                
            },
        ],
        
    })

    const handleJoyrideCallback = (data) => {
        const { status, type } = data;
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    
        if (finishedStatuses.includes(status)) {
          setTourState((prevState) => {
              return {
                  ...prevState,
                  run : false
              }
          });
        }
    
        console.groupCollapsed(type);
        console.log(data);
        console.groupEnd();
      };

      const { run, steps } = tourState;

    let helpers =null

    const getHelpers = (helpers2) => {
        helpers = helpers2;
    };

    
    return (

        <LitestratProvider isTutorial={true}>
            <LitestratCrudProvider>
                <div>
                    <Joyride
                        callback={handleJoyrideCallback}
                        continuous={true}
                        getHelpers={getHelpers}
                        run={run}
                        scrollToFirstStep={true}
                        showProgress={true}
                        showSkipButton={true}
                        steps={steps}
                        styles={{
                            options: {
                            zIndex: 10000,
                            top: '163px'
                            },
                        }}
                    />    
                </div>
                <div className="rootBody">
                    <NavbarComponent/>
                    <LitestratView />   
                </div>
            </LitestratCrudProvider>
        </LitestratProvider>
    )
}


export default LitestratApp