const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  // if (word =! null || word =! undefined) {
  //   return `"${startWord}+${word}"`
  // }else(word= null,undefined){
  //   return
  // } 
  if (word == null||word == undefined) {
    return undefined
  } else if(word.includes(startWord)) {
    return word
  } else  {
    return startWord + word
  }
  
}

module.exports = fillStartWord

//test
