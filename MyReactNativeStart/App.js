import {View,ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import NewTest from './comp/newtest'

const image = '../MyReactNativeStart/assets/desert.jpg'


const styled = StyleSheet.create({
  Container:{
    width: "100%",
    // backgroundColor:"grey",
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"#713615",
    backgroundColor:"#58BEEE",
    lineHeight: 50,
  },
  text: {
    color: "black",
   
  },
  title:{
    fontSize:" 30px",
    fontWeight:"700",
    marginBottom: "50px",
    fontFamily:"Georgia",
  },
  change: {
    width: "250px",
    // backgroundColor:"white",
    justifyContent: 'space-between',
    alignItems:"center",
    flexDirection:"row",
     color: "black",
     marginTop: "30px",
  },
  button :{
    width: "80px",
    height: "40px",
    color: "white",
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center",
  },
  imagestyle: {
    flex: 1,
    justifyContent: "center"
  },
  comp:{
    fontSize:"15px",
    fontWeight:"700",
  }
});

export default function App() {
  return(
    <View style={styled.Container}>
      <ImageBackground style={styled.imagestyle} source={image} resizeMode="cover">
      <Text style={styled.title}>This is the home Page</Text>
      <MyComponent />
      <NewTest/>
      <View style={styled.change}>
      <MyButton text='Click1'/>
      <MyButton  text='Click2'/>
      </View>
      </ImageBackground>
    </View>
  )
    
}

const MyComponent = () => {
  return(
    <View>
      <Text style={styled.comp}>This is the new Component</Text>
    </View>
  )
}

//text as props
const MyButton = ({text}) => {
  return(
    <View>
      <TouchableOpacity style={styled.button} onPress={()=> {
        console.log('I was pressed')
      }} >{text}</TouchableOpacity>
    </View>
  )
}


