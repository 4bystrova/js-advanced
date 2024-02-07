function handleNum(num, isEven,isOdd){
    if(num % 2 === 0){
        isEven()
    }
    else
        isOdd()
}

function handleEven(){
    console.log("number is even")
}

function handleOdd(){
    console.log("number is odd")
}

handleNum(20,handleEven,handleOdd)