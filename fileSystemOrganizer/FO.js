const { helpFn } = require("../Commands/help");
const { organizeFn } = require("../Commands/organize");
const { treeFn } = require("../Commands/tree");
// *******  We will be creating a File System Organizer  ******//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

/* process.argv =>   added console enterd contentue to process.argv as an array

 eg : type => Node ./fo.js Devesh
       console.log(process.argv);
output :
['C:\\Program Files\\nodejs\\node.exe','M:\\pep\\NodeJs\\Project-Node\\fileSystemOrganizer\\FO.js',  'Devesh' ]

*/

let input = process.argv.slice(2); // slice will trunc first two content form process.argv array  => Node ./fo.js

let cmd = input[0]; // organize



// entry point for all function :
switch (cmd) {
  case "Tree":
    treeFn(input[1]);
    break;
  case "organize":
    organizeFn(input[1]); // passing path of testFile Dir ['M:\pep\NodeJs\Project-Node\testFile']
    break;
  case "help":
    helpFn();
    break;
  default: {
    console.log("Plaese enter a content id entry");
  }
}
