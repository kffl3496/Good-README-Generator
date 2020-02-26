const api = require('./api');
const generateMarkdown = require('./generateMarkdown');

const questions = [

];

const data = {};


function writeToFile(fileName, data) {
}

function Question1() {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter your Git Username: ', (username) => {
    rl.close();
  });
}

function Question2() {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter Text: ', (text) => {
    rl.close();
  });
}


// // const question1 = () => {
// //   return new Promise((resolve, reject) => {
// //     readline.question('Enter Github Id: ', username => {
// //       api.getUser(username);
// //       resolve();
// //       // readline.close();
// //     });
// //   });
// // }
// const question1 = new Promise((resolve, reject) => {
//     readline.question('Enter Github Id: ', username => {
//       api.getUser(username);
//       resolve();
//     });
//     resolve();
//   });
// // const question2 = () => {
// //   return new Promise((resolve, reject) => {
// //     readline.question('Enter Title: ', title => {
// //       data.title = title;
// //       resolve();
// //       // readline.close();
// //     });
// //   });
// // }

// const question2 = new Promise((resolve, reject) => {
//     readline.question('Enter Title: ', title => {
//       data.title = title;
//       resolve();
//     });
//     resolve();
//   });

// function getStream() {
//   const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   return readline;  
// }

function init() {
  
  // Question1();
  // Question2();
  // const stream1 = getStream();
  // stream1.question('Enter Github Id: ', username => {
  //   api.getUser(username);
  //   // resolve();
  //   stream1.close();


  //   const stream2 = getStream();
  //   stream2.question('Enter Title: ', title => {
  //       data.title = title;
  //       // resolve();
  //       stream2.close();
  //       generateMarkdown.generateMarkdown(data);
  //   });
  // });

  // Promise.all([question1, question2])
  //   .then(function(resolve, reject) {
  //     generateMarkdown(data);
  //   });

  // // _this = this;
  // // main().then(() => {
  // //   generateMarkdown.generateMarkdown(data);
  // //   // _this.generateMarkdown(data);
  // //   console.log('data', data);
  // // });
}


init();