/*  Your application should: 
1. Use readlineSync.question() to prompt a user for input 
2. Prompt a user for an index number to find the character at that index 
3. Use bracket notation to access the character 
4. Print out the character 
Setup 
1.  Make sure you  install readline-sync following the instructions in the 
Lesson: Values, Data Types, and Operations - 4. 
2. For this activity, you will create your own repository to store your code: 
1. Create a new repository. 
2. Name it: practice-character-checker-[Your First Name]-[Your Last 
Initial] 
3. Make sure the repository is public. 
4. Clone the repository to your local machine. 
5. Start working on the code. 
6. When you are finished, commit your changes and push them to your 
repository. 
*/

const readline = require('readline-sync'); // readline-sync module is required to get user input
let input = readline.question("Please enter a word or phrase: "); // prompt user for input of Text
let index = readline.question("Select a number between 0 and total # of input characters: "); // prompt user for input of index number
let char = input[index]; // get the character at the index number
console.log(`The character at index ${index} is: ${char}`); // print out the character at the index number
