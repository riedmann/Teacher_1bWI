import { ArrayList } from "./ArrayList.ts";
import { LinkedList } from "./LinkedList.ts";
import { List } from "./List.ts";

const list: List = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
console.log("trest");

console.log(list.get(1)); // Sollte 20 ausgeben
