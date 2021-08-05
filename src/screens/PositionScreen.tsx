import React from 'react'
import { View, StyleSheet } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={ styles.container }>

            <View style={ styles.purpleBox } />

            <View style={ styles.orangeBox } />

            <View style={ styles.greenBox } />

        </View>
    )
}

// Relative position as default

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    purpleBox:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        right: 0,
        position: 'absolute'
    },
    orangeBox:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0, 
        right: 0,
    },
    greenBox:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0, 
        left: 0,
        // ...StyleSheet.absoluteFillObject,
    }
})