import Node from "./node.js";

export default class Tree {
    constructor(arr) {
        let sortedArray = [...new Set(arr)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(sortedArray, start = 0, end = sortedArray.length - 1) {
        if(start > end) {
            return null;
        }

        const mid = Math.floor(sortedArray.length / 2);
        const root = new Node(sortedArray[mid]);
        root.left = this.buildTree(sortedArray, start, mid -1);
        root.right = this.buildTree(sortedArray, mid + 1, end);
        return root;
    }

    insert(value, root = this.root) {
        if(root === null) {
            root = Node(value);
            return root;
        }

        if(value < root.data) {
            root.left = this.insert(value, root.left);
        } else if (value > root.data) {
            root.right = this.insert(value, root.right);
        }

        return root;
    }

    delete(value, root = this.root) {
        //Base case
        if(root === null) {
            return null;
        }

        //search the Tree
        if(value < root.data) {
            root.left = this.delete(value, root.left);
        } else if (value > root.data) {
            root.right = this.delete(value, root.right);
        }


        //value match --> delete node, update pointers
        else {

            //node only has 1 child
            if(root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            //node has 2 children
            else {
                //replace node with next smallest value
                const minData = function findNextSmallestRightData(root) {
                    let min = root.data;
                    let newRoot = root;

                    //search for left node without left children
                    while(newRoot.left !== null) {
                        min = root.left.data;
                        newRoot = root.left;
                    }

                    return min;
                }

                root.data = minData(root.right);

                //delete copied node from minData();
                root.right = this.delete(root.data, root.right);
            }
        }

        return root;
    }

    find(value, root = this.root) {
        if(value === null || root.data === value) {
            return root;
        } 

        if(value > root.data) {
            return this.find(value, root.left);
        }
        return this.find(value, root.right);
    }

    levelOrder(arr = [], queue = [], root = this.root) {
        if(root === null) {
            return;
        }

        arr.push(root.data);
        //push children into queue
        queue.push(root.left);
        queue.push(root.right);

        //move to next level
        while(queue.length) {
            const level = queue[0];
            queue.shift();
            this.levelOrder(arr, queue, level)
        }
        return arr;
    }

    inorder(arr= [], root = this.root) {
        if(root === null) {
            return;
        }

        //left subtree
        if(root.left) {
            this.inorder(arr, root.left);
        }

        //root
        arr.push(root.data)

        //right subtree
        if(root.right) {
            this.inorder(arr, root.right);
        }
        return arr;
    }

    preorder(arr = [], root = this.root) {
        if(root === null) {
            return;
        }

        arr.push(root.data)

        if(root.left) {
            this.preorder(arr, root.left);
        }

        if(root.right) {
            this.preorder(arr, root.right);
        }

        return arr;
    }

    postorder(arr = [], root = this.root) {
        if(root === null) {
            return;
        }

        if(root.left) {
            this.postorder(arr, root.left);
        }

        if(root.right) {
            this.postorder(arr, root.right);
        }

        arr.push(root.data);

        return arr;
    }

    height(root = this.root) {
        if(root === null) {
            return 0;
        }

        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);

        if(lHeight > rHeight) {
            return lHeight + 1;
        } else {
            return rHeight + 1;
        }
    }

    depth(node, root = this.root, depth = 0) {
        if(root === null || node === null) {
            return;
        }

        if(node === root) {
            return `Depth: ${depth}`;
        }

        if(node.data < root.data) {
            return this.depth(node, root.left, depth += 1);
        } else {
            return this.depth(node, root.right, depth += 1);
        }
    }

    isBalanced(root = this.root) {
        const lHeight = this.height(root.left);
        const rHeight = this.height(root.right);
        const diff = Math.abs(lHeight - rHeight);
        return diff < 2? "true" : "false";
    }

    rebalance(root = this.root) {
        let arr = thi.levelOrder([], [], root);
        arr.sort((a, b) => a - b);
        return this.root = this.buildTree(arr);
    }
}