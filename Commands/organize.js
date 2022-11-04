/*inside the organizeFn : 
 * 1 :first take Path from testDir
   2 : make  dir organize inside the testDir using given path
   3 : inside the  organize dir make other dir acording to file extension(baseName) eg : for .img , .mp3 , .mkv dir is => (media) , for txt dir is =>(txtFiles) eg.
   */

const { log } = require("console");
const fs = require("fs");
const path = require("path");

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

const organizeFn = (dirPath) => {
  dirPath = process.cwd();
  let dstPath = undefined;
  if (dirPath == undefined) {
    console.log("Please provide the path...");
    return;
  }
   const doesExist = fs.existsSync(dirPath);
   if (doesExist == true) {
    dstPath = path.join(dirPath, "organize_File"); // path + 'dir-Name'
    if (fs.existsSync(dstPath) == false) {
      fs.mkdirSync(dstPath);
    } else {
      console.log("organize_File dir already exist");
    }
  } else {
    console.log("Please Enter correct dir Path...");
  }

  // calling the organize_Helper function for organizing the files using dirPath(src) and dstPath
  organize_Helper(dirPath, dstPath);
};

const organize_Helper = (srcPath, dstPath) => {
  let srcChildrens = fs.readdirSync(srcPath);

  for (let content of srcChildrens) {
    let childrenAddress = path.join(srcPath, content);
    let isFile = fs.lstatSync(childrenAddress).isFile(); 
    if (isFile == true) {
      let fileCategory = getCatagory(content); // fn call
      sendFile(childrenAddress, dstPath, fileCategory);
    }
  }
};

function getCatagory(file) {
  // console.log(file);
  let fileExtension = path.extname(file).slice(1); // extname wil give the files ext eg: .pdf , .mp4 .mp3 etc and slice will remove (.)dot becasue in  our types obj valuse are not starting with dot
  for (let key in types) {
    for (let ext of types[key]) {
      if (ext == fileExtension) {
        return key;
      }
    }
  }
  return "others";
}

function sendFile(fileSrcPath, dstPath, fileCategory) {
  let catPath = path.join(dstPath, fileCategory);
   if (fs.existsSync(catPath) == false) {
    fs.mkdirSync(catPath);
  }


  let fileName = path.basename(fileSrcPath);
  let newdestPath = path.join(catPath, fileName);
  fs.copyFileSync(fileSrcPath, newdestPath);
  fs.unlinkSync(fileSrcPath);
  console.log(`${fileName} copied to ===> ${fileCategory} directory`);
}

module.exports = {
  organizeFn,
};
