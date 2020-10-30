const cowsay = require("cowsay");
const myself = require('./information');
console.log(
    cowsay.say({
        text:`I am ${myself.name}, from ${myself.campus} campus!`
}));