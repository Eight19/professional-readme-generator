// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  - ${data.why}
  - ${data.benefits}
  - ${data.knowledge}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits & collaborators)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how to contribute)
  - [Tests](#tests)
  
  ## Installation
  
  Please answer the following prompts to install this application:
  - ${data.install}
  
  ## Usage
  
  Add a screenshot of how your application works.
  ![alt text](assets/images/screenshot.png)
  ${data.usage}
  
  ## Credits & Collaborators
  
  List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.
  
  - ${data.credits}
  - ${data.collaborators}
  
  ## License
  
  This project is licensed under ${data.license}. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ## Badges
  
  Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  - ${data.badges}
  
  ## Features
  
  If any project features, list them here.
  - ${data.features}
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  - ${data.contribute}
  
  ## Tests
  - ${data.test}
`;
}

module.exports = generateMarkdown;
