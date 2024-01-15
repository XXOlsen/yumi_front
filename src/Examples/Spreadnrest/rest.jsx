// destructuring
const [first, ...restOfNumbers] = [1, 2, 3, 4, 5];



// operator in function arguments
function logDetails(name, age, ...hobbies) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
  }
  
  logDetails('John', 25, 'Reading', 'Coding', 'Traveling');
  