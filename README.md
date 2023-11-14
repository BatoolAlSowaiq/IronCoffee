![](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/668053121096839.60bf1f47ae046.gif)

# Iron Coffees App

## Introdaction

This project is an Angular application that showcases handcrafted coffees. It interacts with a backend API deployed on Heroku to fetch and create coffee data.
The application provides various features such as displaying all coffees, showing details of a single coffee, generating a random coffee, and creating new coffees.



## Prerequisites
  
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,git,github,angular,nodejs,html" />
  </a>
</p>

- Node.js and npm should be installed on your machine.
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.
- HTML
- CSS
- Heroku
  

## Installation
### Development server

To run the development server, follow these steps:

1. Clone the repository to your local machine.

   ````shell
   git clone <repository-url>
   ````
   
2. Open a terminal and navigate to the project's root directory.

3. Run the following command to install the dependencies:

   ````shell
   npm install
   ````
   
4. Once the dependencies are installed, start the development server by running the following command:

   ````shell
   ng server
   ````


5. Open your web browser and navigate to http://localhost:4200/ to access the application. The page will automatically reload if you make any changes to the source files.


### Code scaffolding

You can use the Angular CLI to generate various components, directives, pipes, services, classes, guards, interfaces, enums, and modules. To generate a new component, use the following command:

  ````shell
    ng generate component component-name
  `````

Replace `component-name` with the desired name for your component.



## Features

### Home Page

The home page provides three links to separate pages:

- **All Coffees**: Displays all the coffees from the database.
- **Random Coffee**: Displays a random coffee.
- **New Coffee**: Allows users to create new coffees.

<p align="center">

<img src="https://github.com/BatoolAlSowaiq/IronCoffee/assets/140564404/afb3b469-468c-4ce2-ac8b-992594bb9526" alt="IronCoffes - final result" width="400" />

</p>

## API Endpoints

The IronCoffeesApp interacts with the following API endpoints:

- `GET /coffees`: Fetches all the coffees from the database.
- `GET /coffees/:id`: Fetches a specific coffee by its ID.
- `GET /coffees/random`: Fetches a random coffee from the database.
- `POST /coffees/new`: Creates a new coffee in the database.
- `GET /coffees/search?q={query}`: Fetches coffees from the database whose names contain the search term.

## Build

To build the project, Run the following command:

```
ng build
```

The build artifacts will be stored in the `dist/` directory.


## Running unit tests
To execute the unit tests using Karma, run the following command:

```
ng test
```

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

To execute the end-to-end tests, you need to first add a package that implements end-to-end testing capabilities. Once you have added the required package, run the following command to execute the end-to-end tests:

```shell
ng e2e
```



## Further help

If you need more help with the Angular CLI, you can use the following command to access the Angular CLI help documentation:

```
ng help
```

You can also refer to the Angular CLI Overview and Command Reference page for more information.

 or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


 ## Contributors:

- [Batool AlSowaiq](https://github.com/BatoolAlSowaiq)
- [Amal Alzahrani](https://github.com/am5799)
- [Wedad Alotaibi](https://github.com/w88d)
- [Arijj Qadah](https://github.com/Rojaon)
- [Sara Turki](https://github.com/saraturki12)

We hope you enjoy using the IronCoffeesApp!
