// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "WTFPL") {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "WTFPL") {
    return "http://www.wtfpl.net/about/";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    let section = {
      badge: badge,
      link: link,
    };
    return section;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

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
  
  ![Screenshot](${data.screenshot})
  
  ## License
  
  ${licenseSection.badge}

  ${data.license}
  
  For more information on this license, [click here.](https://opensource.org/license/${licenseSection.link})
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, please open an issue or contact me via email at [${data.email}](mailto:${data.email}).
  
  You can view my work on GitHub [here.](${data.github}).
`;
}

module.exports = generateMarkdown;
