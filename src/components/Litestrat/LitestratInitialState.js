import { teamsDummy } from "../../data/dummy"
import Scene from "../Scene/Scene.model.js"

export const initialState = {

    workspace: {
        teams: teamsDummy,
        sceneIndex: 0,
        scenes: [new Scene(1,1,"Escenario 1")],
        externalInfluences: [],
        externalActors: []
    }
}

export const tutorialState = {
    "workspace": {
    "teams": [
        {
          "id": "T1",
          "title": "Team 1",
          "department": "IT",
          "roles": [
            {
              "id": "R1",
              "title": "Technical Leader",
              "user": {
                "name": "John",
                "lastName": "Doe",
                "username": "john.doe@gmail.com"
              }
            },
            {
              "id": "R2",
              "title": "Analyst",
              "user": {
                "name": "Katherine",
                "lastName": "Sovlenik",
                "username": "katherine.sovln@gmail.com"
              }
            },
            {
              "id": "R3",
              "title": "Senior Programmer",
              "user": {
                "name": "Igor",
                "lastName": "Dorokhov",
                "username": "igor.dorokhov@gmail.com"
              }
            },
            {
              "id": "R4",
              "title": "Junior Programmer",
              "user": {
                "name": "Nathan",
                "lastName": "Sim",
                "username": "nathan.sim@gmail.com"
              }
            },
            {
              "id": "R5",
              "title": "QA",
              "user": {
                "name": "Giovanni",
                "lastName": "Giacomo",
                "username": "gio.gia@gmail.com"
              }
            }
          ]
        },
        {
          "id": "Marketing",
          "department": "Por defecto TI",
          "title": "Marketing",
          "roles": [
            {
              "id": "Junior",
              "title": "Junior",
              "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
              "username": "John Von Neumann"
            },
            {
              "id": "Community Manager",
              "title": "Community Manager",
              "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
              "username": "John Von Neumann"
            }
          ]
        }
      ],
      "sceneIndex": 0,
      "scenes": [
        {
          "id": 1,
          "sceneId": 1,
          "title": "Escenario 1",
          "description": null,
          "organization": {
            "id": 1,
            "sceneId": null,
            "userId": null,
            "fatherId": null,
            "isVisible": false,
            "currentSelect": false,
            "name": "dummy",
            "goals": [
              {
                "id": "g3",
                "sceneId": null,
                "userId": null,
                "fatherId": null,
                "title": "Ser tendencia en los jovenes",
                "description": null,
                "until": null,
                "isSelected": true,
                "isVisible": false,
                "currentSelect": false,
                "strategies": [
                  {
                    "id": "g3s7",
                    "sceneId": null,
                    "userId": null,
                    "fatherId": "g3",
                    "title": "Aumentar presencia en redes sociales",
                    "description": null,
                    "until": null,
                    "isSelected": true,
                    "isVisible": false,
                    "currentSelect": false,
                    "tactics": [
                      {
                        "id": "g3s7t1",
                        "sceneId": null,
                        "userId": null,
                        "fatherId": "g3s7",
                        "title": "Entrada a TikTok y Neuromarketing",
                        "description": null,
                        "until": null,
                        "isSelected": true,
                        "isVisible": false,
                        "currentSelect": true,
                        "objectives": [
                          {
                            "id": "g3s7t1g2",
                            "sceneId": null,
                            "userId": null,
                            "fatherId": null,
                            "title": "Creación de Perfil Tiktok",
                            "description": null,
                            "until": null,
                            "isSelected": false,
                            "isVisible": false,
                            "currentSelect": false,
                            "role": {
                              "id": "Junior",
                              "title": "Junior",
                              "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                              "username": "John Von Neumann"
                            }
                          },
                          {
                            "id": "g3s7t1g5",
                            "sceneId": null,
                            "userId": null,
                            "fatherId": null,
                            "title": "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno",
                            "description": null,
                            "until": null,
                            "isSelected": false,
                            "isVisible": false,
                            "currentSelect": false,
                            "role": {
                              "id": "Community Manager",
                              "title": "Community Manager",
                              "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                              "username": "John Von Neumann"
                            }
                          }
                        ],
                        "team": {
                          "id": "Marketing",
                          "department": "Por defecto TI",
                          "title": "Marketing",
                          "roles": [
                            {
                              "id": "Junior",
                              "title": "Junior",
                              "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                              "username": "John Von Neumann"
                            },
                            {
                              "id": "Community Manager",
                              "title": "Community Manager",
                              "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                              "username": "John Von Neumann"
                            }
                          ]
                        },
                        "externalInfluences": [],
                        "relatedUnits": [],
                        "teamIndex": 1,
                        "index": 0
                      }
                    ],
                    "index": 0
                  }
                ],
                "index": 0
              }
            ]
          },
          "externalActorSelected": null,
          "goalSelected": {
            "id": "g3",
            "sceneId": null,
            "userId": null,
            "fatherId": null,
            "title": "Ser tendencia en los jovenes",
            "description": null,
            "until": null,
            "isSelected": true,
            "isVisible": false,
            "currentSelect": false,
            "strategies": [
              {
                "id": "g3s7",
                "sceneId": null,
                "userId": null,
                "fatherId": "g3",
                "title": "Aumentar presencia en redes sociales",
                "description": null,
                "until": null,
                "isSelected": true,
                "isVisible": false,
                "currentSelect": false,
                "tactics": [
                  {
                    "id": "g3s7t1",
                    "sceneId": null,
                    "userId": null,
                    "fatherId": "g3s7",
                    "title": "Entrada a TikTok y Neuromarketing",
                    "description": null,
                    "until": null,
                    "isSelected": true,
                    "isVisible": false,
                    "currentSelect": true,
                    "objectives": [
                      {
                        "id": "g3s7t1g2",
                        "sceneId": null,
                        "userId": null,
                        "fatherId": null,
                        "title": "Creación de Perfil Tiktok",
                        "description": null,
                        "until": null,
                        "isSelected": false,
                        "isVisible": false,
                        "currentSelect": false,
                        "role": {
                          "id": "Junior",
                          "title": "Junior",
                          "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                          "username": "John Von Neumann"
                        }
                      },
                      {
                        "id": "g3s7t1g5",
                        "sceneId": null,
                        "userId": null,
                        "fatherId": null,
                        "title": "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno",
                        "description": null,
                        "until": null,
                        "isSelected": false,
                        "isVisible": false,
                        "currentSelect": false,
                        "role": {
                          "id": "Community Manager",
                          "title": "Community Manager",
                          "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                          "username": "John Von Neumann"
                        }
                      }
                    ],
                    "team": {
                      "id": "Marketing",
                      "department": "Por defecto TI",
                      "title": "Marketing",
                      "roles": [
                        {
                          "id": "Junior",
                          "title": "Junior",
                          "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                          "username": "John Von Neumann"
                        },
                        {
                          "id": "Community Manager",
                          "title": "Community Manager",
                          "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                          "username": "John Von Neumann"
                        }
                      ]
                    },
                    "externalInfluences": [],
                    "relatedUnits": [],
                    "teamIndex": 1,
                    "index": 0
                  }
                ],
                "index": 0
              }
            ],
            "index": 0
          },
          "strategySelected": {
            "id": "g3s7",
            "sceneId": null,
            "userId": null,
            "fatherId": "g3",
            "title": "Aumentar presencia en redes sociales",
            "description": null,
            "until": null,
            "isSelected": true,
            "isVisible": false,
            "currentSelect": false,
            "tactics": [
              {
                "id": "g3s7t1",
                "sceneId": null,
                "userId": null,
                "fatherId": "g3s7",
                "title": "Entrada a TikTok y Neuromarketing",
                "description": null,
                "until": null,
                "isSelected": true,
                "isVisible": false,
                "currentSelect": true,
                "objectives": [
                  {
                    "id": "g3s7t1g2",
                    "sceneId": null,
                    "userId": null,
                    "fatherId": null,
                    "title": "Creación de Perfil Tiktok",
                    "description": null,
                    "until": null,
                    "isSelected": false,
                    "isVisible": false,
                    "currentSelect": false,
                    "role": {
                      "id": "Junior",
                      "title": "Junior",
                      "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                      "username": "John Von Neumann"
                    }
                  },
                  {
                    "id": "g3s7t1g5",
                    "sceneId": null,
                    "userId": null,
                    "fatherId": null,
                    "title": "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno",
                    "description": null,
                    "until": null,
                    "isSelected": false,
                    "isVisible": false,
                    "currentSelect": false,
                    "role": {
                      "id": "Community Manager",
                      "title": "Community Manager",
                      "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                      "username": "John Von Neumann"
                    }
                  }
                ],
                "team": {
                  "id": "Marketing",
                  "department": "Por defecto TI",
                  "title": "Marketing",
                  "roles": [
                    {
                      "id": "Junior",
                      "title": "Junior",
                      "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                      "username": "John Von Neumann"
                    },
                    {
                      "id": "Community Manager",
                      "title": "Community Manager",
                      "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                      "username": "John Von Neumann"
                    }
                  ]
                },
                "externalInfluences": [],
                "relatedUnits": [],
                "teamIndex": 1,
                "index": 0
              }
            ],
            "index": 0
          },
          "tacticSelected": {
            "id": "g3s7t1",
            "sceneId": null,
            "userId": null,
            "fatherId": "g3s7",
            "title": "Entrada a TikTok y Neuromarketing",
            "description": null,
            "until": null,
            "isSelected": true,
            "isVisible": false,
            "currentSelect": true,
            "objectives": [
              {
                "id": "g3s7t1g2",
                "sceneId": null,
                "userId": null,
                "fatherId": null,
                "title": "Creación de Perfil Tiktok",
                "description": null,
                "until": null,
                "isSelected": false,
                "isVisible": false,
                "currentSelect": false,
                "role": {
                  "id": "Junior",
                  "title": "Junior",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                }
              },
              {
                "id": "g3s7t1g5",
                "sceneId": null,
                "userId": null,
                "fatherId": null,
                "title": "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno",
                "description": null,
                "until": null,
                "isSelected": false,
                "isVisible": false,
                "currentSelect": false,
                "role": {
                  "id": "Community Manager",
                  "title": "Community Manager",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                }
              }
            ],
            "team": {
              "id": "Marketing",
              "department": "Por defecto TI",
              "title": "Marketing",
              "roles": [
                {
                  "id": "Junior",
                  "title": "Junior",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                },
                {
                  "id": "Community Manager",
                  "title": "Community Manager",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                }
              ]
            },
            "externalInfluences": [],
            "relatedUnits": [],
            "teamIndex": 1,
            "index": 0
          },
          "objectiveSelected": null,
          "teamSelected": null,
          "roleSelected": null,
          "externalInfluenceSelected": null,
          "currentSelected": null,
          "allTactics": [
            {
              "id": "g3s7t1",
              "sceneId": null,
              "userId": null,
              "fatherId": "g3s7",
              "title": "Entrada a TikTok y Neuromarketing",
              "description": null,
              "until": null,
              "isSelected": true,
              "isVisible": false,
              "currentSelect": true,
              "objectives": [
                {
                  "id": "g3s7t1g2",
                  "sceneId": null,
                  "userId": null,
                  "fatherId": null,
                  "title": "Creación de Perfil Tiktok",
                  "description": null,
                  "until": null,
                  "isSelected": false,
                  "isVisible": false,
                  "currentSelect": false,
                  "role": {
                    "id": "Junior",
                    "title": "Junior",
                    "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                    "username": "John Von Neumann"
                  }
                },
                {
                  "id": "g3s7t1g5",
                  "sceneId": null,
                  "userId": null,
                  "fatherId": null,
                  "title": "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno",
                  "description": null,
                  "until": null,
                  "isSelected": false,
                  "isVisible": false,
                  "currentSelect": false,
                  "role": {
                    "id": "Community Manager",
                    "title": "Community Manager",
                    "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                    "username": "John Von Neumann"
                  }
                }
              ],
              "team": {
                "id": "Marketing",
                "department": "Por defecto TI",
                "title": "Marketing",
                "roles": [
                  {
                    "id": "Junior",
                    "title": "Junior",
                    "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                    "username": "John Von Neumann"
                  },
                  {
                    "id": "Community Manager",
                    "title": "Community Manager",
                    "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                    "username": "John Von Neumann"
                  }
                ]
              },
              "externalInfluences": [],
              "relatedUnits": [],
              "teamIndex": 1,
              "index": 0
            }
          ],
          "relatedUnits": [],
          "externalInfluences": [],
          "externalActor": {
            "id": "EX_ACT3",
            "sceneId": null,
            "userId": null,
            "fatherId": null,
            "title": "Actor Externo X",
            "description": "Disminuye cantidad de clientes jovenes",
            "until": null,
            "isSelected": null,
            "isVisible": false,
            "currentSelect": false,
            "influencedOrganization": "Mi Organización",
            "externalActor": {
              "title": "Actor Externo X"
            }
          },
          "currentSelect": {
            "id": "g3s7t1",
            "sceneId": null,
            "userId": null,
            "fatherId": "g3s7",
            "title": "Entrada a TikTok y Neuromarketing",
            "description": null,
            "until": null,
            "isSelected": true,
            "isVisible": false,
            "currentSelect": true,
            "objectives": [
              {
                "id": "g3s7t1g2",
                "sceneId": null,
                "userId": null,
                "fatherId": null,
                "title": "Creación de Perfil Tiktok",
                "description": null,
                "until": null,
                "isSelected": false,
                "isVisible": false,
                "currentSelect": false,
                "role": {
                  "id": "Junior",
                  "title": "Junior",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                }
              },
              {
                "id": "g3s7t1g5",
                "sceneId": null,
                "userId": null,
                "fatherId": null,
                "title": "Publicación de 5 reels que alcancen un total de 2500 vistas cada uno",
                "description": null,
                "until": null,
                "isSelected": false,
                "isVisible": false,
                "currentSelect": false,
                "role": {
                  "id": "Community Manager",
                  "title": "Community Manager",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                }
              }
            ],
            "team": {
              "id": "Marketing",
              "department": "Por defecto TI",
              "title": "Marketing",
              "roles": [
                {
                  "id": "Junior",
                  "title": "Junior",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                },
                {
                  "id": "Community Manager",
                  "title": "Community Manager",
                  "userId": "529458d0-b784-4c09-9bbb-4462a69ce323",
                  "username": "John Von Neumann"
                }
              ]
            },
            "externalInfluences": [],
            "relatedUnits": [],
            "teamIndex": 1,
            "index": 0
          }
        }
      ],
      "externalInfluences": [],
      "externalActors": [
        {
          "title": "Actor Externo X"
        }
      ]
    }
  }

