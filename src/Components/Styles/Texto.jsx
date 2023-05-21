import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from './theme.js'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontsWeigths.normal,
    },
    bold: {
        fontWeight: theme.fontsWeigths.bold
    },
    big: {
        fontSize: theme.fontSizes.titulo
    },
    small: {
        fontSize: theme.fontSizes.subtitulo
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecundary: {
        color: theme.colors.textSecundary
    }
})

export default function StyleText({  color, fontSize, children, fontWeight,  ...restOfProps}){

    const textStyles = [
        styles.text, 
        color === 'primario' && styles.colorPrimary,
        color === 'secundario' && styles.colorSecundary,
        fontSize === 'titulo' && styles.big,
        fontSize === 'subtitulo' && styles.small,
        fontWeight == 'bold' && styles.bold
    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}