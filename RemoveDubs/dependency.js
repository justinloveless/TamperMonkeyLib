async function logStuff(){
    console.log("This is a log message");
    const removeDubs = await import("https://raw.githubusercontent.com/justinloveless/TamperMonkeyLib/main/RemoveDubs/Remove Dubs.js");
    removeDubs.toggleDubs();
}