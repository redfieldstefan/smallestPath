'use strict';

/**
 * Find shortest path in pyramid (and sum).
 */
var smallestPath = function (pyramid) {

  var expectedPathLength = 1;
  var paths = [];

  var removeDeadPaths = function(arr, length) {
    for(var i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i]) || arr[i].length < length) {
        arr.splice(i, 1);
      }
    }
  };

  var createNewFork = function(path, newHead) {
    var fork = path.slice();
    fork.shift();
    fork.unshift(newHead);
    return fork;
  };

  /**
  * loop over pyramid, starting at the bottom level, calculating the minimum sums moving upwards and saving the potential paths to arrive there.
  */
  for(var i = pyramid.length - 1; i; i--) {
    for(var j = 0; j < pyramid[i].length - 1; j++) {

      var branchA = pyramid[i][j];
      var branchB = pyramid[i][j + 1];
      var parentNode = pyramid[i - 1][j];

      if(branchA <= branchB) {
        if(!paths[j]) {
          paths[j] = [branchA]; //Make new path array starting from branchA.
        }
        if(paths[j].length > expectedPathLength) { //Another path merges into this one, fork a new branch.
          paths[j + 1] = createNewFork(paths[j], parentNode);
        } else {
            paths[j].unshift(parentNode);
        }
        pyramid[i - 1][j] = parseInt(parentNode) + parseInt(branchA);
      } else {
          if(!paths[j + 1]) {
            paths[j + 1] = [branchB]; //Make new path array starting from branchB.
          }
          paths[j + 1].unshift(parentNode);
          pyramid[i - 1][j] = parseInt(parentNode) + parseInt(branchB);
      }
    }

    expectedPathLength++;
    removeDeadPaths(paths, expectedPathLength);
  }

  return {
    sum: pyramid[0][0],  // Total sum of the shortest path.
    path: paths[0]// Array of items at each level constituting the 'path'.
  };
};

module.exports = {
  smallestPath: smallestPath
};

//HOW TO ARRIVE AT SUM
// working bottom up by finding minimum path sums at each level
// Step by Step:

// Pyramid
//          ['07'],
//       ['51', '29'],
//    ['13', '11', '70'],
// ['30', '31', '77', '45']

// 1
//           ['07'],
//       ['51', '29'],
//    ['43', '42', '115'],
//  ['30', '31', '77', '45']

// 2
//          ['07'],
//       ['93', '71'],
//    ['43', '42', '115'],
//  ['30', '31', '77', '45']

// 3
//          ['78'], <-- Sum
//       ['93', '71'],
//    ['43', '42', '115'],
//  ['30', '31', '77', '45']


//ARTICLES
// Best explaination and diagram of how to solve another variation of problem using "Dynamic Programming":
// www.mathblog.dk/project-euler-18


