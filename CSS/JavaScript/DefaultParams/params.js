const testArr = {
    num1: 20,
    num2: 30,
    num3: 40,
    num5: 50,
    num6: 70,
}
// Order does not matter like arry, 
// Store by name
// const { num2, num2 } = testArr;

// Renaming a key inside of object and store it in another key
const { num2: birthYear, num3: deathYear} = testArr;

