const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('.utils/generateMarkdown');

const generateHTML = ({ name, location, github, linkedin, title, why, benefits, test, screenshot, knowledge, features, install, contributors, contribute, tutorials }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi, My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">My Contact Information</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Are there any licenses associated with this project (BSD, MIT, APACHE, MPL, GNU, EPL, CDDL, ETC?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'why',
      message: 'Why did you create this project?',
    },
    {
      type: 'input',
      name: 'benefits',
      message: 'What are the benefits of using this application?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How can users test your application?',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Add a screenshot by using ![alt text](assets/images/screenshot.png)',
    },
    {
      type: 'input',
      name: 'knowledge',
      message: 'What knowledge was gained from building this project?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Does your project include any key features and is so, what?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How can your application be installed by other users?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Links to GitHub Profiles for all collaborators',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How can other developers contribute to this project?',
    },
    {
      type: 'input',
      name: 'tutorials',
      message: 'Any attributions required for tutorials or third-party assets used?',
    },
  ]);
    //Function to write README.md//
    function writeFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
    

//Function to initialize app//
function init() {
  inquirer.prompt[questions].then(responses) => {
    console.log("Your Professional README.md file is being generated!");
    writeFile("./Develop/utils/README.md", generateMarkdown({ ...responses }));
  }
}
//Function call to initialize app//
init();
