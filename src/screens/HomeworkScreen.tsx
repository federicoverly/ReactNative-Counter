import React from 'react'
import { View, StyleSheet } from 'react-native'

export const HomeworkScreen = () => {
    return (
        <View style={ styles.container}>
            <View style={ styles.purpleBox}></View>
            <View style={ styles.orangeBox}></View>
            <View style={ styles.blueBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        alignContent: 'space-around'
    },
    purpleBox:{
        // flex: 2,
        width: 100, 
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    orangeBox:{
        // flex: 2,
        width: 100, 
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'center',
        top:50,
    },
    blueBox:{
        // flex: 6,
        width: 100, 
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4C9',
    },
})
