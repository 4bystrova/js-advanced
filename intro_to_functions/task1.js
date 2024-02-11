function getAreaDeclaration(width, height){
    const area = width * height
    return area
}
console.log(getAreaDeclaration(5, 10))

const getAreaExpression = function (width, height) {
    return width * height;
}
console.log(getAreaExpression(5, 10))

const getAreaArrow = (width, height) => {
    return width * height;
}
console.log(getAreaArrow(5, 10))