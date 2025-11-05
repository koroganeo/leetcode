/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Create a dummy head node to simplify list construction
  const dummyHead: ListNode = new ListNode();

  // Pointer to track the current position in the result list
  let currentNode: ListNode = dummyHead;

  // Variable to store the carry value and current sum
  let carryOver: number = 0;

  // Process both lists until all nodes are visited and no carry remains
  while (l1 !== null || l2 !== null || carryOver !== 0) {
    // Add value from first list if available
    if (l1 !== null) {
      carryOver += l1.val;
      l1 = l1.next;
    }

    // Add value from second list if available
    if (l2 !== null) {
      carryOver += l2.val;
      l2 = l2.next;
    }

    // Create new node with the digit (sum % 10)
    currentNode.next = new ListNode(carryOver % 10);

    // Move pointer to the newly created node
    currentNode = currentNode.next;

    // Calculate carry for the next iteration
    carryOver = Math.floor(carryOver / 10);
  }

  // Return the actual result list (skip dummy head)
  return dummyHead.next;
}
