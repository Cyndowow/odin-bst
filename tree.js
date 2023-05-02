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
}