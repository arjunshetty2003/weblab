/**
 * Exercise 7: Represent a small bilingual lexicon as a Javascript object in the
 * following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", 
 * "new":"nytt", "year":"år"} and use it to translate your Christmas cards from
 * English into Swedish.
 */

// Create the English to Swedish lexicon
const lexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
};

/**
 * Translates an English text to Swedish using the lexicon
 * @param {string} text - The English text to translate
 * @returns {string} - The translated Swedish text
 */
function translateToSwedish(text) {
    // Convert text to lowercase and split into words
    const words = text.toLowerCase().split(/\s+/);
    
    // Translate each word if it exists in the lexicon
    const translatedWords = words.map(word => {
        // Remove any punctuation for lookup
        const cleanWord = word.replace(/[^\w]/g, '');
        
        // Get translation or keep original word if not in lexicon
        const translation = lexicon[cleanWord] || cleanWord;
        
        // Preserve any punctuation
        return word.replace(cleanWord, translation);
    });
    
    // Join the translated words back into a sentence
    return translatedWords.join(' ');
}

// Test cases
console.log("Original English greeting: Merry Christmas and Happy New Year!");
console.log("Swedish translation: " + translateToSwedish("Merry Christmas and Happy New Year!"));

console.log("\nOriginal English greeting: Happy New Year to you!");
console.log("Swedish translation: " + translateToSwedish("Happy New Year to you!"));
