import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text,View } from "react-native";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/Ionicons';

// const [darkTheme, setDarkTheme] = useState(true)
// const [currentTemperature, setCurrentTemperature] = useState('27')
// const [location, setLocation] = useState('BR, São Paulo')

export default props => {
    return (
        <View style={styles.container}>
            <Icon name="sunny-outline" size={40} color="orange"/>
            <View style={styles.temperature}>
                <Text style={styles.temperatureText}>27</Text>
                <Text style={styles.temperatureText}>º</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems:'center',
        },
        temperature: {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 40,
        },
        temperatureText: {
           // color: darkTheme ? '#e0e0e0' : 'black',
           color: 'black',
            fontSize: 40,
        }
    }
)