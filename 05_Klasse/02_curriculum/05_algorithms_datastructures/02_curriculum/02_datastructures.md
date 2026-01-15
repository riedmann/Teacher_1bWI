# Overview of Fundamental Data Structures

Understanding which data structure to use depends on the specific needs of your application. This guide covers the most common structures used in AlgoDat.

---

## 1. Array
An **Array** is a collection of items stored at contiguous (adjacent) memory locations. It is the most basic data structure.



* **Advantages:**
    * **Fast Access:** You can access any element instantly if you know the index (O(1) time).
    * **Memory Efficiency:** No extra memory is needed for pointers or links.
* **Disadvantages:**
    * **Fixed Size:** You must define the size at the start (in most languages).
    * **Expensive Deletion/Insertion:** If you remove the first item, every other item has to be shifted.

---

## 2. Linked List (Singly Linked)
A **Linked List** consists of nodes where each node contains data and a "pointer" (link) to the next node in the sequence.



* **Advantages:**
    * **Dynamic Size:** Can grow or shrink during runtime.
    * **Easy Insertion/Deletion:** You just change a pointer; no need to shift other elements.
* **Disadvantages:**
    * **Slow Search:** You must start at the head and walk through the list (O(n) time).
    * **Extra Memory:** Each node needs extra space to store the pointer.

---

## 3. Doubly Linked List
Similar to a Linked List, but each node has **two** pointers: one to the next node and one to the previous node.



* **Advantages:**
    * **Bi-directional:** You can traverse both forward and backward.
    * **Easier Deletion:** You can delete a node even if you only have a pointer to that specific node.
* **Disadvantages:**
    * **More Memory:** Requires two pointers per node instead of one.
    * **Complexity:** More logic is required to keep both pointers updated.

---

## 4. Stack
A **Stack** follows the **LIFO** (Last-In, First-Out) principle. Think of a stack of dinner plates; you add to the top and take from the top.



* **Advantages:**
    * **Simplicity:** Very easy to implement and understand.
    * **Controlled Access:** Useful for reversing things or managing function calls (the "Call Stack").
* **Disadvantages:**
    * **Limited Access:** You cannot access the middle or bottom elements without removing everything on top.

---

## 5. Queue
A **Queue** follows the **FIFO** (First-In, First-Out) principle. Like a line at a grocery store: the first person in is the first person served.



* **Advantages:**
    * **Fairness:** Processes data in the exact order it arrives.
    * **Buffering:** Great for managing tasks (like a print queue or web server requests).
* **Disadvantages:**
    * **Limited Access:** Like the stack, you can only easily access the front and back.

---

## 6. Tree (Binary Tree)
A **Tree** is a hierarchical structure. A Binary Tree is a specific type where each node has at most two children (Left and Right).



* **Advantages:**
    * **Hierarchical Data:** Perfect for file systems or HTML DOM structures.
    * **Efficient Searching:** If balanced (like a Binary Search Tree), you can find items very quickly.
* **Disadvantages:**
    * **Complexity:** Much harder to implement than a simple list.
    * **Rebalancing:** If the tree becomes "unbalanced" (all nodes on one side), it becomes as slow as a linked list.

---

## Summary Table

| Data Structure | Access Speed | Insertion Speed | Best Use Case |
| :--- | :--- | :--- | :--- |
| **Array** | Very Fast | Slow | Fixed-size lists, math |
| **Linked List** | Slow | Fast | Dynamic lists where order changes |
| **Stack** | Fast (Top only) | Fast | Undo buttons, recursion |
| **Queue** | Fast (Front only)| Fast | Waiting lists, task scheduling |
| **Tree** | Fast (if balanced)| Fast | Databases, file systems |

