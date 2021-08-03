import React from 'react'
import { Text, View } from "react-native"

function HelloWorldScreen() {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Text style={{ 
              fontSize: 45,
              textAlign: 'center'
            }}>
                Hello Fede!
              </Text>
        </View>
    )
}

export default HelloWorldScreen