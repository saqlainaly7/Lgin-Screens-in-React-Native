import React, { useState } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import Btn from './Components/Btn';
import Textcomponent from './Components/Textcomponent';
import Inputcomponent from './Components/Inputcomponent';

const Login = () => {

    return (
        <View style={styles.container} >
            <View style={{ width: 400, height: 300, backgroundColor: 'teal' }}>
                <View style={{ backgroundColor: 'black', width: 80, height: 80, marginTop: 50, marginLeft: 40, borderRadius: 100 }}>
                    <Image style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }} source={require('./assets/myprofile.jpeg')} resizeMode='cover'></Image>
                </View>
                <View style={{ marginTop: 10, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Saqlain Ali Shah  </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', paddingLeft: 20, paddingTop: 5 }}>Fa20-bcs-079  </Text>
                    <Text style={{ letterSpacing: 2.0, fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 20, marginLeft: 20 }}>Sign in </Text>
                </View>
            </View>

            <View
                style={{
                    paddingTop: 70,
                    paddingLeft: 20,
                    backgroundColor: 'white',
                    flex: 1, borderTopLeftRadius: 100,
                }}>
                <Textcomponent text={"Email"}></Textcomponent>
                <Inputcomponent placeholder={"fa20-bcs-079@cuiatk.edu.pk"} onChangeText={() => { }} keyboardType='numeric'></Inputcomponent>
                <Textcomponent text={"Password"}></Textcomponent>
                <Inputcomponent placeholder={'Password'} secureTextEntry={true} onChangeText={() => { }} keyboardType='numeric'></Inputcomponent>


                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Btn bgcol={'white'} Btntitle={"Forget Password"} num={13} textcolor={'darkblue'} Press={() => { }} />

                </View>



                <View style={{ marginRight: 30, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Btn bgcol={'teal'} Btntitle={'Sign in'} num={20} textcolor={'white'} Press={() => { }}></Btn>
                </View>

                <View style={{ paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Btn bgcol={'white'} Btntitle={"Or Sign Up"} num={13} textcolor={'darkblue'} Press={() => { props.navigation.navigate("Signup") }} />

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
export default Login;