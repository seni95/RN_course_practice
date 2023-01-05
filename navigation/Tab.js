import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { useColorScheme } from "react-native";
import { BLACK_COLOR, YELLOW_COLOR } from "../color";
import {Ionicons} from '@expo/vector-icons';
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    const isDark = useColorScheme()==="dark";
    return (<Tab.Navigator screenOptions={{
        tabBarStyle:{
        backgroundColor : isDark?BLACK_COLOR:"white"
        },
        tabBarActiveTintColor:isDark?YELLOW_COLOR:BLACK_COLOR,
        tabBarInactiveTintColor:isDark?"#F6F6F6":"#A6A9B6",
        headerStyle:{
            backgroundColor : isDark?BLACK_COLOR:"white"
        },
        headerTitleStyle:{
            color:isDark?YELLOW_COLOR:BLACK_COLOR,
        }
    }}>
    <Tab.Screen name="Movies" component={Movies} options={{
        tabBarIcon:({focused,color,size})=>{
            return <Ionicons name="film" size={size} color={color} />
        }
    }}/>
    <Tab.Screen name="Tv" component={Tv} options={{
        tabBarIcon:({focused,color,size})=>{
            return <Ionicons name="tv" size={size} color={color} />
        }
    }}/>
    <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon:({focused,color,size})=>{
            return <Ionicons name="search" size={size} color={color} />
        }
    }}/>
</Tab.Navigator>)}

export default Tabs;