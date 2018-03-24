var React = require("react")
var PropTypes = React.PropTypes
var ItemTypes = require('./Constants').ItemTypes
var DragSource = require('react-dnd').DragSource

var bishopSource = {
  beginDrag: function (props) {
    return {}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

var Bishop = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function() {
    var connectDragSource = this.props.connectDragSource
    var isDragging = this.props.isDragging

    return connectDragSource(
      <div style={{opacity: isDragging ? 0.5 : 1, fontSize: 34, fontWeight: 'bold', cursor: 'move'}}>
        x
      </div>
    )
  }
})

module.exports = DragSource(ItemTypes.BISHOP, bishopSource, collect)(Bishop)