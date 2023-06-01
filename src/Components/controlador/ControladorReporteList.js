import { useQuery } from '@apollo/client'
import { GET_REPORTES_LIST } from '../utils/querys'

const ControladorReporteList = () => {
    const { loading, error, data } = useQuery(GET_REPORTES_LIST);

    const reportes = data?.todosReportes ?? [];
        

    return { loading, reportes, error}
}

export default ControladorReporteList