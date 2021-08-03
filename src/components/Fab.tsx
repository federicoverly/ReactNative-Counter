import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

interface Props{
    title: string,
    onPress: () => void,
    position?: 'Bl' | 'Br'
}

export const Fab = ( { title, onPress, position } :Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                style={[styles.fabLocation,
                    (position === 'Bl') ? styles.left : styles.right]}
                onPress={ onPress }
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>                
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
            style={[styles.fabLocation,
                (position === 'Bl') ? styles.left : styles.right]}>
                 <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
                    >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        )
 }  
    return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right:25,
    },
    left:{
        left:25,
    },
    fab:{
        backgroundColor:'#5856d6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8, 
    },
    fabText:{
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
