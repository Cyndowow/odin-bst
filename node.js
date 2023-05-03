export default class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
/*
export default function Node(data, left = null, right = null) {
    return {
        data: data,
        left: left,
        right: right,
    }
}*/