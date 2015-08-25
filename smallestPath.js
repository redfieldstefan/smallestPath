'use strict';

/**
 * Find shortest path in pyramid (and sum).
 */
var smallestPath = function (pyramid) {

  var expectedPathLength = 1;
  var paths = [];

  var removeDeadPaths = function(arr, length){
    for(var i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i]) || arr[i].length < length) {
        arr.splice(i, 1);
      }
    }
  };

  var newFork = function(path, newHead){
    var fork = path.slice();
    fork.shift();
    fork.unshift(newHead);
    return fork;
  };

  for(var i = pyramid.length - 1; i; i--) {
    for(var j = 0; j < pyramid[i].length - 1; j++) {
      var branchA = pyramid[i][j];
      var branchB = pyramid[i][j + 1];
      var parent = pyramid[i - 1][j];

      if(branchA <= branchB) {
        if(!paths[j]) {
          paths[j] = [branchA]; //Make new array starting from base of the path
        }

        if(paths[j].length > expectedPathLength) { //Another path merges into this one, fork a new branch
          paths[j + 1] = newFork(paths[j], parent);
        } else {
          paths[j].unshift(parent);
        }
        pyramid[i - 1][j] = parseInt(parent) + parseInt(branchA);

      } else {
        if(!paths[j + 1]) {
          paths[j + 1] = [branchB]; //Make new array starting from base of the path
        }
        paths[j + 1].unshift(parent);
        pyramid[i - 1][j] = parseInt(parent) + parseInt(branchB);
      }
    }

    expectedPathLength++;
    removeDeadPaths(paths, expectedPathLength);
  }

  return {
    sum: pyramid[0][0],  // TODO: Total sum of the shortest path.
    path: paths[0]// TODO: Array of items at each level constituting the 'path'.
  };
};

module.exports = {
  smallestPath: smallestPath
};


//POSSIBLE PATHS
//h - height
//NUMBER OF PYRAMID PATHS = 2(h -1)

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

