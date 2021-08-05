import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

function CounterScreen() {

    const [counter, setCounter] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Counter: { counter }
            </Text>

            <Fab 
            title="-1"
            onPress={ () => setCounter(counter-1)}
            position='Bl'
            />

            <Fab 
            title="+1"
            onPress={ () => setCounter(counter+1)}
            position='Br'
            />

            { /* 
            <TouchableOpacity
                onPress={ () =>
                setCounter(counter-1)
            }
                style={styles.fabLocationBL}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () =>
                setCounter(counter+1)
            }
                style={styles.fabLocationBR}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>
        */ }
        </View>

    )
}

export default CounterScreen

// Styles 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize:40,
        position: 'relative',
        top: -15,
    }
})