class Node<T> {
  public value: T | null;
  public next: Node<T> | null;

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
    node.next = this.head as Node<T>;
    this.head = node;
    if (!this.length) this.tail = node;
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length)
      throw new Error(
        `IndexOutOfBounds: Cannot insert at index ${idx} with length ${this.length}`
      );

    let prevNode = this.head;
    if (!prevNode) this.head = new Node<T>(item);
    else {
      for (let i = 1; i < idx - 1; i++) {
        prevNode = prevNode?.next as Node<T>;
      }
      const node = new Node<T>(item);
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.length++;
  }

  append(item: T): void {
    if (!this.length) this.tail = this.head = new Node<T>(item);
    if (this.length && this.tail) {
      const node = new Node<T>(item) as Node<T>;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  remove(item: T): T | null | undefined {
    if (!this.length) return;
    //  todo: fixme!
    // let i = 0,
    //   current = this.head,
    //   prev,
    //   removedNode;
    // if (current) {
    //   while (i < this.length) {
    //     if (current.value === item) {
    //       removedNode = current;
    //       if (prev?.next) {
    //         prev.next = current.next;
    //       }
    //     }
    //     current = current?.next as Node<T>;
    //     i++;
    //   }
    // }
    // return removedNode?.value;
  }

  get(idx: number): T | null | undefined {
    let currentNode = this.head;
    if (!currentNode?.next) return currentNode?.value;
    if (currentNode) {
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode?.next as Node<T>;
      }
      return currentNode?.value;
    }
    return;
  }

  removeAt(idx: number): T | null | undefined {
    if (this.length < idx) return;
    if (0 === idx) this.head = this.tail = null;
    let currentNode = this.head;
    for (let i = 1; i < idx; i++) {
      currentNode = currentNode?.next as Node<T>;
    }
    let removedNode;
    if (currentNode?.next) {
      removedNode = currentNode?.next;
      currentNode.next = currentNode?.next?.next;
      this.length--;
    }
    return removedNode?.value;
  }

  print(): void {
    let i = 0,
      current = this.head;
    while (i < this.length) {
      console.log(current);
      current = current?.next as Node<T>;
      i++;
    }
  }
}
