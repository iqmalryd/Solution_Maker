const Calculate = (data) => {
    const { concentration, mr, volume, valency } = data
    console.log("ini dari calculate", data)
    switch (data.unit) {
        case "M":
            const resultM = concentration * mr * volume / 1000
            return resultM.toFixed(2)
        case "N":
            const bst = mr / valency
            const resultN = concentration * bst * volume / 1000
            return resultN.toFixed(2)
        case "%":
            const percent = concentration * volume / 100
            return percent.toFixed(2)
        case "PPM":
            const ppm = (concentration * volume / 1000) / 1000
            return ppm
        case "PPB":
            const ppm2 = (concentration * volume / 1000) / 1000
            return ppm2 / 1000
        case "PPT":
            const ppm3 = (concentration * volume / 1000) / 1000
            return ppm3 / 1000000
        default:
            break;
    }

}

export default Calculate
