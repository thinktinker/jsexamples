// 1. Regular expression to check if value is empty or a white space: https://www.freecodecamp.org/news/how-to-include-empty-string-in-regex/
// The test() method of RegExp instances executes a search with this regular expression for a match between a regular expression and a specified string.

function isEmpty(value){
    // Fill in the validation condition using regular expressions
    // And return the results
    var regex = new RegExp(/^(?=\s*$)/g);
    return (!value || regex.test(value));
};

// 2. Example regular expression: isEmail
// Reference: https://emaillistvalidation.com/blog/mastering-email-validation-in-bootstrap-5-a-comprehensive-guide/

function isEmail(value){
    // Fill in the validation condition using regular expressions
    // AND return the results
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(value);
}

module.exports = {isEmpty, isEmail};

// Further reading: 
// 1. Puppeteer library: https://jestjs.io/docs/puppeteer
// 2. Regular expression generator: https://saasbase.dev/tools/regex-generator
// 3. NTU examples: https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
// 4. https://jestjs.io/docs/asynchronous
// 4.1. Asynchronous functions: https://jestjs.io/docs/tutorial-async