//kffl3496
// global.data = {};
global.gitData = {};

// const questions = [
// ];


function writeToFile(fileName, data) {
  const fs = require('fs');
  fs.writeFile('ReadThis.md', (data), function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged");
    }
  });
}

function init() {
  const inquirer = require('inquirer');
  inquirer.prompt([
    {
      name: 'username',
      message: 'Enter Git Username:',
      default: ''
    },
    {
      name: 'title',
      message: 'Enter title:'
    },
    {
      name: 'description',
      message: 'Enter description:'
    },
    {
      name: 'tableOfContents',
      message: 'Enter Table of Contents:'
    }
  ]).then((answers) => {
    console.log('the answers: ', answers);
    const api = require('./api');
    api.getUser(answers.username).then((body) => {
      this.gitData = body;
      console.log('the git data is: ', this.gitData);

      answers.profilePicture = body.image;
      answers.email = body.email;
      const generateMarkdown = require('./generateMarkdown');
      const markDown = generateMarkdown(answers);
      console.log('markDown', markDown);
      writeToFile('filename.txt', markDown);
    });
  });
}

init();