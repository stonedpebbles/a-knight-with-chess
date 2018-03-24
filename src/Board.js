var React = require('react')
var DragDropContext = require('react-dnd').DragDropContext
var HTML5Backend = require('react-dnd-html5-backend')
var PropTypes = React.PropTypes
var BoardSquare = require('./BoardSquare')
var Knight = require('./Knight') 
var Bishop = require('./Bishop')
var moveKnight, canMoveKnight, moveBishop, canMoveBishop =  require('./Game')

var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired 
  },

  renderSquare: function (i) {
    var x = i % 8
    var y = Math.floor(i / 8)
    var black = (x + y) % 2 === 1

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}
           onClick={this.handleSquareClick.bind(this, x, y)}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    )
  },

  renderPiece: function (x, y) {
    var knightX = 1
    var knightY = 7
    var bishopX = 1
    var bishopY = 3

    if (x === knightX && y === knightY) {
      return <Knight />
    } else if (x === bishopX && y === bishopY) {
      return <Bishop />}
  },

  handleSquareClick: function (toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    } else if (canMoveBishop(toX, toY)) {
      moveBishop(toX, toY)
    }
  },

  render: function () {
    var squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i))
    }

    return (
      <div style={{
        width: 400,
        height: 400,
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    )
  }
})

module.exports = DragDropContext(HTML5Backend)(Board)