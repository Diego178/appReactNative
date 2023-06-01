import React from "react";
import { Link, useLocation } from "react-router-native";
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, TouchableWithoutFeedbackComponent, View } from "react-native";
import theme from './Styles/theme'

const Icon = ({to, children}) => {

    const { pathname } = useLocation()
    const active = pathname === to

    const styleBoton = [
        style.text,
        active && style.active
    ]

    return(
        <Link to={to}>
            <View style={styleBoton}>
                {children}
            </View>
            
        </Link>
    )
}

const style = StyleSheet.create({
    active: {
        backgroundColor: theme.colors.secundary,
      },
      text: {
        borderRadius: 10,
        width: 42,
        height: 42,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default Icon