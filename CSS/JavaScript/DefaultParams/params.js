
const users = {
    name: 'Duy Anh Nguyen',
    password: 10,
    email: 'duyanh.nguyen001@umb.edu',
    age: 23,
    birthYear: 1999,
    smoke: 'no',
    hair: 'black'
}


// OLd way
// function fullName(user) {
//     return `${user.name} and ${user.hair}`
// }
// fullName(users);

// Defracturing
// function fullName(user) {
//     const { name, age } = user;
//     return `${name} and ${age}` //does not need user. anymore
// }

// Another way
function fullName({ name, password }) {
    return `${name}, ${password}`
}