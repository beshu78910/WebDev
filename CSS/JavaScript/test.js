const testScores = {
    p1: 20,
    p2: 87,
    p3: 85,
    p4: 27,
    p5: 16,
    p6: 52
}


// Object.values(object)
// This will return an array of testScores values.
for (let value of Object.values(testScores)) {
    console.log(value);
}
// Object.key(object)
// return array of key.
for (let value of Object.keys(testScores)) {
    console.log(value);
}
// Object.entries(testScores)
// return array of key and value pair
for (let value of Object.entries(testScores)) {
    console.log(value);
}