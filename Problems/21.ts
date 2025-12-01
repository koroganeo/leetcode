class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // Base case: if either list is empty, return the other list
  if (list1 === null || list2 === null) {
    return list1 || list2;
  }

  // Compare the values of the current nodes
  if (list1.val < list2.val) {
    // If list1's value is smaller, it becomes the current node
    // Recursively merge the rest of list1 with list2
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    // If list2's value is smaller or equal, it becomes the current node
    // Recursively merge list1 with the rest of list2
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
