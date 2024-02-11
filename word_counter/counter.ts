import * as readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countCharactersAndWords(input: string): {
  characters: number;
  words: number;
} {
  // Remove whitespace characters from the input
  const cleanInput = input.replace(/\s/g, '');

  // Count the number of characters
  const characters = cleanInput.length;

  // Count the number of words
  const words = cleanInput.split(/\s+/).filter((word) => word !== '').length;

  return { characters, words };
}

// Function to get user input
function getUserInput(prompt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input: string) => {
      resolve(input);
    });
  });
}

// Main function
async function main() {
  try {
    // Get input from the user
    const inputParagraph = await getUserInput('Enter an English paragraph: ');

    // Count characters and words
    const result = countCharactersAndWords(inputParagraph);

    // Print the results
    console.log(
      `Number of characters (excluding whitespace): ${result.characters}`
    );
    console.log(`Number of words (excluding whitespace): ${result.words}`);

    // Close the readline interface
    rl.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the main function
main();
