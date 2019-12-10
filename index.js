// Code your solution here
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

function findMatching(arr, driver_name) { 
    return arr.filter(name => name.toUpperCase() === driver_name.toUpperCase())
};

function fuzzyMatch(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) === 0;
    })
};

function matchName(arr, string) {
    return arr.filter(person => person.name === string)
};
