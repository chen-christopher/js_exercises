//chapter 6

//rpg

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points`;
  },
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

aurora.describe();
//Dog
function Dog(name, species, size) {
  this.name = name;
  this.species = species;
  this.size = size;
  this.bark = () => "Grrr! Grrr!";
}
let fang = new Dog("Fang", "boarhound", "75");

console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

//bank account
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  this.credit = (amount) => {
    this.balance += amount;
  };
  this.describe = () =>
    console.log(`Owner: ${this.name}, Balance: ${this.balance}`);
}

const alexAcc = new Account("Alex", 0);
alexAcc.describe();
alexAcc.credit(250);
alexAcc.credit(-80);
alexAcc.describe();

//CHAPTER 7

//sum
//can i just declare the array with the values?
//const values = [3, 11, 7, 2, 9, 10];
const values = [];
let sum = 0;
values.push(3);
values.push(11);
values.push(7);
values.push(2);
values.push(9);
values.push(10);

for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
console.log(sum);

//max num in array
const values2 = [3, 11, 7, 2, 9, 10];

const findMax = () => {
  let maxNum = 0;
  for (let i = 0; i < values2.length; i++) {
    if (maxNum < values2[i]) {
      maxNum = values2[i];
    }
  }
  return maxNum;
};

//CHAPTER 8

//backwards word

const backwardsWord = (word) => {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};

console.log(backwardsWord("hello"));

//alternative way using 2 pointers
const reverseWord = (word) => {
  //pointer to first index and pointer to last index
  let left = 0;
  let right = word.length - 1;

  //convert string to array
  word = Array.from(word);

  while (right > left) {
    //get value of beginning index and value of end idnex
    const tempStart = word[left];
    const tempEnd = word[right];
    //swap the values
    word[left] = tempEnd;
    word[right] = tempStart;
    //increment/decrement
    left++;
    right--;
  }
  word = word.join(""); //convert to string using join with the separator of empty string
  return word;
};

console.log(reverseWord("bad"));

//palindromes

const palindromes = (word) => {
  //just lower case in case of uppercase chars,
  word.toLowerCase();
  //kinda similar to above with a variable starting at 0 and other at word.length -1
  let left = 0;
  let right = word.length - 1;

  while (right > left) {
    //see if first letter === last letter
    if (word[left] === word[right]) {
      //if it is, continue and incremnet/decrement
      left++;
      right--;
    } else {
      //if not exit and return false
      return false;
    }
  }
  //if pass through all, then return true
  return true;
};

console.log(palindromes("radar"));
