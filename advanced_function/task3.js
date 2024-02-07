function divide(numerator,denominator){
    if (denominator===0){
        console.log("Validation message: denominator is null")
    }
    else {

    if ((isNaN(denominator)) || (isNaN(numerator))){
        console.log("Validation message: denominator or numerator is not a number")
    }
    else  {

    let divideResult = numerator / denominator
    return  console.log(`The result of division is ${divideResult}`)
    }
}
}

try{
    divide(10,5)
} catch(e){
    console.log("Some error has happened:", e.message)
} finally {
    console.log("Робота завершена")
}

try{
    divide(5,8)
} catch(e){
    console.log("Some error has happened:", e.message)
} finally {
    console.log("Робота завершена")
}

try{
    divide(5,0)
} catch(e){
    console.log("Some error has happened:", e.message)
} finally {
    console.log("Робота завершена")
}

try{
    const someText = "some text"
    divide(25,someText)
} catch(e){
    console.log("Some error has happened:", e.message)
} finally {
    console.log("Робота завершена")
}