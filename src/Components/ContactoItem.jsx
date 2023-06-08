import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Texto from './Styles/Texto'
import theme from './Styles/theme'

const ContactoItem = (props) =>  {
  return (

  <View style={styles.container}>
        
      <View style={{paddingLeft: 5}}>

        <View style={styles.root} >

          <Image source={require('./Images/estacion.png')} style={styles.image} />

              <View style={{paddingTop: 5, paddingLeft:15}}>
            <Texto color={'secundario'}>ID: {props.id}</Texto>

            {/* <Texto fontWeight={'bold'}>Nombre: {props.nombre}</Texto> */}

            <Texto color={'secundario'}>Nombre: {props.nombre} </Texto>

            <Texto color={'secundario'}>Direccion: {props.direccion} </Texto>

            <Texto color={'secundario'}>Telefono: {props.telefono}, {props.latitude} </Texto>
        

          {/* <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{alignItems: 'center'}}>
              <Texto fontSize={'subtitulo'} color={'secundario'}>hora: </Texto>
              <Texto fontSize={'subtitulo'} color={'secundario'}>{props.hora}</Texto>
            </View>

            <View style={{alignItems: 'center'}}>
              <Texto fontSize={'subtitulo'} color={'secundario'}>fecha: </Texto>
              <Texto fontSize={'subtitulo'} color={'secundario'}>{props.fecha}</Texto>
            </View>

            </View> */}
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
    width: 70, 
    height: 70,
  }

})

export default ContactoItem