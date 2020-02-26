function generateMarkdown(data) {
  // console.log('here');

  return `
# ${data.title}
# ${data.description}
`;
}

module.exports = generateMarkdown;