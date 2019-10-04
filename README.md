# F1Champion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Installation
 Run `npm install --save`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests and check code coverage via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Architecture

The architectural pattern where each feature is encapsulated in an organized folder structure is the main driver of the design paradigm used in this project. This makes scalability and maintainability of the application easier. Please find below
an explanation of the folder structure. E.g if an abstraction layer needs to be added to this project it can easily be done within each feature.

## Components
`components`: This is where all `feature components` e.g `champion` are found.
each `feature component` e.g `champion` has a folder structure that represents the layer.

`models`: this is where all models unique to a feature are created.
`services`: this is where all services including apis & non-api services unique to a feature are created. The api services are in the folder called `apis`
`views`: this is where the all presentation layers with respect to a feature are created.
`facades` this layer is used to abstract business logic with respect to each feature and should be available to the view/presentation layer of the feature.

## Core
This layer is holds some of the main components, services and models that might be used through the entire application. e.g of such are `interceptors`, `JsonResponse models`, `feature-toggles`, `redux (reducers, actions, effects)` for decoupling application state from the presentation layer. They have no dependency on any feature module.

## Shared
This layer is used for reusable `components`, `pipes`, `directives`, `etc` within the application and they also have no dependency on any feature module e.g, `loading-screen`, `error-screen`.

In addition to the points above, `loading on demand` or `lazy loading` has also been implemented to ensure optimization, performance and speed in download time when a production artifact is created.

## Styling
I have created a high specifity in global styles with respect to widgets/components used across the application. Media queries are also included to make the application responsive. Please find below the style structure.

`main.scss`: This is the parent style sheet of the application
`styles`: This is the root folder of all scss files.
`abstracts`: This folder is the single source of truth for all variables (colors, font sizes, font family, font weights, etc) are defined
`components`: This folder is a repository for style definitions of all shared components.




