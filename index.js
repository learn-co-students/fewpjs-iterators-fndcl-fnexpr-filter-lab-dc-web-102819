const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// Code your solution here
function findMatching(drivers, query) {
	return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
	return drivers.filter(driver => driver.slice(0, query.length).toLowerCase() == query.toLowerCase());
}

function matchName(drivers, query) {
	return drivers.filter(driver => driver.name === query);
}