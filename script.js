function greeting (name) {
    return 'Hello ' + name;
}

console.log(greeting('Peter'));

// const greeting2 = (name) => {
//     return 'Hello ' + name;
// }

// console.log(greeting('Peter'));


const greeting2 = (name) => 'hello ' + name;

console.log(greeting2('peter'));


const numbers = [1, 2, 3, 4, 5];

// const numbersDoubled = numbers.map(function (item) {
// return item * 2;
// })


const numbersDoubled = numbers.map((item) => item * 2);

console.log('numbersDoubled ' + numbersDoubled);




const people = [
    {name: 'John', age: 25},
    {name: 'Mary', age: 30},
    {name: 'Bob', age: 35}
];

const peopleNames = people.map(function (item) {
return item.name
})

console.log(people);
console.log(peopleNames);







const squaredNumbers = numbers.map(item => item * item);
console.log(squaredNumbers);


