class Node:
    def __init__(self, value, parent = None):
        self.parent = parent
        self.value = value

class Tree:
    def __init__(self):
        self.root = Node(0)
        self.node1 = Node(1, self.root)
        self.node2 = Node(2, self.node1)
        self.node3 = Node(3, self.node2)
        self.node4 = Node(4, self.node2)
        self.node5 = Node(5, self.node3)
        self.node6 = Node(6, self.node5)

def findParent(deep1, deep2, node_1, node_2):
    if (deep1 == deep2):
        if (node_1 == node_2):
            return node_1.value
        elif (node_1.parent == node_2.parent):
            return node_1.parent.value
        else:
            return findParent(deep1-1, deep2-1, node_1.parent, node_2.parent)
    elif (deep1 >= deep2):
        return findParent(deep1-1, deep2, node_1.parent, node_2)
    elif (deep1 <= deep2):
        return findParent(deep1, deep2-1, node_1, node_2.parent)

def findDeep(node1, node2):
        deep1, deep2 = 0, 0
        while (node1.parent != None):
            node1 = node1.parent
            deep1 += 1
        while (node2.parent != None):
            node2 = node2.parent
            deep2 += 1
        return [deep1, deep2]

tree = Tree()
d1, d2 = findDeep(tree.node4, tree.node1)
print(findParent(d1, d2, tree.node4, tree.node1))