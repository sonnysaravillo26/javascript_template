// LIST OF METHODS


// concat() - method joins two or more strings.
myFunctionA = () => {
    var str1 = "Hello ";
    var str2 = "World!";
    console.log(str1.concat(str2));
}
myFunctionA(); // Prints: "Hello World!"


// indexof() - returns the position of the first occurrence of a specified value in a string.
// returns -1 if the value is not found.
myFunctionB = () => {
    var txt = "Lets find where 'pen' occurs!";
    console.log(txt.indexOf("pen"));
}
myFunctionB(); // Prints: 17


// lastindexof() - returns the position of the last occurrence of a specified value in a string.
// returns -1 if the value is not found.
myFunctionC = () => {
    var str = "A dev knows a dev";
    var pos = str.lastIndexOf("dev");
    console.log(pos);
}
myFunctionC(); // Prints: 14


// replace() - searches a string for a specified value, or a regular expression, 
// and returns a new string where the specified values are replaced.
myFunctionD = () => {
    var str = "hello dev!";
    console.log(str.replace("dev", "World"));
}
myFunctionD(); // Prints: "hello World!"


// search() - searches a string for a specified value, and returns the position of the match.
// returns -1 if the value is not found.
myFunctionE = () => {
    var str = "hello dev!";
    console.log(str.search("dev"));
}
myFunctionE(); // Prints: 6


// slice(start, end) - extracts parts of a string and returns the extracted parts in a new string. 
myFunctionF = () => {
    var str = "Developers world!";
    console.log(str.slice(0, 10));
}
myFunctionF(); // Prints: "Developers"


// substr(start, length) - extracts parts of a string, beginning at the character at a specified position, and returns a specified number of characters.
myFunctionG = () => {
    var s = "Javascript";
    console.log(s.substr(4, 6));
}
myFunctionG(); // Prints: "script"


// toUpperCase() - converts a string to uppercase letters.
myFunctionH = () => {
    var sentence = "CodingTest";
    console.log(sentence.toUpperCase());
}
myFunctionH(); // Prints: "CODINGTEST"


// valueOf() - returns the value of a string.
// 'typeof' - return the data type of value
myFunctionI = () => {
    const s = new String('test');
    typeof s
    console.log(s.valueOf() +", "+ typeof s.valueOf());
}
myFunctionI(); // Prints: test, string


// trim() - removes whitespace from both sides of a string.
myFunctionJ = () => {
    var str = "     Trim Both Side     ";
    console.log(str.trim());
}
myFunctionJ(); // Prints: Trim Both Side


// toString() - returns the value of a string.
myFunctionK = () => {
    var num = 15;
    console.log(num.toString());
}
myFunctionK(); // Prints: "15"


// includes() - returns true if a string contains a specified string, otherwise false.
myFunctionL = () => {
    var str = "My name is sonny.";
    console.log(str.includes("name"));
}
myFunctionL(); // Prints: true


// charCodeAt() - returns the Unicode of the character at the specified index in a string.
myFunctionM = () => {
    var str = "Test";
    console.log(str.charCodeAt());
}
myFunctionM(); // Prints: 84


// match() - searches a string for a match against a regular expression, and returns the matches, as an Array object.
// required to understand some 'regular expression'
myFunctionN = () => {
    var str = "loremipsum loremipsum loremipsum";
    console.log(str.match(/sum/g));
}
myFunctionN(); // Prints: [ 'sum', 'sum', 'sum' ]


// split() - splits a string into an array of substrings, and returns the new array.
// If an empty string ("") is used as the separator, the string is split between each character.
myFunctionO = () => {
    var str = "1,2,3,4,5";
    console.log(str.split(","));
}
myFunctionO(); // Prints: [ '1', '2', '3', '4', '5' ]
