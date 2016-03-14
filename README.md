# OctoSearch [![Stories in Ready](https://badge.waffle.io/mic-css/octo-search.svg?label=ready&title=Ready)](http://waffle.io/mic-css/octo-search)

A lean GitHub user search built in AngularJS

This project can be viewed live on Heroku at:

http://octosearchleo.herokuapp.com/

# Installation

* Fork this repository on Github and clone down to your local machine
* Run `npm install` to install the key packages for the program (this should also run `bower install` automatically)
* Run `npm start` to start the server, then visit http://localhost:8000
```sh
$ git clone https://github.com/YOUR-USERNAME/octo-search.git
$ cd octo-search
$ npm install
$ npm start
```

* Run gulp to watch and compile any Sass should you want to change the front-end design:
```sh
$ gulp sass:watch
```

## Testing

* To run unit tests with [karma](https://karma-runner.github.io/0.13/index.html) run:
```sh
$ npm test
```

* To run feature tests with [protractor](https://angular.github.io/protractor/#/) make sure you have the server and webdriver-manager running simultaneously in separate terminal panes, and run:
```sh
# separate pane
$ npm start
# separate pane
$ webdriver-manager test
# separate pane
$ npm run protractor
```

# Using OctoSearch

* When the page is visited only the search bar is visible, with a prompt to enter a github user to search

![ScreenShot](https://www.dropbox.com/s/o8dmn0lvb7cxk8z/Screenshot%202016-03-14%2012.46.11.png?dl=0?&raw=1)

* When the name of a user to search is inputted, the Go! button becomes visible which allows the user to submit the search

![ScreenShot](https://www.dropbox.com/s/xjmai2qak5n3icx/Screenshot%202016-03-14%2012.46.36.png?dl=0?&raw=1)

* If a specific username is searched for, the search will return that user, and display their login(username), avatar image, number of followers and number of repositories

![ScreenShot](https://www.dropbox.com/s/hfks30aanqx9ry7/Screenshot%202016-03-14%2012.46.49.png?dl=0?&raw=1)

* The username, followers and repositories titles/icons are all links to the relevant pages on the users' Github public profile

![ScreenShot](https://www.dropbox.com/s/k8orcfu005wh4zl/Screenshot%202016-03-14%2012.47.43.png?dl=0?&raw=1)

* When searching for a more generic name, up to five search results will be displayed

![ScreenShot](https://www.dropbox.com/s/5k4dv02nmwkdx94/Screenshot%202016-03-14%2012.47.04.png?dl=0?&raw=1)

# Design and Technologies used

* The project uses the Angular JS framework for the front end design, and is structured as a single page application

* The Angular front-end uses a single controller and a service to manage the http requests to the Github API

* The backend (for the purposes of deployment) is a simple node.js server using express for routing

* Sass and CSS was used for the front end design and animations

* Waffle IO was used for managing the workflow in developing the app

* Protractor was used for E2E testing, and Karma as the test-runner for the Unit tests, both using the Jasmine testing framework

# Struggles and Issues to overcome/fix

* There is some addition refactoring of the code which could be done to improve the structure, namely:

  * Our existing Angular service has too many       responsibilities, and could be refactored into multiple services for the multiple API calls
  * The Angular service could be refactored further using templates and directives
  * Currently only 5 users are displayed for each search, this is an arbitrary constraint introduced to limit the API calls, however testing has shown this may be unnecessary


* In addition, some more features could be added including:

  * Error handling for the multiple API calls - these calls are currently returning promises so this should be relatively straightforward to implement
  * Continuous deployment from the master branch to Heroku using Codeship or similar
  * Adding Continuous Integration for testing using Travis CI or similar

# Future Development

* The project could be further enhanced by adding additional information on the users return by the search, including;

  * Favourite language(s) - based on the most common languages in the user's repositories
  * Score - implementing a scoring algorithm to rank/order the users return by the search (based on a function of followers, stars, repositories etc)
  * Leo mode - bask in the Glory of LEO!!!!!!

# Credits

* This project was developed by:

  [Arnold Manzano](https://github.com/arnoldmanzano),
  [Emma Baddeley](https://github.com/esbaddeley),
  [Mic Cassano](https://github.com/mic-css),
  [Rachel Smith](https://github.com/rachelsmithcode)

  We are all students at [Makers Academy](http://www.makersacademy.com/), a 12 week immersive web development bootcamp based in East London.
