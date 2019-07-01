function LinkedList() {
  this.head;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
}

LinkedList.prototype.pushed = function(element) {
  var node = {
    value: element,
    next: null
  };
  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.removeDuplicates = function(list) {
  const set = new Set();
  let previousNode = this.head;
  let currentNode = this.head.next;

  this.head.value = this.head.next.value;

  while (previousNode && currentNode) {
    const has = set.has(currentNode.value);
    const value = currentNode.value;

    set;
    has;
    value;

    if (set.has(currentNode.value)) {
      // Here, we want to delete currentNode from the linked list.
      previousNode.next = currentNode.next;
    } else {
      set.add(currentNode.value);
      previousNode = currentNode;
    }

    currentNode = currentNode.next;
  }

  return list;
};

var LL = new LinkedList();

LL.pushed(2);
LL.pushed(1);
LL.pushed(1);
LL.pushed("hi");
LL.pushed(3);
LL.pushed("hi");
LL.pushed(6);
LL.pushed(2);

LL.removeDuplicates(); //can read in browser
//console.log(JSON.stringify(LL, null, 2));
console.log(JSON.stringify(LL.removeDuplicates(LL, null, 2)));
