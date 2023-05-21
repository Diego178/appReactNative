import React from 'react'
import Texto from './Styles/Texto'
import {View, StyleSheet} from 'react-native'

function ReportesLive() {
  return (
    <View style={styles.container}>
        <Texto> Reportes Live</Texto>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center'
    }
})


export default ReportesLive