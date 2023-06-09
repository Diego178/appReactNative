import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Texto from './Styles/Texto'
import theme from './Styles/theme'

const ReporteItem = (props) =>  {
  return (

  <View style={styles.container}>
        
      <View style={{paddingLeft: 5}}>

        <View style={styles.root} >

          <Image source={require('./Images/esp32.png')} style={styles.image} />

              <View>
            <Texto color={'secundario'}>ID: {props.id}</Texto>

            {/* <Texto fontWeight={'bold'}>Nombre: {props.nombre}</Texto> */}

            <Texto color={'secundario'}>Mensaje: {props.mensaje} </Texto>
        

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

          </View>
        
        </View>
        </View>

        
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingTop: 3
  },
  container: {
   borderWidth: 0, borderRadius: 10,
    backgroundColor: theme.colors.primary,
    width: "100%"

  },
  image: {
    width: 60, 
    height: 60,
    paddingTop: 3
  }

})

export default ReporteItem