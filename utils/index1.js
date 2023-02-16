const fs = require('fs');

const generate = (markdown) =>{
  fs.writeFileSync('README.mdExample', markdown)
}

// Function that returns license badge and links based on which license is passed in//
function createMarkdown(license) {
  if (data.license === 'Berkeley Source Distribution (BSD)') {
    return '[![licenseBadge: BSD](https://img.shields.io/badge/License-BSD-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (data.license === 'MIT') {
    return '[![licenseBadge: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)'
  }
  if (data.license === 'Apache-2.0') {
    return '[![licenseBadge: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (data.license === 'Mozilla Public License 2.0') {
    return '[![licenseBadge: "MPL 2.0"](https://img.shields.io/badge/License-MPL-red.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (data.license === 'GNU (General Public License)') {
    return '[![licenseBadge: GNU (GPL)](https://img.shields.io/badge/License-GNU(GPL)-blue.svg)](https://opensource.org/licenses/gpl-license)'
  }
  if (data.license === 'GNU (Lesser General Public License)') {
    return '[![licenseBadge: GNU (LGPL)](https://img.shields.io/badge/License-GNU(LGPL)-lightgrey.svg)](https://opensource.org/licenses/lgpl-license)'
  }
  if (data.license === 'Eclipse Public License 2.0') {
    return '[![licenseBadge: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL-yellowgreen.svg)(https://opensource.org/licenses/EPL-2.0)'
  }
  if (data.license === 'Common Development and Distribution License') {
    return '[![licenseBadge: Common Development and Distribution License](https://img.shields.io/badge/License-CDDL-green.svg)](https://opensource.org/licenses/CDDL-1.0)'
  }
  // Returned an empty string for no license//
  if (data.license === 'Unlicense') {
    return ''
  }
}

//Function generates markdown for README.md//
function createMarkdown(data) {
  return `# ${data.title}

## ${licenseBadge}
  
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
  Run the following command to run tests:
 \`\`\`
  npm test
  \`\`\`

  ## Questions
  You can reach me at ${data.questions} with any questions.
  `;}
module.exports = {
  generate,
  createMarkdown,
};