"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function countCharactersAndWords(input) {
    // Remove whitespace characters from the input
    const cleanInput = input.replace(/\s/g, '');
    // Count the number of characters
    const characters = cleanInput.length;
    // Count the number of words
    const words = cleanInput.split(/\s+/).filter((word) => word !== '').length;
    return { characters, words };
}
// Function to get user input
function getUserInput(prompt) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            resolve(input);
        });
    });
}
// Main function
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get input from the user
            const inputParagraph = yield getUserInput('Enter an English paragraph: ');
            // Count characters and words
            const result = countCharactersAndWords(inputParagraph);
            // Print the results
            console.log(`Number of characters (excluding whitespace): ${result.characters}`);
            console.log(`Number of words (excluding whitespace): ${result.words}`);
            // Close the readline interface
            rl.close();
        }
        catch (error) {
            console.error('An error occurred:', error);
        }
    });
}
// Call the main function
main();
