import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PushNotification from 'react-native-push-notification';
import Paho from 'paho-mqtt'
import ReportesList from './ReportesList.jsx'
import ContactosList from './ContactosList.jsx'
import Mapa from './Mapa.jsx'
import NavBar from './NavBar.jsx'
import { Routes, Route } from 'react-router-native';
import theme from './Styles/theme.js'


const client = new Paho.Client(
  'test.mosquitto.org',
  1883,
  `react native`
);






const Main = () => {
  PushNotification.configure({
    channelId: '3435434', 
    channelName: 'erferferf',
    channelDescription: 'eferfrf',
    playSound: true,
    soundName: 'default', 
    vibrate: true, 
    vibrationDuration: 300, 
    // smallIcon: 'ic_notification', // Icono de notificación en la barra de estado (ubicado en la carpeta `android/app/src/main/res/mipmap`)
    // largeIcon: 'ic_launcher', // Icono grande de la notificación (ubicado en la carpeta `android/app/src/main/res/mipmap`)
    // // Resto de configuraciones...
  });



const OnMessage = () => {
  PushNotification.localNotification({
    title: '¡Hola!',
    message: 'Esta es una notificación de prueba.',
  });
}

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log('conectado...')
        client.subscribe('test/esp32/hilox')
        client.onMessageArrived = OnMessage;
      },
      onFailure: () => {
        PushNotification.localNotification({
          title: 'Error!',
          message: 'Esta es una notificación de prueba.',
        });
      }
    })
  }, [])




  


  return (
    <View style={styles.container}>

      
        <Routes>

          <Route path="/" element={<ReportesList />} />
          <Route path="/contactos" element={<ContactosList />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
    

      <NavBar />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})

export default Main