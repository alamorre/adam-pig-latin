#!/usr/bin/env node

// Function to convert a single word to Pig Latin
function convertToPigLatin(word) {
    // Handle empty strings
    if (!word) return word;
    
    // Preserve original capitalization
    const wasCapitalized = word[0] === word[0].toUpperCase();
    const lowerWord = word.toLowerCase();
    
    // Check if word starts with a vowel
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = lowerWord[0];
    
    let result;
    
    if (vowels.includes(firstLetter)) {
      // Words starting with vowels: add "way" to the end
      result = lowerWord + 'way';
    } else {
      // Words starting with consonants: move consonant cluster to end and add "ay"
      let consonantCluster = '';
      let i = 0;
      
      // Find all consonants at the beginning
      while (i < lowerWord.length && !vowels.includes(lowerWord[i])) {
        consonantCluster += lowerWord[i];
        i++;
      }
      
      // Special case for 'qu' combination
      if (lowerWord.substr(i-1, 2) === 'qu') {
        consonantCluster += 'u';
        i++;
      }
      
      result = lowerWord.slice(i) + consonantCluster + 'ay';
    }
    
    // Restore original capitalization if needed
    if (wasCapitalized) {
      result = result[0].toUpperCase() + result.slice(1);
    }
    
    return result;
  }
  
  // Main function
  function main() {
    // Get command line arguments (skip first two: node path and script path)
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      console.log('Usage: adam-pig-latin <text to convert>');
      console.log('Example: adam-pig-latin hello world');
      process.exit(1);
    }
    
    // Convert each word to Pig Latin
    const converted = args.map(word => convertToPigLatin(word));
    
    // Output the result
    console.log(converted.join(' '));
  }
  
  // Run the main function
  main();