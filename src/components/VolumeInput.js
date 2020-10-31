import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const VolumeInput = ({ volume, setVolume, error }) => {
    const inputText = new Object
    if (error && volume === undefined) {
        inputText.style = { ...styles.container, borderWidth: 1, borderColor: "red", }
    } else {
        inputText.style = { ...styles.container }
    }
    return (
        <View style={inputText.style}>
            <View style={{ flex: 5 }}>
                <TextInput style={styles.textInput} placeholder="00000" keyboardType="numeric"
                    value={volume} onChangeText={(val) => setVolume(val)} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ color: "#555", fontWeight: "bold", fontSize: 35, marginRight: 5, textAlign: "center" }}>mL</Text>
            </View>
        </View>
    )
}

export default VolumeInput

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingHorizontal: 8,
        borderRadius: 24,
        elevation: 3
    },
    textInput: {
        borderRightColor: "#e5e5e5",
        borderRightWidth: 1,
        textAlign: 'center',
        width: '100%',
        fontSize: 50,
        color: "#333",
    }
})
