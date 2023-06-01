import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {View, StyleSheet, Dimensions, Alert, Modal, Pressable, Text, Image} from 'react-native'
import Texto from './Styles/Texto.jsx'
import dataFake from './utils/dataFake.js'

const Mapa = () =>  {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null)
  const [mapRegion, setmapRegion] = useState({
    latitude: 19.54690271806683, 
    longitude: -96.8967525852562,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleModal = (data) => {
    setData(data)
    setModalVisible(true)
  }
  return (
    <View style={styles.container}>
        <Texto > Mapa</Texto>
        <MapView style={styles.map} 
          region={mapRegion}>
            {dataFake.map(data =>(
              <Marker onPress={() => {
                handleModal(data);
              }}
              key={data.id}
              coordinate={data} >
                <Image source={require('./Images/fire-station(1).png')} style={styles.markerImage}></Image>
              </Marker>
            ))}
        </MapView>



        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      {data && (
                        <View>
                          <Texto color={'secundario'}>{data.id}</Texto>
                          <Texto color={'secundario'}>{data.nombre}</Texto>
                          <Texto color={'secundario'}>{data.telefono}</Texto>
                          </View>
                        )}
                      
                    
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                          setData(null);
                          setModalVisible(false);
                        }}>
                        <Texto style={styles.textStyle}>Hide Modal</Texto>
                      </Pressable>
                    </View>
                  </View>
                </Modal>

    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      height: '91%'
    },
    map: {
      width: Dimensions.get('window').width,
      height: '93%'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    markerImage: {
      width: 30,
      height: 30,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    
})


export default Mapa