function validateBrackets(string) {
  let openBrackets = [];
  let closeBrackets = [];
  const matchingPair = {
    ']': '[',
    ')': '(',
    '}': '{'
  };
  
  for (i = 0; i < string.length; i++) {
    // For open Brackets
    if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
      openBrackets.push(string[i])
    }
    // For close Brackets
    if (string[i] === ")" || string[i] === "]" || string[i] === "}") {
      if (openBrackets[openBrackets.length - 1] === matchingPair[string[i]]) {
        openBrackets.pop()
      } else {
        closeBrackets.push(string[i])
        if (closeBrackets.length > openBrackets.length) {
          return false;
        }
      }
    }
  }
  
  if (openBrackets.length === 0 && closeBrackets.length === 0) {
    return true;
  } else {
    return  false
  }
}

console.log(validateBrackets("({}[]{[]})"))

//--------------------------------------------
function wordOccurrences(string) {
  const punctuationless = string.replace(/[.,\/?";:!/]/g,"").replace(/\s{2,}/g," ");
  const words = punctuationless.split(' ');
  const excludeWords = ['a', 'an', 'and', 'be', 'for', 'it', 'of', 'the']

  const filteredArray = words.filter((word) => excludeWords.indexOf(word) === -1)
  const wordCoundMap = filteredArray.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  console.log(wordCoundMap);
}
wordOccurrences('This.,  is! ?an?  example! ; of, "a:  string with punctuation');

//--------------------------------------------
// find the sume of all numbers from 1 to 1000 which is multplied by 3 or 5
const fillRange = (start, end) => {
  return Array(end - start + 1).fill().map((item, index) => start + index);
};
const a = fillRange(0, 1000 - 1);

const result = a.reduce((prev, cur) => {
  if (cur % 5 === 0 || cur % 3 === 0 ) 
    return prev += cur; 
  else
    return prev;
})

console.log(result); 

//-----------------------------------------------
function encrypt(string, cipher) {
  var isNumber = typeof cipher === 'number';
  if(isNumber === 'false') {
    return 'Cipher must be a number';
  }

  var a = string.split(''); //splits string to array of characters
  
  var encrypted = ''; //make value to hold encrypted message
  const regex = /^[a-zA-Z]/g;
  for(var i = 0; i < a.length; i++) {
    const b = a[i].match(regex);
    if (b) {
      const asciiVal = a[i].charCodeAt(0); //converts to ascii value
      
      let asciiCipherVal = asciiVal + cipher; //do the super complex encryption

      if(asciiCipherVal > 122) { //is the new string value past 'z'
        asciiCipherVal = 97 + (asciiCipherVal - 123); //start over at 'a' and start counting up
      }

      const encryptedVal = String.fromCharCode(asciiCipherVal); //converts ascii to string
      encrypted = encrypted + encryptedVal; //add encrypted value to encrypted string
    } else {
      encrypted = encrypted + a[i];
    }
  }
  
  return encrypted;
}

console.log(encrypt('middle-Outz', 2));

//-------------------------------------------------------------------------------
//how to balance parenthesis function
function balanceParens(string) {
  return !string.split("").reduce((prev, char) => {
    if (prev < 0) { return prev;}
    if (char === "(") {return ++prev;}
    if (char === ")") {return --prev;}
    return previous;
  }, 0);
}

balanceParens("((()))");

//--------------------------------------------------------