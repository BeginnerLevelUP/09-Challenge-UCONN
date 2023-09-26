// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Initialize an empty string to store the badge
  let badge = '';

  // Use a switch statement to determine the badge based on the license
  switch (license) {
    case 'MIT':
      badge = '[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      badge = '[![GNU GPLv3 License](https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache 2.0':
      badge = '[![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
      break;
    case 'ISC':
      badge = '[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    default:
      // If no license is chosen or it's 'None', return an empty string
      badge = '';
      break;
  }

  return badge;
}

function renderLicenseLink(license) {
  // Initialize an empty string to store the license link
  let link = '';

  // Use a switch statement to determine the link based on the license
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU GPLv3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache 2.0':
      link = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    default:
      // If no license is chosen or it's 'None', return an empty string
      link = '';
      break;
  }

  return link;
}

function renderLicenseSection(license) {
  // Initialize an empty string to store the license section
  let section = '';

  // Use a switch statement to determine the license section based on the license
  switch (license) {
    case 'MIT':
      section = 'This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
      break;
    case 'GNU GPLv3':
      section = 'This application is licensed under the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).';
      break;
    case 'Apache 2.0':
      section = 'This application is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).';
      break;
    case 'ISC':
      section = 'This application is licensed under the [ISC License](https://opensource.org/licenses/ISC).';
      break;
    default:
      // If no license is chosen or it's 'None', return an empty string
      section = 'This application is not covered under any license.';
      break;
  }

  return section;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.username}](https://github.com/${data.username})
Email: ${data.email}
`;
}


module.exports = generateMarkdown;
