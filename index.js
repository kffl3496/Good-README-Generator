//kffl3496
global.data = {};
global.gitData = {};


const questions = [

];


function writeToFile(fileName, data) {
}

function init() {
  // this is the first object with a promise and a .then
  const getUsername = new Promise((resolve, reject) => {
    const rl = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Enter your Git Username: ', (username) => {
      rl.close();
      // remove this next line when you are done testing so it won't keep your username
      // this is only so we don't have to keep typing it...
      username = 'kffl3496';
      resolve(username);
    });
  });

  getUsername.then((username) => {
    // console.log('username', username);
    const api = require('./api');
    api.getUser(username).then((body) => {
      this.gitData = body;
      // console.log('the git data is: ', this.gitData);
    });

    // this is the second object inside the .then of the first 
    // put the third inside the .then of the second and so on...
    const getTitle = new Promise((resolve, reject) => {
      const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question('Enter Title: ', (title) => {
        rl.close();
        resolve(title);
      });
    });

    getTitle.then((title) => {
      // console.log('title', title);
      this.data.title = title;
      const generateMarkdown = require('./generateMarkdown');
      const markDown = generateMarkdown(data);

      // console.log('markDown', markDown);

      // The next promise goes here 
      // each goes in the next .then(...) statement
      // [...]

      // third one... 
      // keep going like this
      const getDescription = new Promise((resolve, reject) => {
        const rl = require('readline').createInterface({
          input: process.stdin,
          output: process.stdout
        });
        rl.question('Enter Description: ', (description) => {
          rl.close();
          resolve(description);
        });
      });

      getDescription.then((description) => {
        this.data.description = description;

        // when this is called you should now see both title and description in the markdown
        const generateMarkdown = require('./generateMarkdown');
        const markDown = generateMarkdown(data);

        // we will leave this to demo as we go down the list move this into the next block
        console.log('markDown', markDown);
      });


    });

  });
}

init();