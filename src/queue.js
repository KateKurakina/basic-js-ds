const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    if (this.head === null) {
      return null;
    }

    const result = {
      value: this.head.value,
      next: null
    };

    let current = this.head.next;
    let resultCurrent = result;

    while (current !== null) {
      resultCurrent.next = {
        value: current.value,
        next: null
      };

      resultCurrent = resultCurrent.next;
      current = current.next;
    }

    return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head !== null) {
      const value = this.head.value;
      this.head = this.head.next;
      if (this.head === null) {
            this.tail = null;
      }

      return value;
    }
  }
}

module.exports = {
  Queue
};
