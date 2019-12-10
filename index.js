// Code your solution here
function findMatching(driversList, input){

let found =  driversList.filter(driver => driver.toUpperCase() === input.toUpperCase())
return found

}

function fuzzyMatch(driversList, char){

    let found =  driversList.filter(driver => driver.indexOf(char) === 0)
return found
}

function matchName(driversList, input){

    let found =  driversList.filter(driver => driver.name === input)
    
    return found
    }

