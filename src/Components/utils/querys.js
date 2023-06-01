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