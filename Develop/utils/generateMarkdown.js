// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
  if (license === "MPL") {
    return '![License: "MPL"]()(https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === "NASA-1.3") {
    return '![License: NASA-1.3]()(https://opensource.org/licenses/NASA-1.3)'
  }
  if (license === "NPOSL-3.0") {
    return '![License: NPOSL-3.0](https://img.shields.io/badge/License-NPOSL-lightgrey.svg)(https://opensource.org/licenses/NPOSL-3.0)'
  }
  if (license === "OSL-3.0") {
    return '![License: OSL-3.0](https://img.shields.io/badge/License-OSL-yellowgreen.svg)(https://opensource.org/licenses/OSL-3.0)'
  }
  if (license === "PYTHON2.0") {
    return '![License: PYTHON-2.0]()(https://opensource.org/licenses/Python-2.0)'
  }
  if (license === "RSCPL") {
    return '![License: RSCPL](https://img.shields.io/badge/License-RSCPL-purple.svg)(https://opensource.org/licenses/RSCPL)'
  }
  if (license === "Unicode") {
    return '![License: Unicode](https://img.shields.io/badge/License-Unicode-pink.svg)(https://opensource.org/node/1077)'
  }
  if (license === "Xnet") {
    return '![License: Xnet](https://img.shields.io/badge/License-Xnet-blue.svg)(https://opensource.org/licenses/Xnet)'
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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
