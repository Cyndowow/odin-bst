import Tree from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(tree);

console.log(tree.isBalanced(tree)); //true


console.log(tree.levelOrder()); //   8,  4,   67, 1,  5,  9,  324, 3,  7, 23, 6345

console.log(tree.inorder()); //    1,   3,    4,  5,   7,   8,  9,  23,  67, 324, 6345

console.log(tree.preorder());//    8,   4,    1, 3,  5,   7,   67, 9,  23, 324, 6345

console.log(tree.postorder());//     3,  1, 7,    5,  4, 23, 9, 6345,  324, 67, 8


//prettyPrint(tree);