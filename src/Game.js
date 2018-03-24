var knightPosition = [1, 7];
var bishopPosition = [1, 3];
var observer = null;

function emitChange() {
  if (knightPosition ){
    observer(knightPosition) ;
  } else if(bishopPosition) {
    observer(bishopPosition) ;
  }
  
}

exports.observe = function(o) {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  emitChange();
};

exports.moveKnight = function(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
};

exports.moveBishop = function(toX, toY) {
  bishopPosition = [toX, toY];
  emitChange();
};

exports.canMoveKnight = function(toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};
exports.canMoveBishop = function(toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;
  if (Math.abs(dx) == Math.abs(dy)) {
    return 1; // same diagonal
  } else if ((Math.abs(dx) + Math.abs(dy)) % 2 != 0) {
    return -1; //path does not exist
  } else {
    /*path exists*/
    /* max 2 moves possible*/

    return 2;
  }
};
