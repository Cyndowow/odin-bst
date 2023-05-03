import Tree from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(tree);

tree.prettyPrint();

console.log(tree.isBalanced()); //true


console.log(tree.levelOrder()); //   8,  4,   67, 1,  5,  9,  324, 3,  7, 23, 6345

console.log(tree.inorder()); //    1,   3,    4,  5,   7,   8,  9,  23,  67, 324, 6345

console.log(tree.preorder());//    8,   4,    1, 3,  5,   7,   67, 9,  23, 324, 6345

console.log(tree.postorder());//     3,  1, 7,    5,  4, 23, 9, 6345,  324, 67, 8

//Unbalance
tree.insert(250);
tree.insert(350);
tree.insert(450);
tree.insert(400);
tree.insert(300);

tree.prettyPrint();

console.log(tree.isBalanced());//false

//rebalance

tree.rebalance();

tree.prettyPrint();

console.log(tree.isBalanced());//true

console.log(tree.levelOrder());
/*    23,   5, 324,   3,   8,
   250, 400,   1,   4,   7,
     9,  67, 300, 350, 450,
  6345
*/

console.log(tree.inorder());
/*     1,   3,   4,   5,   7,
     8,   9,  23,  67, 250,
   300, 324, 350, 400, 450,
  6345
*/

console.log(tree.preorder());
/*    23,   5,   3,   1,   4,
     8,   7,   9, 324, 250,
    67, 300, 400, 350, 450,
  6345
*/

console.log(tree.postorder());
/*    1,    4,   3,   7,   9,
    8,    5,  67, 300, 250,
  350, 6345, 450, 400, 324,
   23
*/
