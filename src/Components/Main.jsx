import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ReportesList from './ReportesList.jsx'
import ContactosList from './ReporteItem.jsx'
import Mapa from './Mapa.jsx'
import NavBar from './NavBar.jsx'
import { Routes, Route } from 'react-router-native';
import theme from './Styles/theme.js'

const Main = () => {
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