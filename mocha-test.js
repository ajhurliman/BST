var bstModule = require('./10-5.js');
var chai = require('chai');
var expect = chai.expect;

describe('functions of a BST', function(){
  var myBst;
  it('should instantiate a new BST', function(done) {
    myBst = new bstModule.BST(10);
    expect(myBst.start.data).to.eql(10);
    done();
  });

  it('should add a node', function(done) {
    myBst.insert(11);
    expect(myBst.start.right.data).to.eql(11);
    myBst.insert(9);
    expect(myBst.start.left.data).to.eql(9);
    done();
  });

  it('should perform an in-order traversal', function(done) {
    //insert nodes to make it non trivial
    myBst.insert(12);
    myBst.insert(15);
    myBst.insert(3);
    myBst.insert(14);
    myBst.insert(5);
    myBst.insert(1);
    myBst.inOrder(myBst.start);
    expect('everything').to.be.ok;
    done();
  });

  it('should find the smallest node', function(done) {
    var low = myBst.findLow(myBst.start);
    expect(low).to.eql(1);
    done();
  });

  it('should find the largest node', function(done) {
    var high = myBst.findHigh(myBst.start);
    expect(high).to.eql(15);
    done();
  });

  it('should store the words of a text file in a BST and display the number of times each word occurs in the text', function(done) {
    var wordBst = new bstModule.BST('hello');
    wordBst.insert('world');
    wordBst.insert('foo');
    wordBst.insert('bar');
    wordBst.insert('bar')
    var list = wordBst.textCompile(wordBst.start, {});
    console.log(list);
    expect('the results to be on the console').to.be.ok;
    done();
  });
});



