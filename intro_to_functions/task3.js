function checkOrder(available, ordered){
    if (available <  ordered){
        message = "Your order is too large, we don’t have enough goods."
        return message
    }
    if (ordered === 0){
        message = "Your order is empty"
        return message
    }
    if (available >= ordered){
        message = "Your order is accepted"
        return message
    }
}

console.log(checkOrder(6,10 ))