import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { Text } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { Asset,useAssets } from 'expo-asset';
import { NavigationContainer,DarkTheme,DefaultTheme } from '@react-navigation/native';
import Tabs from './navigation/Tab';
import { useColorScheme } from "react-native";

export default function App() {

  const [assets] = useAssets([require("./hand.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme()==="dark";

  if(!assets||!loaded)
  {return (
    <AppLoading></AppLoading>
    );}

  return <NavigationContainer theme={isDark?DarkTheme:DefaultTheme}>
    <Tabs/>
  </NavigationContainer>;
}

