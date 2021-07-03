// importing fs (file system)
var fs = require('fs')

// Read file function continues to run in background. So we have to make sure when it is read we use a call back function ( 3rd parametre )
fs.readFile('calc.js', "UTF-8", function(err, data){
    console.log(data);
});

// When we return it, it creates the calc1.js file and write the data on it
fs.writeFile('calc1.js','console.log("Done!!")',function(err){
    console.log("Data Saved");
})

// using fs.appendFile, we can append instead of replacing the file

// to delete the file

// fs.unlink('calc1.js',function(err){
//     console.log(deleted)
// })