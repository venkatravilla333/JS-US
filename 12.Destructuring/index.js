
// var person = {
//   name: 'sachin',
//   age: 45,
//   address: { road: 101, city: 'mumbai' },
//   properties: ['sara', 'arjun', {bats: 10, cash: 100000}]
// }

//without

// console.log(person.name)
// console.log(person.age)
// console.log(person.address.road)
// console.log(person.address.city)
// console.log(person.properties[0])
// console.log(person.properties[1])
// console.log(person.properties[2].bats)
// console.log(person.properties[2].cash)

//with

// var {name, age, address: {road, city}, properties: [ch1, ch2, {bats, cash}]} = person

// console.log(name)
// console.log(age)
// console.log(road)
// console.log(city)
// console.log(ch1)
// console.log(ch2)
// console.log(bats)
// console.log(cash)

var arr = ['sachin', 45, { bats: 10, cash: 100000 }, ['sara', 'arjun']]

//with

var [name1, age, { bats, cash }, [name2, name3]] = arr

console.log(name1)
console.log(age)
console.log(bats)
console.log(cash)
console.log(name2)
console.log(name3)
