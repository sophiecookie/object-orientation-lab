/// ////////////// PROBLEM 1 ////////////////////

// Modify the function below to return the firstName property of the person object.

function personName() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person.firstName; // Code here
}

console.log(personName());

/// ////////////// PROBLEM 2 ////////////////////

// Modify the function below to return the location property of the person object.  Use bracket notation

function personLocation() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person["location"]; // Code Here
}

console.log(personLocation());

/// ////////////// PROBLEM 3 ////////////////////

/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here
const favoriteThings = {
  band: '21 Pilots',
  food: 'Curry',
  person: 'mom',
  book: 'Harry Potter',
  movie: 'Harry Potter',
  holiday: 'Christmas'
}

console.log(favoriteThings);

/// ////////////// PROBLEM 4 ////////////////////

//Create a variable called userFirstName.  Assign it the value of the person's firstName property, using dot notation.

const person = {};
person['firstName'] = 'sally';

// Code Here
const userFirstName = person.firstName;

console.log(userFirstName);

/// ////////////// PROBLEM 5 ////////////////////

// In the function updateUser, change the user parameter's name to Ryan, change the value of pwHash to superSafe
// and change the value of username to ryan2020. After you have updated all the values return the object.

// The existing user looks like this:
// const someUser = {
//   name: 'Sally Rally',
//   pwHash: 'U+Ldlngx2BYQk',
//   username: 'SallyRally801'
// };

function updateUser(user) {
  // Code Here
  user.name = 'Ryan';
  user.pwHash = 'superSafe';
  user.username = 'ryan2020';
  return user;
}

const user = {};
console.log(updateUser(user));

/// ////////////// PROBLEM 6 ////////////////////

// In the function updateProfile, update the value of the given property to the given value. Return the updated object.
//
// The existing profile looks like this:
// const userProfile = {
//    email: 'test@google.com',
//    pwHash: 'V-9n5bQyu81z0',
//    location: 'Denver, CO'
// }
//
// So updateProfile(userProfile, 'email', 'blah@yahoo.com') would update the email to 'blah@yahoo.com'

function updateProfile(profile, property, value) {
  // Code here
  profile[property] = value;
  return profile;
}

const userProfile = {
  email: 'test@google.com',
  pwHash: 'V-9n5bQyu81z0',
  location: 'Denver, CO'
  }

console.log(updateProfile(userProfile, 'email', 'blah@yahoo.com'));

/// ////////////// PROBLEM 7 ////////////////////

// Inside the maxedOut function, loop over the given object using a for...in loop
// to change all the object property values to "max".
// Return the updated object.

function maxedOut(obj) {
  // REPLACE THIS WITH YOUR CODE
  for (const key in obj){
    obj[key] = 'max';
  }
  return obj;
}

console.log(maxedOut(userProfile));

/// ////////////// PROBLEM 8 ///////////////////

/*
  Write a function called double that takes in an object.
  Write a for...in loop that loops over the object and changes every value to be itself multiplied by 2.
  Return the updated object.
*/

//Code Here

function double(obj) {
  for(const key in obj){
    obj[key] *= 2;
  }

  return obj;
}

const fruits = {
  apple: 2,
  banana: 5,
  grape: 3
}

console.log(double(fruits));

/// ////////////// PROBLEM 9 ///////////////////

/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/

//Code Here

function removePassword(obj){
  delete obj.password;
  return obj;
}

const userProfile2 = {
  email: 'test@google.com',
  password: 'V-9n5bQyu81z0',
  location: 'Denver, CO'
  }

console.log(removePassword(userProfile2));

/// ////////////// PROBLEM 10 ////////////////////

// Here we have a function called getValues that will take in an object.
// Return an array containing all the object's values.

function getValues(obj) {
  // REPLACE THIS WITH YOUR CODE
  return Object.values(obj);
}

console.log(getValues(userProfile));

/// ////////////// PROBLEM 11 ////////////////////

// Use the spread operator to copy the given array.
// Then, add the string "copy" to the end of the copy and return the copy.

function copyArray(arr) {
  // REPLACE THIS WITH YOUR CODE
  let arrCopy = [...arr];
  arrCopy.push("copy");
  return arrCopy;
}

const randomArray = [1, 3, 4, 8];

console.log(copyArray(randomArray));

/// ////////////// PROBLEM 12 ////////////////////

// Use the spread operator to copy the given object.
// Then, add a new key-value pair {copy: true} to the end of the copy and return the copy.

function copyObject(obj) {
  // REPLACE THIS WITH YOUR CODE
  let objCopy = {...obj};
  objCopy.copy = true;
  return objCopy;
}

console.log(copyObject(userProfile));

/// ////////////// PROBLEM 13 ////////////////////

// Do not edit the code below.
const animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0,
};
// Do not edit the code above.

// Use object destructuring syntax to create variables for each of the properties of the
// animalCount object.

// REPLACE THIS WITH YOUR CODE
const {cats, dogs, mice} = animalCount;

console.log(cats);
console.log(dogs);
console.log(mice);

/// ////////////// PROBLEM 14 ////////////////////

// Write a function called addition that takes in an array containing 2 numbers.
// In the function, use array destructuring to create variables for each of the numbers.
// Then return the sum of the two numbers.

// REPLACE THIS WITH YOUR CODE

function addition(arr){
  const[num1, num2] = arr;
  return num1 + num2;
}

numArray = [6, 2];
console.log(addition(numArray));


/// ////////////// PROBLEM 15 ////////////////////

// Create a function called zooAnimals that will take an object parameter
// The object passed to this function will have the property names lion, tiger, and bear
// The values of these properties will be a number representing the count of that animal in the zoo
// Using object destructuring, return the total sum of the counts of these animals

// REPLACE THIS WITH YOUR CODE
function zooAnimals(obj){
  const{lion, tiger, bear} = obj;
  return lion + tiger + bear;
}

const zoo = {
  lion: 3,
  tiger: 2,
  bear: 1
}

console.log(zooAnimals(zoo));

/// ////////////// PROBLEM 16 ///////////////////

// Do not edit the code below.
const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true,
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true,
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true,
    },
  ],
};
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array (which is a property of the myCar object).
    3. For each accident, change atFaultForAccident from true to false.
*/

function recordCleaner(obj){
  for(const item of obj.accidents){
    item.atFaultForAccident = false;
  }

  return obj;
}

console.log(recordCleaner(myCar));

