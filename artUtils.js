const Q = require('Q');
const figlet = require('figlet');

const figletAsync = Q.nbind(figlet);
const generateAsciiArt = async str => {
    const art = await figletAsync(str);
    return art;
};

module.exports = {
    generateAsciiArt: generateAsciiArt
}