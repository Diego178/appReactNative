import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import ContactoItem from './ContactoItem.jsx'
import Texto from './Styles/Texto.jsx'
import ControladorContactoList from './controlador/ControladorContactoList.js'
import theme from './Styles/theme.js'


const ContactosList = () =>  {

  const { contactos, loading, error  } = ControladorContactoList()

  if (loading) return <View style={{height: '91%', width: '95%'}}><Texto fontSize={'titulo'} fontWeight={'bold'} color={'primario'}>Cargando... {loading.message}</Texto></View>
  if (error) return <View style={{height: '91%', width: '95%'}}><Texto fontSize={'titulo'} fontWeight={'bold'} color={'primario'}>Error: {error.message}</Texto></View>

  return (
    <View style={{height: '91%', width: '95%'}}>
      <Texto fontSize={'titulo'} fontWeight={'bold'} color={'primario'}> Contactos</Texto>
        <FlatList
        data={contactos}
        styles={styles.conteiner}
        ItemSeparatorComponent={() => <Text>  </Text>}
        renderItem={ ({ item: contacto}) => (
            <ContactoItem {...contacto} />
        )}
        />
    </View>
  )
}




const styles = StyleSheet.create({
    conteiner: {
        padding: 0,
        backgroundColor: theme.colors.secundary
        
    }
})

export default ContactosList