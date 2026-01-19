export class Node {
  private value: number;
  private next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  public getValue(): number {
    return this.value;
  }

  public getNext(): Node | null {
    return this.next;
  }

  setNext(next: Node | null): void {
    this.next = next;
  }
}
