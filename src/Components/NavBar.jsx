import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
import Icon from './Icon'


const NavBar = () => {
    
  return (
    <View style={styles.navBar}>
      <Icon to={'/'}>
        <Image source={require('./Images/peligro.png')} style={styles.image} />
      </Icon>
      <Icon to={'/contactos'}>
        <Image source={require('./Images/reporte.png')} style={styles.image} />
      </Icon>
      <Icon to={'/mapa'}>
        <Image source={require('./Images/mapa.png')} style={styles.image} />
      </Icon>
    </View>
  )
}

const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      backgroundColor: '#eee',
      width: '95%',
      height: 52,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 40,
      marginBottom: 0
    },
    image: {
      width: 28, 
      height: 28,
    }
  
  })

export default NavBar