Los casos del estado de Litestrat WEB

0: Se debe definir "Influencer", "Organización" y el nombre de la influencia que ejerce sobre el Influencer sobre la Organización

1: La organización ha sido creada, se despliega y aparece el icono de goal semi-transparente para proceder a crear el goal

1 -> 2: Creando un goal

2: Al crear el goal se despliegan las estrategias bajo el goal creado/seleccionado. Aparece otro icono de goal semi-transparente a la derecha del goal creado/seleccionado para dar la posibilidad de crear un nuevo goal. Aparece un icono de tactica semi-transparente abajo de goal (con cierto offset a la derecha) para poder crear una estrategia

2 -> 2: Creando otro goal
2 -> 3: Creando una estrategia para un goal seleccionado

3: Al crear una estrategia para un goal seleccionado, se despliega sobre la estrategia creada/seleccionada un contenedor de las tácticas, con una tactica semi-transparente con un boton a su derecha para proceder a crearla. 

3 -> 2: Creando otro goal
3 -> 3: Creando otra estrategia
3 -> 4: Creando una táctica

4: Al crear una táctica aparece sobre esta el icono/boton con la posibilidad de crear/asignar una unidad organizacional a la táctica relacionada. También se despliega bajo de la táctica creada/seleccionada un contenedor de objetivos (vertical) con un objetivo semi-transparente y a su derecha un boton para crear un objetivo.

4 -> 2: Creando otro goal
4 -> 3: Creando otra estrategia
4 -> 4: Creando una táctica
4 -> 5: Creando/asignando una unidad organizacional a una táctica**
4 -> 6: Creando un objetivo dentro de la táctica seleccionada


5: Al crear/asignar un equipo de trabajo a una táctica la táctica queda lista (algo mas deberia pasar para indicar el cambio de estado?)

5 -> 2: Creando otro goal
5 -> 3: Creando otra estrategia
5 -> 4: Creando una táctica
5 -> 5: Creando/asignando una unidad organizacional a una táctica**
5 -> 6: Creando un objetivo dentro de la táctica seleccionada

6: Al crear un objetivo dentro de una táctica. Se desplaza un espacio hacia abajo el objetivo semitransparente de creación. Aquí se puede crear/asignar un rol al objetivo


6 -> 2: Creando otro goal
6 -> 3: Creando otra estrategia
6 -> 4: Creando una táctica
6 -> 5: Creando/asignando una unidad organizacional a una táctica**
6 -> 6: Creando un objetivo dentro de la táctica seleccionada
6 -> 7: Creando/asignando un rol a un objetivo


/// Colors: https://colorhunt.co/palette/f5e8c7deba9d9e77776f4c5b


*** Falta aplicar la lógica de los seleccionados a cada elemento del array, ver la posibilidad si se pueden guardar los seleccionados...


El paso siguiente es:

--- Previo a la creación de cada elemento, definir un modal de creación. CHECK
---> Logica de ADD BUTTON y MODAL como modificar el cuerpo original de datos (organization) CHECK


El paso siguiente es:
--> Terminar la lógica de CREATABLE para tacticas y para objetivos.
*Cuando elijas un equipo para una tactica, los roles luego derivan del equipo seleccionado! (relativamente OK)



***Hay un desorden a la hora de crear asignar un team a una tactica y un rol a un objetivo, todavia está desordenada esa lógica, lo ideal seria mejorarla para que tenga posibilidad de gestionar data via get/post de forma correspondiente.



****Estoy haciendo una logica para que se puedan editar los formularios... pero creo que tengo que pensarlo mejor para poder integrarlo bien... Y el hecho de que al clickear al elemento se despliegue el formulario también con los datos llenados! OKKK Pude implementarlo para external actor!



****Ahora que pude implementar la lógica para editar formularios para externalActor, solo hace falta extenderlo para cada tipo, siguiendo la misma lógica reutilizable. 


Tengo que rehacer la lógica de filtros para Influencias Externas y Unidades Relacionadas, de manera que se ingrese automatico el team en ellas y se filtren segun tacticSelected / team OKKK esta hecho, ahora las tacticas tienen influencias externas y unidades relacionadas, estos se filtran segun la tacticSelected de forma automatica:D


*** Agregar un apartado de configuraciones, en estas se pueden ingresar parametros asociados a los plazos:
- Se puede activar o desactivar el mostrar el estado de los elementos debido a su fecha. (por default activado solo para los elementos que están seleccionados...)
- Se define cuantos dias significan atraso, precaucion y verde (por default V>=7, A>=3 y A<7, R<3)
- Se puede activar o desactivar la presencia de influencias externas (por default activado)
- Se puede activar o desactivar la presencia de unidades relacionadas (por default activado)



[OK] *** Que solo el titulo sea obligatorio para: meta, estrategia
[OK] *** Que titulo y equipo sea obligatorio para tactica
[OK] *** Que titulo y rol sea obligatorio para objetivo
[OK] *** Que los Actore Externos sean creatable (titulo) y que se guarden en el workspace como array ## Que todo esto también funcione y se aplique en el editWrapper
*** Que las unidades relacionadas sean creatable (equipo?) ### Que todo esto también funcione en el edit wrapper
*** Que las influencias externas sean creatable ### Que todo esto también funcione en el edit wrapper
*** Que el tamaño de la organización se agrande para contener a las unidades relacionadas.
*** Arreglar bugs de edición, cuando se crea una tactica y se abre automaticamente asegurarse de que tambien queda seleccionada de modo que los nuevos itemes que se crean quedan asociados correctamente a las tácticas.

***Terminar de resolver bug en relatedUnit EditWrapper para cargar la unidad relacionada actual xd