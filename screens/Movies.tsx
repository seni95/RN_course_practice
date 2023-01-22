import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from "react-native";
import styled from "styled-components/native";
import Swiper from 'react-native-web-swiper';
// import { View } from 'react-native';
import { Dimensions } from 'react-native';

const ScrollView = styled.ScrollView`
backgroundColor : ${(props)=>props.theme.mainBgColor}
`;

const View = styled.View`
flex:1`;

const {height} = Dimensions.get("window");

const Movies : React.FC<NativeStackScreenProps<any,'Movies'>> = ()=><ScrollView>
    <Swiper loop 
    timeout={3.5}
    controlsEnabled={false}
    containerStyle={{width:"100%", height:height/4}}>
        <View style={{backgroundColor:"red"}}></View>
        <View style={{backgroundColor:"blue"}}></View>
        <View style={{backgroundColor:"red"}}></View>
        <View style={{backgroundColor:"blue"}}></View>
    </Swiper>
</ScrollView>;

export default Movies;