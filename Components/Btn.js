import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({ bgcol, textcolor, num, Btntitle, Press,}) => {
    return (
        <View>
            <TouchableOpacity
               onPress={Press}
                style={{
                    backgroundColor: bgcol,
                    borderRadius: 100,
                    alignItems: 'center',
                    width: 300,
                    height:50,
                    justifyContent:'center'
                    
                }}>
                <Text style={{ fontSize: num, fontWeight: 'bold', color: textcolor }}>{Btntitle} </Text>

            </TouchableOpacity>
        </View>
    )
}

export default Btn