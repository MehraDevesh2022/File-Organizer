# File System Organizer
 ## Features of the Project 
  * If you have numerous Files in a folder and they are not Properly arranged
  * So you can use this tool to arrange them in specific directory according to their extension
  * eg : .txt .pdf .doc will store into document directory so on.


## tree : intendation between parent and child is tree view
## help : displayed the all cmd for run the script
     * node main.js tree
     * node main.js organize
     * node  main.js help
## organize : organize all file into there respected directory based on the file extension
  
  
  
  ## how to use global :
    * use Shebang  syntax => #!/usr/bin/env node
    * npm init -y
    * "bin": {"fs": "main.js"}  make a json object inside package.json file use anything as key 
    * npm link
    * now it will work with any directory on your local pc. use git bash and then cmd eg: fs tree 