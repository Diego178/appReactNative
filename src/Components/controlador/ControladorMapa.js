import { useQuery } from '@apollo/client'
import { GET_CONTACTOS_MAPA } from '../utils/querys.js'

const ControladorMapa = () => {
    const { loading, error, data } = useQuery(GET_CONTACTOS_MAPA);

    const contactos = data?.todosContactos ?? [];
        

    return { loading, contactos, error}
}

export default ControladorMapa