# RecipeBook

This project is developed to understand and demonstrate all the core and important features of google's Angular Framework. The features include modules, components, directives, pipes, routing, services, and others.

Used reactive forms for building RecipeEditComponent and template-driven forms at other places like login and shopping list

Used RxJS to deal with asynchronous data calls, callbacks and event-based programs

For user authentication and authorization I have used the firebase service. Only authorized users can fetch and store the recipes. Have used route guards for protecting the routes. The user does not need to log in every time he/she refreshes the page as the session is maintained for one hour after which the user logs out automatically.

For storing data I have used a firebase real-time database. Also, this app is hosted using firebase hosting service at https://ng-course-recipe-book-5ad9f.web.app/
Feel free to play with it.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
