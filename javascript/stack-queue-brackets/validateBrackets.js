'use strict';

const Stack = require('./stack');


function validateBrackets(string){

  let bracketsStack = new Stack();

  for(let i=0; i < string.length; i++){
    if (string[i] === '{' || string[i] === '[' || string[i] === '('){
      bracketsStack.push(string[i]);
    } else if (string[i] === '}' || string[i] === ']' || string[i] === ')'){
      if (bracketsStack.isEmpty()){
        return false;
      } else if ((bracketsStack.peek() === '{' && string[i] === '}') || (bracketsStack.peek() === '(' && string[i] === ')') || (bracketsStack.peek() === '[' && string[i] === ']')){
        bracketsStack.pop();
      } else {
        return false;
      }
    }
  }

  if(bracketsStack.isEmpty()){
    return true;
  } else{
    return false;
  }
}

module.exports = validateBrackets;
