import React, { useState } from 'react';
import AppLoading from "expo-app-loading"
import { Text,Image } from 'react-native';
import * as Font from 'expo-font';
import {Ionicons} from "@expo/vector-icons";
import {Asset} from 'expo-asset';

const loadFonts = Fonts =>Fonts.map((font)=>Font.loadAsync(font));
const loadAssets = assets=>assets.map(asset=>{
  if(typeof asset ==="string")
  return Image.prefetch(asset);
  else 
  return Asset.loadAsync(asset);
})

export default function App() {
  const [ready,setReady] = useState(false);
  const onFinish = ()=>setReady(true);
  const startLoading = async()=>{
    const fonts = loadFonts([Ionicons.font]);
    const images = loadAssets([require("./my_man.jpeg"),"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"])
    await Promise.all([...fonts,...images]);
  };
  if(!ready){
    return <AppLoading 
    startAsync={startLoading}
    onFinish={onFinish} 
    onError={console.error}></AppLoading>;
  }
  return <Text>We are done Loading</Text>;
}

