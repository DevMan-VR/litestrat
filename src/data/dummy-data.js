import React from 'react'


//Hay que pensarlo mejor, la lógica de guardado y de compososición del grafico de organizacion
//Loguearse => ID USUARIO
//Elegir un workspace => id workspace (tiene escenarios / modelo litestrat)
//Elegir un escenario => id scene (id actor externo id organiation) (tiene actor externo y organizacion es el modelo litestrat completo) 
//La organizacion tiene goals? Traerlos
//Por cada goals tiene estrategias? Traerlos
//Por cada estrategias tiene tacticas? Traerlos
//Por cada tacticas tiene objetivos? Traerlos

export const dummyState = {
    organization: {
        name: "Dummy Organization",
        goals: [
          {
            title: "Goal 1",
            description: "This is the description of G1",
            until: "14-09-21",
            isSelected: false,
            strategies: [
              {
                title: "Strategy 1",
                description: "This is the description of S1",
                until: "12-09-21",
                isSelected: false,
                tactics:[
                  {
                    title: "Tactic 1",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 1",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false,
                      },
                      {
                        title: "Objective 2",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  },
                  {
                    title: "Tactic 2",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 3",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      },
                      {
                        title: "Objective 4",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  }
                ]
              },
              {
                title: "Strategy 2",
                description: "This is the description of S1",
                until: "12-09-21",
                isSelected: false,
                tactics:[
                  {
                    title: "Tactic 4",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 5",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                        
                      },
                      {
                        title: "Objective 6",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false,
                      }
                    ]
                  },
                  {
                    title: "Tactic 5",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 7",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      },
                      {
                        title: "Objective 8",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: "Goal 2",
            description: "This is the description of G1",
            until: "14-09-21",
            isSelected: false,
            strategies: [
              {
                title: "Strategy 1",
                description: "This is the description of S1",
                until: "12-09-21",
                isSelected: false,
                tactics:[
                  {
                    title: "Tactic 1",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 1",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      },
                      {
                        title: "Objective 2",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  },
                  {
                    title: "Tactic 2",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 3",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      },
                      {
                        title: "Objective 4",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  }
                ]
              },
              {
                title: "Strategy 2",
                description: "This is the description of S1",
                until: "12-09-21",
                isSelected: false,
                tactics:[
                  {
                    title: "Tactic 3",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 5",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      },
                      {
                        title: "Objective 6",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  },
                  {
                    title: "Tactic 4",
                    description: "This is the description of S1",
                    until: "12-09-21",
                    responsibleTeam: null,
                    isSelected: false,
                    objectives: [
                      {
                        title: "Objective 7",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      },
                      {
                        title: "Objective 8",
                        description: "This is the description of S1",
                        until: "12-09-21",
                        responsibleUnit: null,
                        isSelected: false
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
}

