// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
### GitHub-Username
${data.username}
### GitHub-Repo-Link
${data.link}
### Title
${data.title}
### Email
${data.email}
### License
${data.license}
### Description
${data.description}
### Usage
${data.usage}
### Installation
${data.installation}
### Tests
${data.tests}
### Questions
${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;