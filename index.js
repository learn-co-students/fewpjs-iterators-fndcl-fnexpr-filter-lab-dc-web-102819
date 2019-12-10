// Code your solution here


function findMatching(array,str) {
    let matching = array.filter( name => { return name.toLowerCase() === str.toLowerCase() })
    return matching 
}


function fuzzyMatch(array,str) {
    
    let matching = array.filter( name => { return  name.startsWith(str)    })
    return matching 

}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(array,str) {

    let matching = array.filter( driver => { return driver.name === str }    ) 
    return matching 

}
