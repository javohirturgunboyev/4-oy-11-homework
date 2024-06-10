// 1-masalasi


// function getLastChar(str) {

//     if (str.length === 0) {
//         return null;
//     }
  
//     else {
//         return str.charAt(str.length - 1);
//     }
// }


// const testString = "Hello";
// console.log("Test natijasi:", getLastChar(testString)); 



// 2-masalasi


// function getMiddleChar(str) {
//     // String uzunligi
//     const length = str.length;
  
//     if (length % 2 !== 0) {
//         const middleIndex = Math.floor(length / 2);
//         return str.charAt(middleIndex);
//     }

//     else {
//         const middleIndex = length / 2 - 1;
//         return str.slice(middleIndex, middleIndex + 2);
//     }
// }


// const testString1 = "Hello";
// const testString2 = "Testing";
// console.log("Test natijasi (testString1):", getMiddleChar(testString1)); 
// console.log("Test natijasi (testString2):", getMiddleChar(testString2)); 



// 4-masalasi


// function getStringLengthDescription(str) {
 
//     const length = str.length;

//     if (length > 10) {
//         return "Uzoq string";
//     }
    
//     else {
//         return "Qisqa string";
//     }
// }


// const testString1 = "Hello World";
// const testString2 = "JavaScript";
// console.log("Test natijasi (testString1):", getStringLengthDescription(testString1)); 
// console.log("Test natijasi (testString2):", getStringLengthDescription(testString2)); 


// Stringlarda `slice`, `substring`, va `substr` metodlariga oid  masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:


// masala


// function getLastFiveChars(str) {
   
//     const length = str.length;
  
//     if (length >= 5) {
//         return str.slice(-5); 
//     } else {
//         return str; 
//     }
// }


// const testString1 = "Hello World";
// const testString2 = "JavaScript";
// console.log("Test natijasi (testString1):", getLastFiveChars(testString1)); 
// console.log("Test natijasi (testString2):", getLastFiveChars(testString2)); 




// masala


// function getSubstringFromSecondIndex(str) {

//     return str.substring(2);
// }


// const testString = "Hello World";
// console.log("Test natijasi:", getSubstringFromSecondIndex(testString)); 



// masala


// function convertToUpperCase(str) {
    
//     return str.toUpperCase();
// }


// const testString = "Hello World";
// console.log("Test natijasi:", convertToUpperCase(testString)); 


// masala


// function concatStrings(str1, str2) {

//     return str1.concat(str2);
// }

// const string1 = "Hello";
// const string2 = "World";
// console.log("Test natijasi:", concatStrings(string1, string2));


// masala


// function padStringStart(str, maxLength, padChar) {
  
//     const padLength = maxLength - str.length;
    
//     if (padLength <= 0) {
//         return str; 
//     }
  
//     return padChar.repeat(padLength) + str;
// }


// const testString = "World";
// console.log("Test natijasi:", padStringStart(testString, 10, "-")); 


