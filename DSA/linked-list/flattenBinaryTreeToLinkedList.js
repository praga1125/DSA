class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new node(data);
        if(this.root == null){
            this.root = newNode;
        } 
        else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node1, newNode){
        if(newNode.data < node1.data){
            if(node1.left == null){
                node1.left = newNode;
            }
            else{
                this.insertNode(node1.left, newNode);
            }
        }
        else{
            if(node1.right == null){
                node1.right = newNode;
            }
            else{
                this.insertNode(node1.right, newNode);
            }
        }
    }

    flatten(root) {
        if (root === null){
             return null;
        }
        let current = root;
        while (current !== null){
            if (current.left) {
                var last = current.left;
                while (last.right !== null){ 
                    last = last.right;
                }
                var tmp = current.right;
                current.right = current.left;
                last.right = tmp;
                current.left = null;
            }
            current = current.right;
        }    
        return root;
    } 

    printList(node){
        let result = '';
        while(node != null){
        result += String(node.data) + ' => ';
        node = node.right;
        }
        console.log(result);
     }
}

let obj = new binaryTree();
let arr = [1, 2, 5, 3, 4, 6];
console.log(`The given binary tree values :`);
console.log(arr);
for(i of arr){
    obj.insert(i);
}
console.log(`The flattened binary tree to linkedlist :`);
let result = obj.flatten(obj.root);
obj.printList(result);

