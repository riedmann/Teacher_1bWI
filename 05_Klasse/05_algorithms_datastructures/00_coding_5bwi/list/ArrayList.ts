import { List } from "./List";

export class ArrayList implements List {
  private items: number[] = [];

  add(value: number): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): number {
    throw new Error("Method not implemented.");
  }
  delete(index: number): void {
    throw new Error("Method not implemented.");
  }
}
