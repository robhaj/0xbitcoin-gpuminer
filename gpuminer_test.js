var web3utils = require('web3-utils');
const GPUMiner = require('./build/Release/gpuminer');

var difficultyTarget = 5841053340;
var challengeNumber = 2000;
var ethAddress = '0x8cc3daeC47ae39980155e93f8A3D19d36384ab1e';

//send data into the miner
console.log('diff target', GPUMiner.setDifficultyTarget(difficultyTarget));
console.log('challenge number', GPUMiner.setChallengeNumber(challengeNumber));
console.log('eth address', GPUMiner.setEthAddress(ethAddress));

console.log('random number', GPUMiner.getRandomNumber());

console.log('hashtest ', GPUMiner.testHashFunction(12345))
//start the infinite mining loop which is in c++


setInterval(function () {
  console.log('asking GPU process for solutions...')
  var gpu_solutions = GPUMiner.getSolutionsBuffer()
  console.log(gpu_solutions);

  var gpu_solutions = GPUMiner.clearSolutionsBuffer()
}, 2000);

setTimeout(function () {
  var response = GPUMiner.startMining()
  console.log(response)

}, 0);
