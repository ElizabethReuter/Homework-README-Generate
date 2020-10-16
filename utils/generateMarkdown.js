// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ## Table of Contents
  - [Instalation](#instalation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  
## GitHub-Username
${data.username}
## GitHub-Repo-Link
${data.link}
## Title
${data.title}
## Email
${data.email}
## License
${data.license}
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Tests
${data.tests}
## Questions
${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;