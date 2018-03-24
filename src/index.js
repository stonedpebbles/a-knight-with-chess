var React = require('react')
var ReactDOM = require('react-dom')
var Board = require('./Board')
var observe = require('./Game').observe

var rootEl = document.getElementById('root')

observe(function (position) {
  ReactDOM.render(
    <Board position={position} />,
    rootEl
  )
})