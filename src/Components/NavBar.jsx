import React from 'react'
import {Link} from 'react-router-native'
import {Image, Pressable, View, StyleSheet} from 'react-native'

const NavBar = () => {

    const handleMenu = () => {

    }
    
  return (
    <View style={styles.navBar}>
        <Link to={'/mapa'}>
          <Image source={require('./Images/peligro.png')} style={{width: 28, height: 28}} />
        </Link>
        <Pressable onPress={handleMenu} style={styles.iconBehave}
        android_ripple={{borderless:true, radius: 50}}>
          <Image source={require('./Images/reporte.png')} style={{width: 28, height: 28}} />
        </Pressable> 
        <Pressable onPress={handleMenu} style={styles.iconBehave}
        android_ripple={{borderless:true, radius: 50}}>
          <Image source={require('./Images/mapa.png')} style={{width: 28, height: 28}} />
        </Pressable> 
      </View>
  )
}

const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      backgroundColor: '#eee',
      width: '90%',
      justifyContent: 'space-evenly',
      borderRadius: 40
    },
  
    iconBehave: {
      padding: 14
    }
  
  })

export default NavBar