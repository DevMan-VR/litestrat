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
                placement: 'right',
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

                content: 'El método Litestrat cuenta con conceptos de estrategia de negocio que te permitirán ir desde la definición de metas que es el mas alto nivel, hasta la definición de objetivos que es el nivel de especificidad mas concreto. Primero que todo se debe definir el Actor Externo que esta provocando una influencia sobre la organización para poder definir una estrategia de negocio que permita reaccionar ante esta influencia.',
                placement: 'center',
                target: '#sceneIcon',
                title: 'Sobre el método Litestrat',
                styles: {
                    options: {
                    width: 900,
                    height: 700,
                    fontSize: '2em'
                    },
                },

                
            },
            {

                content: 'El Actor Externo es quien influye sobre la organización provocando un efecto negativo sobre la ultima. Puede ser un nuevo competidor que está provocando disminución de clientes con una campaña viral, puede ser un factor externo también como la pandemia Covid19 o bien un conglomerado de entidades externas que provocan una influencia en común sobre la organización.',
                placement: 'bottom',
                target: '.ExternalActorContainer',
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
                placement: 'right',
                target: '.OrganizationContainer',
                title: 'Tu Organización y la Estrategia de Negocio',

                
            },
            {

                content: 'La meta representa aquello que se desea alcanzar, en este caso, en respuesta a la influencia que ejerce el actor externo sobre la organización. Que mostramos un ejemplo de Meta: "Ser tendencia en la juventud"',
                placement: 'bottom',
                target: '.goal_0',
                title: 'La Meta',

                
            },
            {

                content: 'La estrategia define el como se va a alcanzar esa meta, todavia la estrategia de es de alto nivel por lo que no se debiese ser muy especifico en el como, si no mas bien representa una ruta a seguir. En este caso la estrategia de ejemplo se define como "Aumentar las presencias en redes sociales" como una forma de alcanzar la meta definida',
                placement: 'bottom',
                target: '.strategy_0',
                title: 'La Estrategia',

                
            },
            {

                content: 'La tactica define una manera mas concreta de aterrizar la estrategia y quien se va a hacer cargo de llevarla a cabo. En este caso de ejemplo tenemos que la táctica es "Entrar a TikTok y utilizar Neuromarketing"',
                placement: 'bottom',
                target: '.tactic_0',
                title: 'La Tactica',

                
            },
            {

                content: 'El objetivo es un cuantificable o un medible que deriva de la tactica y representa un paso para llevarla a cabo. En este caso uno de los objetivos definidos es "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno"',
                placement: 'bottom',
                target: '.objective_1',
                title: 'El Objetivo',

                
            },
            {

                content: 'El siguiente nivel te permite analizar las consecuencias dentro y fuera de la organización de la estrategia de negocio desplegada, desde la meta seleccionada hasta sus objetivos. En este sentido, se pueden agregar las unidades organizacionales relacionadas y otras influencias externas que son de interes para la estrategia de negocio planteada.',
                placement: 'center',
                target: '#ObjectiveContainer',
                title: 'Modelando las reacciones y consecuencias',
                styles: {
                    options: {
                    width: 900,
                    height: 700,
                    fontSize: '2em'
                    },
                },

                
            },
            {

                content: 'La unidad organizacional relacionada es el equipo, departamento o grupo humano que tiene una relación con la presente táctica desplegada y sus objetivos. En este caso se muestra de ejemplo el equipo de Diseño Gráfico, ya que para poder llegar a una audiencia joven en tik tok se necesitará generar contenido especial, logos, animaciones, etc. Tiene 2 posibles tipos de relaciones, la unidad relacionada influencia sobre la estrategia de negocio desplegada o bien es influenciada por ella, eso definira el sentido de su flecha.',
                placement: 'top',
                target: '.relatedUnit_0',
                title: 'Ademas...',

                
            },
            {

                content: 'La influencia externa puede ser un individuo, una organización, una entidad o incluso una situación que se ve afectada por la táctica desplegada o bien genera una influencia sobre la táctica desplegada, lo que también define el sentido de la flecha. Las influencias pueden ser positivas o negativas, eso se puede definir en la descripción de la influencia. Un ejemplo de esto podria ser una 3era organziación que se ha quedado atras en la adopción de nuevas tecnologias y está perdiendo sus clientes mas jovenes debido a la estrategia de negocio desplegada ',
                placement: 'left',
                target: '.externalInfluence_0',
                title: 'Ademas...',

                
            },
            {

                content: 'Te invitamos a definir una nueva estrategia de negocio para que puedas utilizar el método Litestrat y modelar tu estrategia de negocio ',
                placement: 'center',
                target: '.externalInfluence_0',
                title: '¿Listo para empezar?',

                
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
                            top: '163px',
        
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