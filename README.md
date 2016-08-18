![cf](https://i.imgur.com/7v5ASc8.png) lab 22 controller crud
======

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Build Tool Instructions
* create a package.json that lists all your developer dependencies
 * create a `watch` npm script for running `webpack-dev-server --inline --hot`
 * create a `lint` npm script to lint your javscript code using eslint
* create a wepack config file
 * must output files into a build directy
 * must have a sass loader config, that uses the `extract-text-webpack-plugin`
* create a karma config file
* include a gitignore
* include an eslintrc
* inclunde a README.md
 * write instructions on running your tests
 * write instructions on running you linter
 * write a paragraph about what you did

# Directions
* Create these directories to organize your code: 
 * app/controller
 * app/html
 * app/scss
 * app/scss/vendor
* create a **_theme.scss** partial 
 * add three color variables
* create a **base.scss** file 
 * import normalize
 * import \_theme
 * write some styles that use the color variables defined in \_theme
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**

# Client Functionality
For this assignment you will be makeing AJAX request to an API to do CRUD opperations on a single resource
* Make a resource controller with methods to create, read, and destroy a resource using AJAX requests
* Make a form to invoke the createResource method on your controller
* Your resource should be stored in an array on the controller
* Use ng-repeat to display information from your resources on the page
* You may use your own server however you can use the **noteapp-backend** repo that is included in the class lab repository organization

# Test
* Test three CRUD methods on your resource controller
 * use $httpBackend to mock the server and assert your requests

# Bonus
* **1pt** Build bootstrap and font-awesome from sass
* **1pt** Have an update method 
