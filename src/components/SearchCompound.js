import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Entypo } from "@expo/vector-icons"

const SearchCompound = ({ onEndEditing, compound, setCompound, error }) => {
    const inputText = new Object
    if (error && compound === "") {
        inputText.style = { ...styles.container, borderWidth: 1, borderColor: "red", }
    } else {
        inputText.style = { ...styles.container }
    }
    return (
        <View style={inputText.style}>
            <Entypo name="lab-flask" size={24} color="#555" />
            <Text style={{ fontSize: 24, marginHorizontal: 6, color: "#555" }}>|</Text>
            <TextInput style={styles.textInput}
                value={compound}
                placeholder="Insert Compound"
                onChangeText={(val) => setCompound(val)}
                onEndEditing={() => compound === "" ? null : onEndEditing()}
            />
        </View>
    )
}

export default SearchCompound

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    textInput: {
        flex: 1,
        alignItems: 'center'
    }
})
