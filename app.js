let manufacturer = "ssss"

let car = {
    name: "C Class",
    manufacturer: "gggg",
    print:function () {
       console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}

car.print()