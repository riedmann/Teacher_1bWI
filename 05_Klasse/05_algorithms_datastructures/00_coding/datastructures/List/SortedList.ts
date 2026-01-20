import { Node } from "../Node.ts";

export class SortedList {
  private head: Node | null;

  constructor() {
    this.head = null;
  }

  public add(value: number): void {
    const newNode = new Node(value);

    // Empty list or insert at head
    if (this.head === null || value < this.head.getValue()) {
      newNode.setNext(this.head);
      this.head = newNode;
      return;
    }

    // Find correct position to insert
    let current = this.head;
    while (
      current.getNext() !== null &&
      current.getNext()!.getValue() < value
    ) {
      current = current.getNext()!;
    }

    // Insert after current
    newNode.setNext(current.getNext());
    current.setNext(newNode);
  }
  public get(index: number): Node | null {
    return null;
  }

  public remove(index: number): boolean {
    return true;
  }
}
