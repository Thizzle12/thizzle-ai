import MainServerCalls from './MainServerCalls'

function getNewRandomBoard(cb){
  return MainServerCalls.getCall('/slidingpuzzle/new', "GET", cb);
}


const SlidingPuzzleServerCalls = {getNewRandomBoard};
export default SlidingPuzzleServerCalls;
