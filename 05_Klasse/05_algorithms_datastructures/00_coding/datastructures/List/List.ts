import { Node } from "./Node.ts";

export class List {
  private head: Node | null;

  constructor() {
    this.head = null;
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
