import { View, TextInput } from 'react-native'
import React from 'react'
import Btn from './Btn';

const Inputcomponent = (props) => {
  return (
    <View>
      <TextInput 
      {...props}
      style={{borderWidth:1.0,marginBottom:5,width:'90%',height:50,borderRadius:100,paddingLeft:20, paddingRight:20}}>
      
      

      </TextInput>
    </View>
  )
}

export default Inputcomponent;