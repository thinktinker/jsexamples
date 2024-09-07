const {isEmpty, isEmail} = require("./validation.js");

// Test case 1: test isEmpty to return true if an empty string is passed in
test('should return true when empty', () => {
  expect(isEmpty("")).toBeTruthy();
})

// Test case 2: test isEmpty to return false if the parameter is not empty
test('should return false when NOT empty', () => {
  expect(isEmpty("John")).toBeFalsy();
})

// Test case 3: test isEmail to return true if parameter passes in a valid email
test('should return true when valid email', () => {
  const result = isEmail("johndoe@gmail.com");
  expect(result).toBe(true);
})

// Test case 4: test isEmail to return false if paramter passes in INVALID email
test('should return false when INVALID email', () => {
  const result = isEmail("johndoe");
  expect(result).toBe(false);
})

// Test case 5-6: write an array to run a series of values to test against our functions / features 
// In this example, we are testing isEmpty()
test.each([
    {"username": "", "expected": true},
    {"username": "Xun", "expected": false},
])('.isEmpty($username)', ({username, expected}) => {
    expect(isEmpty(username)).toBe(expected);
});

test.each([
    {"email": "", "expected": false},
    {"email": "johndoe", "expected": false},
    {"email": "johndoe@gmail", "expected": false},
    {"email": "johndoe@gmail.com", "expected": true},
])('.isEmail($email)', ({email, expected}) => {
    expect(isEmail(email)).toBe(expected);
})