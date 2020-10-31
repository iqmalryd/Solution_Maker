import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import ConcPicker from "./ConcPicker"

const ConcentrationInput = ({ setUnitConc, unitConc, concentration, setConcentration, error }) => {
    const [modalVisible, setModalVisible] = useState(false)

    const inputText = new Object
    if (error && concentration === undefined) {
        inputText.style = { ...styles.container, borderWidth: 1, borderColor: "red", }
    } else {
        inputText.style = { ...styles.container }
    }

    const handleShowModal = (conc) => {
        setModalVisible(!modalVisible)
        if (conc) {
            setUnitConc(conc)
        }
    }

    return (
        <View style={inputText.style}>
            <View style={{ flex: 5 }}>
                <TextInput style={styles.textInput} placeholder="00000" keyboardType="numeric"
                    value={concentration} onChangeText={(val) => setConcentration(val)} />
            </View>
            <View style={{ flex: 2 }}>
                <TouchableOpacity onPress={() => handleShowModal(null)} style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <Text style={{ color: "#555", fontWeight: "bold", fontSize: 35, marginRight: 5 }}>{unitConc}</Text>
                    <FontAwesome name="chevron-down" />
                </TouchableOpacity>
                <ConcPicker isVisible={modalVisible} setVisible={(conc) => handleShowModal(conc)} />
            </View>
        </View>
    )
}

export default ConcentrationInput

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
