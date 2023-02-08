// Function that returns license badge and links based on which license is passed in//
function renderLicenseBadge(license) {
  if (license === 'Berkeley Source Distribution (BSD)') {
    return '![License: BSD](https://img.shields.io/badge/License-BSD-yellow.svg)(https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache-2.0') {
    return '![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-orange.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![License: "MPL 2.0"](https://img.shields.io/badge/License-MPL-red.svg)(https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'GNU (General Public License)') {
    return '![License: GNU (GPL)](https://img.shields.io/badge/License-GNU(GPL)-blue.svg)(https://opensource.org/licenses/gpl-license)'
  }
  if (license === 'GNU (Lesser General Public License)') {
    return '![License: GNU (LGPL)](https://img.shields.io/badge/License-GNU(LGPL)-lightgrey.svg)(https://opensource.org/licenses/lgpl-license)'
  }
  if (license === 'Eclipse Public License 2.0') {
    return '![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL-yellowgreen.svg)(https://opensource.org/licenses/EPL-2.0)'
  }
  if (license === 'Common Development and Distribution License') {
    return '![License: Common Development and Distribution License](https://img.shields.io/badge/License-CDDL-green.svg)(https://opensource.org/licenses/CDDL-1.0)'
  }
  // Returned an empty string for no license//
  if (license === 'Unlicense') {
    return ''
  }
}

//Function generates markdown for README.md//
function generateMarkdown(data) {
  return `# ${data.title}

## Description
- ${data.why}
- ${data.benefit}
- ${data.knowledge}

## Table of Contents (Optional)

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

## Credits & Collaborators
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.

- $ {data.contributors}
- $ {data.collaborators}

## License
- ${renderLicense(data.license)}
If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Badges
- ${data.badges}

## Features
- ${data.features}

## How to Contribute
- ${data.contribute}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
- ${data.test}

`;
}

module.exports = generateMarkdown;
