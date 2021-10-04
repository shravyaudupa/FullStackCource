let manufacturer = "ssss"

let car = {
    name: "C Class",
    manufacturer: "gggg",
    print: () => {
       console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}

console.log(Object.keys(car))
console.log(Object.values(car))