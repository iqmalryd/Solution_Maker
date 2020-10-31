import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native'

const data = [
    { title: "Normality (N)", value: "N" },
    { title: "Molarity (M)", value: "M" },
    { title: "% Weigth per Volume (%W/V)", value: "%" },
    { title: "Part Per Million (PPM)", value: "PPM" },
    { title: "Part Per Bilion (PPB)", value: "PPB" },
    { title: "Part Per Trillion (PPT)", value: "PPT" },
]

const ConcPicker = ({ isVisible, setVisible }) => {

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
                statusBarTranslucent
            >
                <View style={styles.containerModal}>
                    <View style={styles.wrapper}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => setVisible(item.value)} style={styles.itemConc}>
                                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }
                            }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ConcPicker

const styles = StyleSheet.create({
    containerModal: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    wrapper: {
        // backgroundColor: "#fff",
        width: 350,
        paddingVertical: 50,
        borderRadius: 10
    },
    itemConc: {
        marginVertical: 2,
        backgroundColor: "#FFF",
        paddingVertical: 16,
        borderRadius: 10,
        paddingLeft: 8,
        elevation: 3
    }
})
