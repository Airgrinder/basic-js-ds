const {NotImplementedError} = require('../extensions/index.js')

const {Node} = require('../extensions/list-tree.js')

class BinarySearchTree {
    constructor() {
        this.roots = null
    }

    add(data) {
        if (!this.roots) return this.roots = new Node(data)
        else {
            let currentBranch = this.roots
            while (true) {
                if (data <= currentBranch.data) {
                    if (!currentBranch.left) {
                        currentBranch.left = new Node(data)
                        return this
                    }
                    currentBranch = currentBranch.left
                } else if (data > currentBranch.data) {
                    if (!currentBranch.right) {
                        currentBranch.right = new Node(data)
                        return this
                    }
                    currentBranch = currentBranch.right
                }
            }
        }
    }

    root() {
        return this.roots
    }

    has(data) {
        if (!this.roots) return false
        else {
            let currentBranch = this.roots
            while (currentBranch) {
                if (data === currentBranch.data) return true
                else if (data <= currentBranch.data) currentBranch = currentBranch.left
                else if (data > currentBranch.data) currentBranch = currentBranch.right
            }
            return false
        }
    }

    find(data) {
        if (!this.roots) return null
        else {
            let currentBranch = this.roots
            while (currentBranch) {
                if (data === currentBranch.data) return currentBranch
                else if (data <= currentBranch.data) currentBranch = currentBranch.left
                else if (data > currentBranch.data) currentBranch = currentBranch.right
            }
            return null
        }
    }

    remove(data) {
        const removeNode = (currentBranch, data) => {
            if (!currentBranch) return null
            if (data === currentBranch.data) {
                if (!currentBranch.left && !currentBranch.right) return currentBranch = null
                if (!currentBranch.left) return currentBranch.right
                if (!currentBranch.right) return currentBranch.left
                let targetNode = currentBranch.right
                while (targetNode.left) targetNode = targetNode.left
                currentBranch.data = targetNode.data
                currentBranch.right = removeNode(currentBranch.right, targetNode.data)
                return currentBranch
            } else if (data < currentBranch.data) {
                currentBranch.left = removeNode(currentBranch.left, data)
                return currentBranch
            } else {
                currentBranch.right = removeNode(currentBranch.right, data)
                return currentBranch
            }
        }
        this.roots = removeNode(this.roots, data)
    }

    min() {
        if (!this.roots) return null
        let currentNode = this.roots
        while (currentNode.left) {
            currentNode = currentNode.left
            console.log(currentNode)
        }
        return currentNode.data
    }

    max() {
        if (!this.roots) return null
        let currentNode = this.roots
        while (currentNode.right) {
            currentNode = currentNode.right
            console.log(currentNode)
        }
        return currentNode.data
    }
}

module.exports = {
    BinarySearchTree
}