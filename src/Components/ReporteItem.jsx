import React from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from '../Components/Styles/Texto'

function ReporteItem(props) {
  return (
    <View key={props.id} style={styles.container}>

        <View style={{paddingLeft: 15}}>
          <Texto>ID: {props.id}</Texto>

          <Texto fontWeight={'bold'}>Nombre: {props.nombre}</Texto>

          <Texto>Mensaje: {props.mensaje} </Texto>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{alignItems: 'center'}}>
            <Texto fontSize={'subtitulo'}>hora: </Texto>
            <Texto fontSize={'subtitulo'}>{props.hora}</Texto>
          </View>

          <View style={{alignItems: 'center'}}>
            <Texto fontSize={'subtitulo'}>fecha: </Texto>
            <Texto fontSize={'subtitulo'}>{props.fecha}</Texto>
          </View>

          <View style={{alignItems: 'center'}}>
            <Texto fontSize={'subtitulo'}>lat: </Texto>
            <Texto fontSize={'subtitulo'}>{props.lat}</Texto>
          </View>

          <View style={{alignItems: 'center'}}>
            <Texto fontSize={'subtitulo'}>long: </Texto>
            <Texto fontSize={'subtitulo'}>{props.long}</Texto>
          </View>
       
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   borderWidth: 0, borderRadius: 10,
    backgroundColor: '#2E4053'

  }

})

export default ReporteItem