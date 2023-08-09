# File System Organizer

## Introduction

File System Organizer is a convenient tool designed to help you manage and organize your files more effectively. If you find yourself dealing with a cluttered folder full of files without proper organization, this tool is here to help. It enables you to arrange files into specific directories based on their extensions, providing a clean and structured file management solution.

## Features

- Efficiently organizes files based on their extensions into appropriate directories.
- Simplifies the process of arranging files for better file management.
- Improves the overall organization and accessibility of your files.

## How to Use

### Tree

To view the tree structure of the files:

```bash
node main.js tree

```

### Organize

- To organize all files into their respective directories based on their file extensions:

```bash
node main.js organize "path"

```

### Help

- To display all available commands:

```bash
node main.js help

```

## How to Use Globally

- Add the Shebang syntax at the beginning of the main.js file: #!/usr/bin/env node
- Initialize your project:

```bash
  npm init -y

```

- Update the "bin" field in your package.json file:

```bash
   "bin": {
  "fs": "main.js"
}


```

- Link the tool to make it globally accessible:

```bash
  npm link

```

- Now you can use the tool globally:

```bash
  fs tree "path"
  fs organize "path"
  fs help

```

**Note:** File System Organizer simplifies the process of file organization, making it easier to manage and access your files efficiently.
