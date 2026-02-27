import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <Tabs>

      <Tabs.Screen name="index" options={{title:"Home", tabBarIcon: ({color}) => <Ionicons name="home-sharp" size={30} color={color}/>}}></Tabs.Screen>

      <Tabs.Screen name="cookieclicker/cookies" options={{title:"Cookie Clicker", 
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="cookie" size={30} color={color}/>}}></Tabs.Screen>

      <Tabs.Screen name="cookieclicker/cookies2" options={{title:"Cookie Clicker 2", 
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="cookie" size={30} color={color}/>}}></Tabs.Screen>

      <Tabs.Screen name="styling/grid" options={{title:"Grid", tabBarIcon: ({color}) => <Ionicons name="grid-sharp" size={30} color={color}/>}}></Tabs.Screen>

      <Tabs.Screen name="styling/bolinhas" options={{title:"Bolinhas", tabBarIcon: ({color}) => <Ionicons name="basketball-sharp" size={30} color={color}/>}}></Tabs.Screen>

    </Tabs>
  );
}


