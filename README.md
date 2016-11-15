# Udacity Front-end Nanodegree - Project 

https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1

## Website Performance Optimization

### Optimization steps for PageSpeed
1. In index.html
   * inline css/style.css
   * mark css/print.css as 'media="print"'
   * mark http://www.google-analytics.com/analytics.js as async
   * load Google Fonts asynchronously
2. In gulpfile.js
   * compress pizzeria.jpg

### Optimization steps For frame-rate at 60fps when scrolling
In views/js/main.js
   * move document.body.scrollTop out of for loop in function updatePositions()

### Optimization steps for resizing pizza
In views/js/main.js
   * remvoe function which is unnecessary

### Other optimizations
In views/js/main.js 
   * replace querySelectorAll() by getElementsByClassName()
   * move "var pizzasDiv = document.getElementById("randomPizzas");" out of for loop
   * in function updatePositions, use two for loops to calculate style
   * when the page loads, calculate the number of loaded pizza image according to window.innerHeight.

###  How to test

1. index.html achieves a PageSpeed score of at least 90 for Mobile and Desktop.

2. Go to views/pizza.html. Page is rendered with a consistent frame-rate at 60fps when scrolling.

3. Stay on views/pizza.html. Time to resize pizza is less than 5 ms using the pizza size slider on the views/pizza.html page. Resize time is shown in the browser developer tools.


You can download the code, unzip it, then open index.html, or test it on github page: https://direction123.github.io/Udacity-Performance-Optimization/views/pizza.html