import React from 'react'
import reportes from '../data/reportes.js'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import ReporteItem from './ReporteItem.jsx'
import Texto from './Styles/Texto.jsx'

function ReportesList() {
  return (
    <View style={{height: '91%'}}>
      <Texto fontSize={'titulo'} fontWeight={'bold'} color={'secundario'}> Reportes</Texto>
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
        paddingBottom: 1,
        paddingTop: 1,
        
    },
    
    

})

export default ReportesList