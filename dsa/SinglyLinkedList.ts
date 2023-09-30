class Node<T> {
  public value: T | null;
  public next: T | null;

  constructor(value: T | null = null) {
    this.value = value;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  public length: number;
  public head: Node<T> | null;
  public tail: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(item: T): void {
    const node = new Node<T>(item);
    node.next = this.head as T;
    this.head = node;
    if (!this.length) this.tail = node;
    this.length++;
  }

  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {
    return;
  }
  get(idx: number): T | undefined {
    return;
  }
  removeAt(idx: number): T | undefined {
    return;
  }
}
