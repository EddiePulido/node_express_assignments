class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }


}


class BST{
    constructor(){
        this.root = null;
    }

    insert(val){
        if(this.root == null){
            this.root = new Node(val);
            return this;
        }

        var newNode = new Node(val);
        var runner = this.root;

        while(true){
            if(runner.val > val){
                if(runner.left == null){
                    runner.left = newNode;
                    return this;
                }else{
                    runner = runner.left;
                }
            }else{
                if(runner.right == null){
                    runner.right = newNode;
                    return this;
                }else{
                    runner = runner.right;
                }
            }
        }
    }

    depth(node = this.root){
        if(node == null){
            return 0;
        }

        var leftDepth = this.depth(node.left);
        var rightDepth = this.depth(node.right);

        var biggest = Math.max(leftDepth,rightDepth);

        return biggest + 1;
    }

}