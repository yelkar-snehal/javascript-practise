declare interface List<T> {
  print(): void;
  get length(): number;
  removeAt(index: number): T | undefined;
  remove(item: T): T | undefined;
  get(index: number): T | undefined;
  prepend(item: T): void;
  append(item: T): void;
  insertAt(item: T, idx: number): void;
}
