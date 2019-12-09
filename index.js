// Code your solution here
function findMatching(drivers, queryDriver) {
    return drivers.filter(driver => {
        return queryDriver.toUpperCase() === driver.toUpperCase();
    });
}

function fuzzyMatch(drivers, queryBegin) {
    let queryLength = queryBegin.length
    return drivers.filter(driver => {
        return queryBegin === driver.slice(0, queryLength);
    });
}

function matchName(drivers, queryName) {
    return drivers.filter(driver => {
        return driver.name == queryName;
    });
}