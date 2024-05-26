// 1. Write a function which converts the input string to uppercase.
let myName = 'katya';
function makeUpperCase(str) {
    // Code here
    return str.toUpperCase();
  }
  console.log(makeUpperCase(myName)); //KATYA

  // This problem was not challenging since their is a method available for it.

  //2. Double an intenger
  function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }

// Another very simple chanllenge, since it was just multiplication


// 3. A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
    //Get Coding
      const bulletsPerDragon = bullets / dragons;
      if (bulletsPerDragon >= 2) { 
        return true;
    } else {
      return false;
    }
    }

// This challenges, wasn't too bad, I did have to think a little about exactly what they 
//  were asking for, but once I got that down, the solution was simple.


// 4. You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
   arr.forEach((number) => {
    if (number > 0) {
      
      sum = sum + number;
      
 }
 })
   return sum;
 }

// What I liked about this challenge, was that it allowed me to master
// the forEach() method.


// 5. Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation){
    if (vacation === true) {
      return false;
    } else if (employed === true && vacation === false) {
      return true
    } else {
      return false
    } 
  };

 // This one was challenging because I wanted to make sure that I wasn't repeating myself
 // and that all possible combinations were included, in order to not cause an error.

//  6. Convert number to reversed array of digits

function digitize(n) {
    const final = [];
    // Turn number into a string
    newString = n.toString();
    console.log(newString);

    //split string
    numArr = newString.split("");
    console.log(numArr);

    for(i = 0; i < numArr.length; i ++) {
        final.push(Number(numArr[i]));
    }

    // sort array
    final.reverse()

    return final
   
}

// This one was pretty challenging for me, it took a lot of problem solving, because
// it involved a good amount of steps.

// 7.Counting sheep...

function countSheeps(sheep) {
    // TODO
    let numberOfSheep = 0;
    // loop through an array 
    for ( i = 0; i < sheep.length; i ++)
    // count true
    if (sheep[i] === true) {
      numberOfSheep += 1;
  }   
    //return how many were true
    return numberOfSheep;
  }

  // This one was not too challenging and it helped me for the next challenge that 
  // I  would have, since then I have learned more about the forEach() method,
  // which is what I would probably use now

//   8. Even or Odd
function evenOrOdd(number) {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  // This was easy since we had done similiar problems before 