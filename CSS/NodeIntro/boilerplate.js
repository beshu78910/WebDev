// needed to declare this if want to use fs file system
const fs = require('fs');
// set folder name to be command line argument 3
// If no argument is setted default value is 'Project'
const folderName = process.argv[2] || 'Project'
// Synchonus version for making a folder
fs.mkdirSync(folderName);
// Create three files in that folder name, sync version
// The file will create at the location that the script run.
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log("Something Went Wrong");
    console.log(e);
}


