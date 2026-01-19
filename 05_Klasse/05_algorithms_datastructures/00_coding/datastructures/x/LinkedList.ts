import { List } from "./List.ts";
import { Node } from "./Node.ts";

export class LinkedList implements List {
  private head: Node | null;

  constructor() {
    this.head = null;
  }
  get(index: number): number | null {
    let current = this.head;
    let currentIndex = 0;

    while (current !== null) {
      if (currentIndex === index) {
        return current.getValue();
      }
      current = current.getNext();
      currentIndex++;
    }

    return null; // Index out of bounds
  }

  public add(value: number): void {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.getNext() !== null) {
        current = current.getNext()!;
      }
      current.setNext(newNode);
    }
  }
}
