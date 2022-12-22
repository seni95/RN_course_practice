import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { useColorScheme } from "react-native";
import { BLACK_COLOR, YELLOW_COLOR } from "../color";

const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    const isDark = useColorScheme()==="dark";
    return (<Tab.Navigator screenOptions={{}}>
    <Tab.Screen name="Movies" component={Movies}/>
    <Tab.Screen name="Tv" component={Tv}/>
    <Tab.Screen name="Search" component={Search}/>
</Tab.Navigator>)}

export default Tabs;