/*
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");


//Numbers
//Up calculate below value.
console.log(2**69.76);
console.log(2.998e80);

//Arithmetic
console.log(100+4*11);
console.log((100+4)*11);

//Speatial number
console.log(0/0);
console.log(Infinity - Infinity);
console.log(Infinity - 13654);

//String
console.log(`Emon \n    Khan`);
console.log("Emon");
console.log('Emon');
//string ar vitor $ with{} like ${} babohar kore amra value or variable pass korte pari.
var equ = "a2 + 2ab + b2"
console.log(`half of 100 is = ${100 / 2}`);
console.log("(a + b)2 = ${equ}");



//Unary Operators
console.log(typeof 4.5);
console.log(typeof "x");
//written in different way
var num = typeof(545);
console.log(num);
var srt = typeof("Emon Khan");
console.log(srt);


//Unary Operation
console.log(3 > 2);
console.log(3 < 2);
console.log("Aardvark" < "Zoroaster")
// → true
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
console.log(NaN == NaN)//*************important
// → false



//Logical Operation
console.log(true && false)
console.log((10>5) && (5>10));//true and false condition dile output ***false*** dibe
// → false
console.log(true && true)
// → true
console.log(false && false)
//false
console.log(false || true)
// → true
console.log(false || false)
// → false
console.log(true || true)
// → trues
//var num = (1 + 1 == 2) && (10 * 10 > 50);
console.log(true ? 100*40 : 40); //true dile left side ar value nibe.
console.log(false ? 40 : 100); // false dile right side ar value nibe.

//Short circuit of logical operator.
console.log(Infinity || null)
console.log(null || "Emon")
console.log("Emon" || Infinity)
console.log("Agnes" || "user")
*/

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
};
repeat(3, console.log);