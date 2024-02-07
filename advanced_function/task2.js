function decreaseNum(startValue) {
    console.log(startValue)
    if (startValue > 0) {
        decreaseNum(startValue - 1)
    }
}

decreaseNum(6)


