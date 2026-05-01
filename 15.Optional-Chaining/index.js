


var person = {
  name: 'sachin',
  age: 45,
  address: {road: 101}
}

// console.log(person.address.road)
// console.log(person.address1.road)
// console.log(person && person.address1 && person.address1.road) //ES-5 
console.log(person.address1?.road) //ES-11 //optional chaining