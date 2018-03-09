import MainServerCalls from './MainServerCalls'


function getComputerMove(board, cb){
    var objectBody = {'board': board};
  return MainServerCalls.postCall('/tic/move', objectBody, "POST", cb);
}


const TicTacToeCalls = { getComputerMove};
export default TicTacToeCalls;
