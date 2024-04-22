import React from "react";
import { SafeAreaView, Text } from "react-native";
import WeaterScreen from "./components/WeaterScreen";

export default props =>{
    return (
        <SafeAreaView style={{flex:1}}>
            <WeaterScreen />
        </SafeAreaView>
    )
}