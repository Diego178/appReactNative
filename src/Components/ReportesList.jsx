import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import ReporteItem from './ReporteItem.jsx'
import Texto from './Styles/Texto.jsx'
import ControladorReporteList from './controlador/ControladorReporteList.js'
import theme from './Styles/theme.js'


const ReportesList = () =>  {

  const { reportes, loading, error  } = ControladorReporteList()

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{height: '91%'}}>
      <Texto fontSize={'titulo'} fontWeight={'bold'} color={'primario'}> Reportes</Texto>
        <FlatList
        data={reportes}
        styles={styles.conteiner}
        ItemSeparatorComponent={() => <Text>  </Text>}
        renderItem={ ({ item: reporte}) => (
            <ReporteItem {...reporte} />
        )}
        />
    </View>
  )
}




const styles = StyleSheet.create({
    conteiner: {
        padding: 0,
        backgroundColor: theme.colors.secundary
        
    }
})

export default ReportesList