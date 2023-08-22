const promptSync = require('prompt-sync')({sigint:true});

const promptInstance = promptSync({
	sigint: true // allows CTRL+C to exit the app
});

let userInput = null;
let userEnteredNumber = false;
do {
  userInput = promptInstance("what is the coolest number in the universe?");
  
  let userInputAsNumber = Number(userInput);
  
  if (userInput == 42){
    console.log("The universe thanks you for figuring out the answer!!");
    userEnteredNumber = true;
  } else {
    console.log("The universe seems unfulfilled...");
  }
} while(!userEnteredNumber);



// let {messagesToShare} = require('./messageList');

// function helloWorld(someMessageToSay){
// 	console.log(someMessageToSay);
// }


// helloWorld("hello there!");

// for (const message of messagesToShare) {
// 	helloWorld(message);
// }