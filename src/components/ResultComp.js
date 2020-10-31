import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ResultComp = ({ result, callback }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => callback()}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <MaterialCommunityIcons name="weight" color="#fff" size={28} />
                    <Text style={styles.text}>{result} Gram</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" color="#fff" size={28} />
            </TouchableOpacity>
        </View>
    )
}

export default ResultComp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9773b',
        paddingVertical: 12,
        borderRadius: 24,
        marginTop: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 28,
        marginLeft: 8,

    }
})
