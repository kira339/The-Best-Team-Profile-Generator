const inqurier = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
var managerArray = []
var internArray = []
var employeeArray = []
var engineerArray = [];
var htmlCode;

promptManager()

function promptManager ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your office number",
            name: "officeNumber"
        },
        
    ])
        .then((data) => {
            console.log("here")
        managerArray.push(new Manager (data.name, data.id, data.email, data.officeNumber))
        selectRole()
    })
}

function promptIntern ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your school",
            name: "school"
        },
        
    ])
        .then((data) => {
            console.log("here3")
        internArray.push(new Intern (data.name, data.id, data.email, data.school))
        selectRole()
        })

}

function promptEngineer() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your github",
            name: "github"
        },
        
    ])
    .then((data) => {
       engineerArray.push(new Engineer (data.name, data.id, data.email, data.github))
       selectRole()
    })
    
}

function selectRole() {
    inqurier.prompt([
        {
            type: "list",
            choices: ["Intern", "Engineer", "Finishing building your team"],
            message: "Pick a role",
            name: "role"
        }
    ])
    .then((data) => {
        if (data.role === "Engineer") {
            promptEngineer();
        }
        if (data.role === "Intern") {
            promptIntern();
        }
        if (data.role === "Finishing building your team") {
            GenerateManager(managerArray);
            //generate egineer cards
            if (engineerArray) {
                GenerateEngineer(engineerArray);
            }
            if (internArray) {
                GenerateIntern(internArray);
            }
            renderHTML()
            init()
            console.log(renderHTML());

        }
     }) 
}
function renderHTML() {
    htmlCode= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fruktur&family=Source+Code+Pro&family=Zen+Antique&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/ca6e5b2cf1.js" crossorigin="anonymous"></script>  
        <title>Team Profile</title>
    </head>

    <header>
    
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-danger my-5">
      <h1 class="mb-3">Team Profile</h1>
      <h4 class="mb-3">Meet The Team</h4>
    </div>
    <!-- Jumbotron -->
  </header>
    <body>
    <div class="container">`
        
         htmlCode +=employeeArrayReturn()
    htmlCode += `</div >
         </div>
    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
   </html> `
    return htmlCode;
}
function GenerateManager(managerArray) {
    temp = `  
    <div class=row>
    <div class="col-3 mx-auto py-5 px-4">
  <div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-header text-white bg-primary">
      <h5 class="card-title">${managerArray[0].getName()}</h5>
      <p class="card-text"><svg aria-hidden="true" class = "icons" focusable="false" data-prefix="fas" data-icon="mug-saucer" class="svg-inline--fa fa-mug-saucer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"></path></svg> Manager</p>
    </div>
    <div class="card-body bg-light py-5 px-4" style="height: 13rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${managerArray[0].getId()}</li>
      <li class="list-group-item">Email: ${managerArray[0].getEmail()}</li>
      <li class="list-group-item">Office Number: ${managerArray[0].getOfficeNumber()}</li>
    </ul>

    </div>
    </div>
  </div>
  <div class=row>`;
  employeeArray.push(temp);
    
}

function GenerateIntern(internArray) {
    
    for (let i = 0; i < internArray.length; i++) {
        var temp =
            `<div class="col-3 mx-auto py-5 px-4 ">
            <div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-header text-white bg-primary">
      <h5 class="card-title">${internArray[i].getName()}</h5>
      <p class="card-text"><i class="fas fa-glasses"></i> Intern</p>
    </div>
    <div class="card-body bg-light py-5 px-4" style="height: 13rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${internArray[i].getId()}</li>
      <li class="list-group-item">Email: ${internArray[i].getEmail()}</li>
      <li class="list-group-item">School: ${internArray[i].getSchool()}</li>
    </ul>
    </div>
    </div>
  </div>`;
        employeeArray.push(temp);
    }

}
function GenerateEngineer(engineerArray) {

    for (let i = 0; i < engineerArray.length; i++) {
        var temp =
        `<div class="col-3 mx-auto py-5 px-4">
        <div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-header text-white bg-primary">
      <h5 class="card-title">${engineerArray[i].getName()}</h5>
      <p class="card-text"><svg aria-hidden="true" class="icons" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg> Engineer</p>
    </div>
    <div class="card-body bg-light py-5 px-4" style="height: 13rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineerArray[i].getId()}</li>
      <li class="list-group-item">Email: ${engineerArray[i].getEmail()}</li>
      <li class="list-group-item">Github: ${engineerArray[i].getGithub()}</li>
    </ul>
    </div>
    </div>
  </div>`
  employeeArray.push(temp);
    }
   
}

function employeeArrayReturn() {
    var tmp ="";
    for (let i = 0; i < employeeArray.length; i++) {
        tmp += employeeArray[i];
    }
   
    return tmp;

}

const init = () => {

    // Use writeFileSync method to use promises instead of a callback function
    fs.writeFileSync('index.html', renderHTML());
}