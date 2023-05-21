import React from 'react'
import { Switch, Route } from 'react-router-native'
import { View, StyleSheet } from 'react-native'
import ReportesList from './ReportesList.jsx'
import ReportesLive from './ReportesLive.jsx'
import Mapa from './Mapa.jsx'
import NavBar from './NavBar.jsx'

function Main () {
  return (
    <View style={styles.container}>
      
      <Switch>
        <Route path='/' exact>
          <ReportesList />
        </Route>
        <Route path='/reportLive' exact>
          <ReportesLive />
        </Route>
        <Route path='/mapa' exact>
          <Mapa />
        </Route>
      </Switch>

      <NavBar />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#D5D8DC',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})
export default Main