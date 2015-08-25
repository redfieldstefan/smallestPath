'use strict';

var chai = require('chai');
var expect = chai.expect;
var smallestPath = require('../smallestPath.js').smallestPath;
var testPyramid1 = [
            ['07'],
          ['51', '29'],
       ['13', '11', '70'],
    ['30', '31', '77', '45']
];

var testPyramid2 = [
            ['07'],
          ['51', '29'],
       ['13', '11', '70'],
    ['30', '31', '77', '45'],
  ['01', '31', '77', '45', '02']
];

var testPyramid3 = [
            ['07'],
          ['51', '29'],
       ['13', '11', '02'],
    ['30', '31', '77', '45'],
  ['01', '31', '77', '45', '02'],
['99', '99', '77', '45', '02', '01']
];

var test1 = smallestPath(testPyramid1);
var test2 = smallestPath(testPyramid2);
var test3 = smallestPath(testPyramid3);

describe('Find smallest path and sum from top to bottom of numeric pyramid', function() {

  it('finds the path resulting in the shortest sum', function(){
    expect(test1.path).to.eql(['07', '29', '11', '31']);
    expect(test2.path).to.eql(['07', '51', '13', '30', '01']);
    expect(test3.path).to.eql(['07', '29', '02', '45', '02', '01']);
  });

  it('finds the shortest possible sum', function() {
    expect(test1.sum).to.eql(78);
    expect(test2.sum).to.eql(102);
    expect(test3.sum).to.eql(86);
  });

});
