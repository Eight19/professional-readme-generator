// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n

  ## Description

  - ${data.why}
  - ${data.benefits}
  - ${data.knowledge}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  
  ## Installation
  
  Please answer the following prompts to install this application:
  - ${data.install}
  
  ## Usage

  Provide instructions and examples for use. Include screenshots as needed.
  To add a screenshot, create an .assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  \`\`\`md
  ![alt text](assets/images/screenshot.png)
  \`\`\`

  ## Credits
  - ${data.contributors}

  List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.
  
   
  
  ## License
  
  This project is licensed under ${data.license}. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ## Badges
  ${renderLicenseBadge(data.license)}
    
  ## Features
  
  If any project features, list them here.
  - ${data.features}
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  - ${data.contribute}
  
  ## Tests
  Run the following command to run tests:
  \`\`\`
  npm test
  \`\`\`
  - ${data.test}
  
  ## Questions
  
You can reach me at ${data.questions} with any questions.
  `;}

module.exports = generateMarkdown;
