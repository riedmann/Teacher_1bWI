export class ArrayList {
  private items: number[];

  constructor() {
    this.items = [];
  }

  public add(value: number): void {
    this.items.push(value);
  }

  public get(index: number): number | null {
    if (index < 0 || index >= this.items.length) {
      return null;
    }
    return this.items[index];
  }
}
