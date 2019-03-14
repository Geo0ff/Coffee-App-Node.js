const yargs = require ('yargs')
const coffee = require("./coffee")

const command = process.argv[2]

if (command === 'add') { 
    console.log('added coffee order ')
    coffee.addOrder(yargs.argv.order) 
} else if (command === 'remove') {
    console.log('removed remove coffee order') 
    coffee.removeOrder(yargs.argv.order)
}else if (command === 'list' ) { 
    console.log('listed coffee orders' )
    coffee.listOrder(yargs.argv.order)
}else if (command === 'load' ) { 
    console.log('loaded coffee orders' )
    coffee.loadOrder(yargs.argv.order)
}else {
 console.log('unknown command') 
}
