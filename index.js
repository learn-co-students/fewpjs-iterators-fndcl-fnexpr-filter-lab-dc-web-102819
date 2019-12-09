// Code your solution here
function findMatching(drivers, name) {
	let matching = drivers.filter( n => { return n.toLowerCase() === name.toLowerCase() }) 
	return matching
}

function fuzzyMatch(drivers, driv) {
	let matching2 = drivers.filter( n => {return checkLetters(n,driv)})
	return matching2
}

function matchName(drivers, driv) {
	let match = drivers.filter(n => {return (n.name === driv)})
	return match
}


function checkLetters(driver, str) {
	for(let i = 0; i < str.length; i++) {
		if (driver.charAt(i) === str.charAt(i)) {
		}
		else {
			return false
		}
	}
	return true
}
