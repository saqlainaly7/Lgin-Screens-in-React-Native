import React, { useState } from 'react';

import { StyleSheet, Text, View, } from 'react-native';
import Btn from './Components/Btn';
import Textcomponent from './Components/Textcomponent';
import Inputcomponent from './Components/Inputcomponent';

const Signup = () => {

    return (
        <View style={styles.container} >
            <View style={{ width: 400, height: 150, backgroundColor: 'teal' }}>
                <View style={{ marginTop: 40, paddingLeft: 20, paddingTop: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Saqlain Ali Shah  </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', paddingLeft: 20, }}>Fa20-bcs-079  </Text>
                    <Text style={{ letterSpacing: 2.0, fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 20 }}>Sign Up </Text>
                </View>
            </View>

            <View
                style={{
                    paddingTop: 60,
                    paddingLeft: 20,
                    backgroundColor: 'white',
                    flex: 1, borderTopLeftRadius: 100
                }}>

                <Inputcomponent placeholder={"First Name"}></Inputcomponent>
                <Inputcomponent placeholder={'Last Name'} secureTextEntry={true}></Inputcomponent>
                <Inputcomponent placeholder={"Email"}></Inputcomponent>
                <Inputcomponent placeholder={"Password"}></Inputcomponent>
                <Inputcomponent placeholder={"Gender"}></Inputcomponent>
                <Inputcomponent placeholder={"Age"}></Inputcomponent>
                <Inputcomponent placeholder={"Country"}></Inputcomponent>
                <Inputcomponent placeholder={"City"}></Inputcomponent>
                <Inputcomponent placeholder={"Street"}></Inputcomponent>


                <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <Btn bgcol={'teal'} Btntitle={'Sign Up'} num={20} textcolor={'white'} Press={() => { }}></Btn>
                </View>


            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        flex: 1,


    },
});
export default Signup;