class Node:
    def __init__(self, value, right = None, left = None, center = None):
        self.value = value
        self.right = right
        self.left = left
        self.center = center

class Tree:
    def __init__(self, deep, arr = ['/', '+', '-']):
        self.root = Node('root')
        self.resArr = []
        self.initialize(self.root, deep, arr)
        self.permutation(self.root, '')
    
    def initialize(self, node, deep, arr = ['/', '+', '-']):
        if deep != 0:
            node.left = Node(arr[0])
            node.right = Node(arr[1])
            node.center = Node(arr[2])
            self.initialize(node.left, deep - 1)
            self.initialize(node.right, deep - 1)
            self.initialize(node.center, deep - 1)

    def permutation(self, node, res):
        if node.value != 'root':
            res += node.value
        if (node.left):
            self.permutation(node.left, res)
            self.permutation(node.center, res)
            self.permutation(node.right, res)
        else: 
            self.resArr.append(res)
        return res[:-1]

tree = Tree(9)

str = 'ABCD'
print(str[::-1])

for i in str:
    print(i)