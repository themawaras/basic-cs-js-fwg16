function palindrome(word) {
  let temp = "";
  for (let i = word.length - 1; i >= 0; i--) {
    // console.log(word[i]);
    temp = temp + word[i];
  }
  if (temp !== word) {
    return `${word} bukan palindrome`;
  }
  return `${word} palindrome`;
}

console.log(palindrome("siang"));
console.log(palindrome("malam"));
