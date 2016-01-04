var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./jsx/dropdown.jsx');

require("./css/main.scss");

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};
// Ask react to render the class
var element = React.createElement(Dropdown,options);

// Tell it where to place rendered element in the DOM
ReactDOM.render(element, document.querySelector('.target'));
