import { useQuery } from '@apollo/client'
import { GET_CONTACTOS_LIST } from '../utils/querys'

const ControladorContactoList = () => {
    const { loading, error, data } = useQuery(GET_CONTACTOS_LIST);

    const contactos = data?.todosContactos ?? [];
        

    return { loading, contactos, error}
}

export default ControladorContactoList