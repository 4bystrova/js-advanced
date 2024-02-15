const car = {
    brand: "Land Rover",
    model: "Evoque",
    year: 2020,
}

const car2 = {
    brand: "Land Rover",
    model: "Evoque",
    owner: "Elena"
}

const car3 = {
    ...car,
    ...car2
}

console.log(car3);