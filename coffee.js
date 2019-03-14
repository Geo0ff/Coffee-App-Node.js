const fs = require('fs')

const addOrder = (myOrder) => {
    const allOrders = loadOrder();
    allOrders.push({ Order: myOrder })
    saveOrder(allOrders);
}
const listOrder = () => {
    const allOrders = loadOrder();
    allOrders.map((Order) => {
        console.log(Order)
    })
}
const loadOrder = () => {
    try {
        const dataBuffer = fs.readFileSync('coffee.json');
        const coffeeJSON = dataBuffer.toString();
        return JSON.parse(coffeeJSON)
    } catch (error) {
        return [];
    }
}
const saveOrder = (coffee) => {
    const coffeeJSON = JSON.stringify(coffee)
    fs.writeFileSync('coffee.json', coffeeJSON)
}
const removeOrder = (deleteCoffee) => {
    const allOrders = loadOrder();
    const coffeeToKeep = allOrders.filter((coffee) => {
        return coffee.Order !== deleteCoffee
    })
    saveOrder(coffeeToKeep);
}
module.exports = {
    addOrder,
    listOrder,
    loadOrder,
    saveOrder,
    removeOrder
}