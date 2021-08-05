import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={ styles.container}>
            <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text>
            { /* <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text>
            <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text>
            <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text>
            <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text>
            <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text>
            <Text style={ styles.box1}> Box 1</Text>
            <Text style={ styles.box2}> Box 2</Text>
            <Text style={ styles.box3}> Box 3</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row', // column is the default value
        // justifyContent: 'flex-end', // flex-start is the default value
        alignItems: 'flex-start',
        flexWrap:'wrap'
    },
    box1: {
        // flex:4, // 40%, as 4 + 4 + 2 = 10
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // width: 100,
        // height: 100,
        alignSelf: 'flex-start'
    },
    box2: {
        // flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    box3: {
        // flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf:'center'
    },
})

