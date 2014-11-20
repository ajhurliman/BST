
var _ = require('underscore');

var bstModule = exports;

bstModule.Node = Node;
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

bstModule.BST = BST;
function BST(val) {
  //the root is called start, root was giving me trouble
  this.start = new Node(val, null, null);
}

var myBst = new BST(10);
var myNode = new Node(1,1,1);


Node.prototype.show = function () {
  return this.data;
};

BST.prototype.insert = function (data) {
  var n = new Node(data, null, null);

  //first insertion is start
  if (this.start === null) {
    this.start = n;
  } else {
    //traverse down tree until insertion is a leaf
    var current = this.start;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  if (node) {
    this.inOrder(node.left);
    console.log(node.show() + " ");
    this.inOrder(node.right);
  }
};

BST.prototype.removeNode = function(node) {
  //if node has no children just delete it
  if (node.left === null && node.right === null) {
    return null;
  }

  if (node.left === null) {}
  //if node has 1 child delete it and the deleted
  //node's child becomes the child on the same side
  //of the deleted node's parent

  //if node has 2 children then go to
};

BST.prototype.findLow = function(node) {
  var low = node.data;
  while (node.left) {
    node = node.left;
    low = node.data;
  }
  return node.data;
};

BST.prototype.findHigh = function(node) {
  var high = node.data;
  while (node.right) {
    node = node.right;
    high = node.data;
  }
  return node.data;
};

BST.prototype.textCompile = function(node, results) {
  if (node.left) this.textCompile(node.left, results);

  if (node) {
    if (results[node.data]) {
      results[node.data]++;
    } else {
      console.log(node.data);
      results[node.data] = 1;
    }
  }

  if (node.right) this.textCompile(node.right, results);

  return results;

};
