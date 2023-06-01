import React from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from './Styles/Texto'
import theme from './Styles/theme'

const ReporteItem = (props) =>  {
  return (
    <View key={props.id} style={styles.container}>

        <View style={{paddingLeft: 15}}>
          <Texto color={'secundario'}>ID: {props.id}</Texto>

          {/* <Texto fontWeight={'bold'}>Nombre: {props.nombre}</Texto> */}

          <Texto color={'secundario'}>Mensaje: {props.mensaje} </Texto>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{alignItems: 'center'}}>
            <Texto fontSize={'subtitulo'} color={'secundario'}>hora: </Texto>
            <Texto fontSize={'subtitulo'} color={'secundario'}>{props.hora}</Texto>
          </View>

          <View style={{alignItems: 'center'}}>
            <Texto fontSize={'subtitulo'} color={'secundario'}>fecha: </Texto>
            <Texto fontSize={'subtitulo'} color={'secundario'}>{props.fecha}</Texto>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   borderWidth: 0, borderRadius: 10,
    backgroundColor: theme.colors.primary

  }

})

export default ReporteItem