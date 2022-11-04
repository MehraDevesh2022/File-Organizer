// tree function :
const fs = require("fs");
const path = require("path");

function treeFn(targetPath) {
  if (targetPath == undefined) {
    treeHelper(process.cwd(), "");
      return;
  }
  if (fs.existsSync(targetPath) == true) {
    treeHelper(targetPath, " ");
  }
}

function treeHelper(targetPath, indent) {
  let doesFile = fs.lstatSync(targetPath).isFile();

  if (doesFile == true) {
    let fileName = path.basename(targetPath);
    console.log(indent + "├──" + fileName);
    return;
  } else {
    let fileName = path.basename(targetPath);
    console.log(indent + "└──" + fileName);

    let targetChildren = fs.readdirSync(targetPath);
    for (let content of targetChildren) {
      let contentPath = path.join(targetPath, content);
      treeHelper(contentPath, indent + "\t");
    }
  }
}

module.exports ={
 treeFn,
}