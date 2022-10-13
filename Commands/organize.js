/*inside the organizeFn : 
 * 1 :first take Path from testDir
   2 : make  dir organize insidee the testDir using given path
   3 : inside the  organize dir make other dir acording to file extension(baseName) eg : for .img , .mp3 , .mkv dir is => (media) , for txt dir is =>(txtFiles) eg.
   */

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
  let dstPath = undefined;
  // check path path passed or not =>
  if (dirPath == undefined) {
    console.log("Please provide the path...");
    return;
  }
  // when path is given then check is path exist or not :
  const doesExist = fs.existsSync(dirPath);
  if (doesExist == true) {
    // make dstPath now
    dstPath = path.join(dirPath, "organize_File"); // path + 'dir-Name'

    // check if dstFolder not exist : then mkdir using dstPath
    if (fs.existsSync(dstPath) == false) {
      // organize_File dir will build at dstPath 'M:\pep\NodeJs\Project-Node\testFile\organize_File'
      fs.mkdirSync(dstPath);
    } else {
      // if folder build alreday
      console.log("organize_File dir already exist");
    }
  } else {
    console.log("Please Enter correct dir Path...");
  }

  // calling the organize_Helper function for organizing the files using dirPath(src) and dstPath
  organize_Helper(dirPath, dstPath);
};

const organize_Helper = (srcPath, dstPath) => {
  // readdirSync provides the content of the dir in array formate :
  let srcChildrens = fs.readdirSync(srcPath);
  // console.log(srcChildrens);
  for (let content of srcChildrens) {
    // => combining srcPath and content(files and dir of srcPath) and making complete path of srcPath conetents
    let childrenAddress = path.join(srcPath, content);
    // => check is srcDir have file or dir : filter the files only  using childrenAddress
    let isFile = fs.lstatSync(childrenAddress).isFile(); // lstatSync return meta data of content . using that conntent chekc weather it is file or dir
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
  // now dstPath (M:\pep\NodeJs\Project-Node\testFile\organize_File) + fileCategory(media , others , document) will make new dir insdie the dstPath
  let catPath = path.join(dstPath, fileCategory);
  // path ofr media : M:\pep\NodeJs\Project-Node\testFile\organize_File\media

  if (fs.existsSync(catPath) == false) {
    // if not build yet
    // now make dir for catogory
    fs.mkdirSync(catPath);
  }

  // now get the base name for complete address of file :
  let fileName = path.basename(fileSrcPath);
  // now path for mp3 => M:\pep\NodeJs\Project-Node\testFile\organize_File\media\xyz.mp3
  let newdestPath = path.join(catPath, fileName);
  fs.copyFileSync(fileSrcPath, newdestPath);
  // now delete files from testFolder( src-folder) // because all file copied to organized dir respcetd dir

  fs.unlinkSync(fileSrcPath);
}

module.exports = {
  organizeFn,
};
