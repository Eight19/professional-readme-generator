//Prompts data, creates, and populates README.md//
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// const { data } = require('./data');
// const prompt = inquirer.createPromptModule();

const fs = require('fs');
//prompt(data)
    // .then(createMarkdown)
    // .then(generate)//
function start() {
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
      message: 'Are there any licenses associated with this project',
      choices: ['BSD', 'MIT', 'APACHE', 'MPL', 'GNU', 'EPL', 'CDDL'],
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
   
  //Function to write README//

  ]).then((data) => {
    console.log(data)
    fs.writeFile('README.md', generateMarkdown(data),
    error => {
      if (error) {
          console.log('Please enter requested information')
      }
      console.log('Your Professional README.md has been generated!')
    }
  )
})
}



start()