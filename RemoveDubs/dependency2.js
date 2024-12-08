async function logStuff(){
    console.log("This is a log message");
    const removeDubs = require("https://raw.githubusercontent.com/justinloveless/TamperMonkeyLib/main/RemoveDubs/Remove Dubs.js");
    removeDubs.toggleDubs();
}