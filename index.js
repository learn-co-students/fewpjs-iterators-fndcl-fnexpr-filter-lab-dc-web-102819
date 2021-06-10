// Code your solution here

drivers = ['Bobby', 'Sammy', 'Sylly', 'Annette', 'Sarah', 'bobby']
function findMatching(drivers, string){
    const names = drivers.filter(name => name.toLowerCase() === string.toLowerCase())
    return names
}


// const fuzzyMatch =(drivers, string) => {
//     const names = drivers.filter(name => name.indexOf(string) === string.indexOf(string))
//     return names
// }

function fuzzyMatch(drivers, string){
    return drivers.filter(name => name.indexOf(string) === string.indexOf(string))
}


function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
}