import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SearchCompound from '../components/SearchCompound'
import { useFocusEffect } from '@react-navigation/native'
import calculate from '../utills/calculate'
import ConcentrationInput from './ConcentrationInput'
import VolumeInput from './VolumeInput'
import ValencyInput from './ValencyInput'
import ResultComp from './ResultComp'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'

const MainComponents = ({ navigation, compound1, molecularWeight }) => {

    const [unitConc, setUnitConc] = useState("M")
    const [compound, setCompound] = useState("")
    const [molWeight, setMolMeight] = useState()
    const [concentration, setConcentration] = useState()
    const [volume, setVolume] = useState()
    const [valency, setValency] = useState()
    const [result, setResult] = useState("")
    const [isError, setError] = useState(false)
    useFocusEffect(
        useCallback(() => {
            setCompound(compound1)
            if (molecularWeight !== "") {
                const parsedMolecule = parseFloat(molecularWeight)
                setMolMeight(parsedMolecule)
            }
            return () => {
                setCompound("")
                setMolMeight("")
            };
        }, [compound1, molecularWeight])
    );

    const datas = () => {
        const data = new Object
        data.mr = molWeight
        data.unit = unitConc
        data.volume = volume
        data.concentration = concentration
        data.compound = compound
        if (unitConc === "N") {
            data.valency = valency
        }
        return validation(data)
    }

    const validation = (data) => {
        let countError = 0
        for (const dt in data) {
            if (data[dt] === "" || data[dt] == undefined) {
                countError += 1
            }
        }
        if (countError !== 0) {
            setError(true)
            return null
        } else {
            setError(false)
            return data
        }
    }
    const handleSearch = () => {
        navigation.navigate('Search', compound)
    }
    const handleChangeUnit = (val) => {
        setUnitConc(val)
        setValency()
    }

    const handleDetailResult = () => {
        console.log('navigate')
    }

    const handleCalculate = async () => {
        const data = await datas()
        if (data) {
            const results = await calculate(data);
            setResult(results)
        }
        // if (!isError) {
        //     const results = await calculate(data);
        //     setResult(results)
        // }
    }
    return (
        <View style={{ backgroundColor: "white", height: "100%", elevation: 10, position: 'relative' }}>
            <View style={{ margin: 16, flex: 1 }}>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subtitle}>Insert Compound : </Text>
                    <SearchCompound onEndEditing={(val) => handleSearch(val)} compound={compound} setCompound={(val) => setCompound(val)} error={isError} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subtitle}>Concentration :</Text>
                    <ConcentrationInput
                        setUnitConc={(val) => handleChangeUnit(val)}
                        setConcentration={(val) => setConcentration(val)}
                        concentration={concentration}
                        unitConc={unitConc}
                        error={isError}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subtitle}>Volume :</Text>
                    <VolumeInput
                        volume={volume}
                        setVolume={(val) => setVolume(val)}
                        error={isError} />
                </View>

                {unitConc === "N" ?
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.subtitle}>Valency :</Text>
                        <ValencyInput
                            valency={valency}
                            setValency={(val) => setValency(val)}
                            error={isError} />
                    </View>
                    : null}
                {result !== "" && !isError ?
                    <ResultComp result={result} callback={() => handleDetailResult()} />
                    : null}

                <View style={{ marginTop: 24, alignSelf: "flex-end", }}>
                    <TouchableOpacity style={styles.buttonAction} onPress={() => handleCalculate()}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center", paddingHorizontal: 8 }}>Calculate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MainComponents

const styles = StyleSheet.create({
    concentration: {
        backgroundColor: "yellow",
        height: 10
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#555",
        marginBottom: 8,
        marginLeft: 12
    },

    main: {
        marginTop: 30,
    },
    buttonAction: {
        backgroundColor: '#24aae2',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 20
    }
})