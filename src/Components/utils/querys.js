import { gql } from "apollo-boost";

export const GET_REPORTES_LIST = gql`
query{
  todosReportes {
    id
    esp32
    mensaje
    fecha
    hora
  }
}
`


export const GET_CONTACTOS_LIST = gql`
query{
  todosContactos {
    id
    nombre
    direccion
    telefono
  }
}
` 


export const GET_CONTACTOS_MAPA = gql`
query{
  todosContactos {
    id
    nombre
    direccion
    telefono
    latitude
    longitude
  }
}
` 