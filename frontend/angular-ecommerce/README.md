# AngularEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

# Angular Dependencies installation

`ng add angular/localize`

`ng add @ng-bootstrap/ng-bootstrap`

source: 
[ng-boostrap getting started](https://ng-boostrap.github.io/#/getting-started)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## fix bug diplayin products in a list

Step 1 :- npm install bootstrap@4

Step 2 :- add the path in "angular.json" [ !!!! Also add the "boostrap.min.js" path into scripts ]

Step 3 :- npm install jquery

Step 4 :- add the path in "angular.json"

here is the snippet of my angular.json file

    "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
    "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]

  ## Pagination
  Spring Rest provides out of ht ebox pagination:

  http://localhost:8080/api/products?page=2&size=10

![pagination api](https://www.dropbox.com/scl/fi/8k94ruoy5vukxp8uyzxep/spring_pagination_01.png?rlkey=ayxvq1t3s77wccxtar4dlmflo&st=03cvtg4t&raw=1)

this app use __ng-bootstrap__ for pagination

[Pagination Documentation](https://ng-bootstrap.github.io/#/components/pagination/overview)

[ng-boostrap github](https://github.com/ng-bootstrap/ng-bootstrap),  [ng-bbostrap components](https://ng-bootstrap.github.io/#/components/accordion/overview)
