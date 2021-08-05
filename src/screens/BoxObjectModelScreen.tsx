import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    title: {
        fontSize: 20,
        // width: 250,
        borderWidth: 10,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginRight: 10,
        marginLeft: 10,
        marginHorizontal: 5,
    }
})