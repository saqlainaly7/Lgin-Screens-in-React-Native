import { View, Text } from 'react-native'
import React from 'react'

const Textcomponent = ({text}) => {
    return (
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 20, marginLeft: 20,paddingBottom:10 }}>{text} </Text>

        </View>
    )
}

export default Textcomponent