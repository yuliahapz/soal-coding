function treeNode (val, left=null, right=null) {  //binary tree
    this.val=val;  //value
    this.left=left;
    this.right=right;
}

function maxDepth(root) {  //max depth
    if(root===null){
        return 0;
    };

    const leftDepth = maxDepth(root.left);  //left depth
    const rightDepth = maxDepth(root.right);  //menemukan rekursi max depth kanan
    return Math.max(leftDepth, rightDepth) + 1;  //max depth
}

const root= new treeNode(1, new treeNode(2, new treeNode(4),new treeNode(5)),new treeNode(3));  //mengembalikan maksimal depth diantara kiri dan kanan, tambahkan 1 untuk depth
console.log(maxDepth(root));