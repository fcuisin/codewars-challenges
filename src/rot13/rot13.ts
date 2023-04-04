/*
 *  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
 *  Create a function that takes a string and returns the string ciphered with Rot13.
 */

export const rot13 = (message: string): string => {
  return message
    .split("")
    .map((char) => {
      if (/^[a-zA-Z]+$/.test(char)) {
        return String.fromCharCode(
          char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13)
        );
      }
      return char;
    })
    .join("");
};
