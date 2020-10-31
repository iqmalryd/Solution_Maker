import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'




const Search = ({ route, navigation }) => {
    const search = route.params
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [compound, setCompound] = useState("")
    const [molecularWeight, setMolecularWeight] = useState('')

    const getCompound = async () => {
        try {
            const response = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/autocomplete/compound/${search}/json?limit=10`)
            setData(response.data.dictionary_terms.compound)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }



    useEffect(() => {
        getCompound()
    }, [])


    // handler
    const handleSelect = async (compounds) => {
        try {
            const response = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${compounds}/property/MolecularWeight/JSON`)
            const molWeight = response.data.PropertyTable.Properties[0]["MolecularWeight"]
            setCompound(compounds)
            setMolecularWeight(molWeight)
            navigation.navigate('Home', { compounds, molecularWeight: molWeight.toFixed(1) })
        } catch (error) {
            setError(true)
        }
    }

    return (
        < View >
            <StatusBar backgroundColor="#24aae2" />
            {isLoading ? <ActivityIndicator
                animating={isLoading}
                color="#24aae2"
                size="large"
                style={styles.response}
            /> : null}
            {error ?
                <Text style={{ height: "100%", textAlign: "center", textAlignVertical: "center" }}>Something went wrong, try again</Text> :
                <FlatList
                    data={data}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => handleSelect(item)} style={styles.selectItem}>
                                <Text>{item}</Text>
                                <FontAwesome name="chevron-right" size={20} />
                            </TouchableOpacity>
                        )
                    }}
                    style={{ marginVertical: 16 }}
                />
            }
        </View >
    )
}

export default Search

const styles = StyleSheet.create({
    response: {
        alignItems: "center",
        justifyContent: 'center',
        height: '100%',
    },
    selectItem: {
        paddingVertical: 16,
        elevation: 3,
        marginVertical: 5,
        backgroundColor: "#FFF",
        marginHorizontal: 16,
        paddingHorizontal: 8,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    }
})
