# Banner boilerplate 2017
For (Google Doubleclick / Ad words)

![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)
![Built with Greensock](https://img.shields.io/badge/Built%20with-Greensock-brightgreen.svg)



## Requirements
* [NodeJS](http://nodejs.org/)
* [NPM](https://www.npmjs.org/)
* [GruntJS](http://gruntjs.com/) (`grunt-cli`)
* [Greensock](http://www.greensock.com/) (`CDN`)

## Installation
* Clone Repo and cd to it
* Run `$ npm install` to install all of the project's dependencies
* Run `$ bower install` to install all of the required libraries
* Run `$ grunt` to create production/build versions of js/css
* Run `$ grunt watch` to compile

*Uses live reload (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)*

## Working with
* At the top of index.html firstly replace `<meta name="ad.size" content="width=300,height=250">` with the size of your banner.

* Currently uses unsplash random images. To add/repalce images go to `src/img` and change in `index.html`. You can add more images but they must also be added to index.html inside `class="container"` and added to the timeline in `main.js` if they are animated.

* Set the container size in `main.scss` inside `src/scss` to the size of the banner. Ensure that the border is a contrasting color as this is important for the banner to pass the QA process.

* There are a number of variables set at the top of `main.scss` which should change most things you need.

* This project uses Greensock's timeline. In `main.js` inside `src/js` you can adjust the easing, looping, animation and order. You can add more timelines (see GSAP docs) for more complicated banners. 

* Click through's are added in the backend of doublick studio/ad words for tracking purposes.

## Production

* Before uploading to Ad words or double click you must remove the `main.css.map` from `dist/css` as this will be rejected.

* Zip up compiled files - `index.html` and  `dist` 

* At this stage you can run the files through a validator:
[Ad words](https://h5validator.appspot.com/adwords#/asset) 
[Doubleclick](https://h5validator.appspot.com/dcm#/asset) 






