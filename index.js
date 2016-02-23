/* global console */

var Node = function (item) {
    this.key = item;
    this.left = null;
    this.right = null;
};

var BinaryTree = function () {
    this.root = null;
};

BinaryTree.prototype = {
    printPostOrder: function (node) {
        if (!node) {
            return;
        }

        // first recur on left subtree
        this.printPostOrder(node.left);

        // then recur on right subtree
        this.printPostOrder(node.right);

        // now deal with the node
        console.log(node.key + ' ');
    },
    printInOrder: function (node) {
        if (!node) {
            return;
        }
        // first recur on left child
        this.printInOrder(node.left);

        // now deal with the node
        console.log(node.key + ' ');

        // then recur on right subtree
        this.printPostOrder(node.right);
    },
    printPreOrder: function (node) {
        if (!node) {
            return;
        }

        // now deal with the node
        console.log(node.key + ' ');

        // first recur on left child
        this.printPreOrder(node.left);

        // then recur on right subtree
        this.printPreOrder(node.right);
    }
};
    

var tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log('Preorder traversal of binary tree is ');
tree.printPreOrder(tree.root);

console.log('Inorder traversal of binary tree is ');
tree.printInOrder(tree.root);

console.log('Postorder traversal of binary tree is ');
tree.printPostOrder(tree.root);
