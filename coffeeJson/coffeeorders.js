const fs = require ('fs')
const coffeelist = { 
    coffeetype:["Americano", "Capuccino","Flat White","Latte"],
    coffesize:["Large","Regular"],
    coffeprice:["5£","4£","3£"]

}
const coffeelistJSON = JSON.stringify(coffeelist)
console.log(coffeelistJSON)

fs.writeFileSync('coffeelist.json',coffeelist.JSON)
const dataBuffer = fs.readFileSync('coffeelist.json')
console.log(dataBuffer) 

const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)
console.log(data) 



