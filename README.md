# HackFSU-Preview

## Installing Node.js
First, make sure you have Node.js installed. There are many ways to install Node.js.

#### macOS installing
Use homebrew. See `https://brew.sh` to install homebrew.

#### Windows Installing
Download Node.js directly. See this downloads page: `https://nodejs.org/en/download/`.

#### Linux installing
You have many options. If you're using Linux, I trust you can figure this one out.


## Setting up the project
You can use the `package.json` file to install all of the dependent libraries. Use the command `npm install` to automatically install your dependencies.

You should use the most recent version of `npm`. Run `npm install -g npm` to update to the most recent version.

#### `node-sass` errors
Sometimes this module will cause installation to fail. Try talking to someone on the team about it.

## Building the project
The project is compiled from pug, sass, and other sources into html and css using the `gulp` build system.

Use `gulp build` to 'compile' the project into the files. The build files will appear in the `html` folder. This folder is not part of the source control. Do not try to add it.

When working on the project, you may find it useful to use the `gulp watch` command to automatically rebuild the site as you make changes. 
