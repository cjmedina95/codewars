// ====PROBLEM DESCRIPTION====
// In this example you have to validate if a user input string is alphanumeric. 
// The given string is not nil/null/NULL/None, so you don't have to check that.
//
// The string has the following conditions to be alphanumeric:
// * At least one character ("" is not valid)
// * Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// * No whitespaces / underscore

// ====SOLUTION DESCRIPTION====
// The function does a basic charCodeAt check to determine whether the DEC values
// of the given character are within the specified ranges of the problem 
// (lowercase, uppercase, and numerical).
// Originally, the function utilized RegEx, but it was suggested RegEx performance
// was significantly worse: https://stackoverflow.com/a/25352300
function alphanumeric(string){
  if (string.length < 1) return false;
  for (let i = 0; i < string.length; i++) {
    if (!(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) &&
        !(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) &&
        !(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57))
      return false;      
  }
  
  return true;
}
