// Code your solution here
function matchName(driverList, driverName) {
    let matchingDriverName = driverList.filter(driver => driver.name === driverName)
    return matchingDriverName
}

function findMatching(driverList, driverName) {
    return driverList.filter(driver => driver.toLowerCase() === driverName.toLowerCase())
}

function fuzzyMatch(driverList, chars) {
    return driverList.filter(driver => driver.indexOf(chars) === chars.indexOf(chars))
}