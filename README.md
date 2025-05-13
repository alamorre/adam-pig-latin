# adam-pig-latin

A simple CLI tool to convert text to Pig Latin.

## Installation

Install globally using npm:

```bash
npm install -g adam-pig-latin
```

## Usage

After installation, you can use the command from anywhere in your terminal:

```bash
adam-pig-latin hello world
```

Output:
```
ellohay orldway
```

## How it works

The tool converts English words to Pig Latin following these rules:

1. **Words starting with vowels**: Add "way" to the end
   - Example: "apple" → "appleway"

2. **Words starting with consonants**: Move all consonant letters before the first vowel to the end and add "ay"
   - Example: "hello" → "ellohay"
   - Example: "string" → "ingstray"

3. **Special case**: The "qu" combination is treated as a single consonant unit
   - Example: "queen" → "eenquay"

4. **Capitalization**: Original capitalization is preserved
   - Example: "Hello" → "Ellohay"

## Examples

```bash
# Single word
adam-pig-latin hello
# Output: ellohay

# Multiple words
adam-pig-latin hello world how are you
# Output: ellohay orldway owhay areway ouyay

# With capitalization
adam-pig-latin Hello World
# Output: Ellohay Orldway
```

## Development

To work on this project locally:

1. Clone the repository
2. Run `npm install`
3. Make your changes
4. Test locally with `node index.js hello world`

## License

MIT