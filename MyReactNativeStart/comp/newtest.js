import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const styled = StyleSheet.create({
  text:{
    fontSize:"15px",
    fontWeight:"700",
  }
})

export default function App() {
  return(
    <View>
      <Text style={styled.text}>NewTest Components</Text>
    </View>
  )
    
}
