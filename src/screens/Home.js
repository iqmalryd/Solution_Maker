import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { StatusBar } from 'expo-status-bar'
import MainComponents from '../components/MainComponents'

const header = () => {
    return (
        <View >
            <View style={styles.head} />
        </View>
    )
}

const Home = ({ navigation, route = null }) => {
    const sheetRef = React.useRef(0)

    const ChooseConc = () => {
        const params = route.params
        const compound = params !== undefined ? params.compounds : ""
        const molecularWeight = params !== undefined ? params.molecularWeight : ""
        return (
            <MainComponents navigation={navigation} compound1={compound} molecularWeight={molecularWeight} />
        )
    }

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar backgroundColor="#24aae2" />

            <View style={styles.header}>
                <Text style={styles.title}>Make</Text>
                <Text style={styles.title}>Solution</Text>
                <Text style={styles.title}>Easier 🔥 </Text>
            </View>


            <BottomSheet
                ref={sheetRef}
                initialSnap={1}
                snapPoints={['96%', "75%", "75%"]}
                borderRadius={40}
                renderContent={ChooseConc}
                renderHeader={header}
                enabledContentTapInteraction={false}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                <Text style={{ color: "#fff" }}>Made with ❤️ by Iqmal</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#24aae2",
        position: "relative"
    },
    header: {
        marginTop: 70,
        marginHorizontal: 16
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold'
    },
    head: {
        height: 5,
        backgroundColor: "#fff",
        width: 70,
        alignSelf: 'center',
        borderRadius: 2.5,
        marginBottom: 5
    },
})
