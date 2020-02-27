function generateMarkdown(data) {
  // console.log('here');

  return `
# ${data.title}
# ${data.description}
# ${data.tableOfContents}
# ${data.profilePicture}
# ${data.email}
`;
}

module.exports = generateMarkdown;