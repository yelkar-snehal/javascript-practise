export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  // poll, pop also
  delete(): number {
    if (this.length === 0) return -1;

    this.length--;
    const out = this.data[0];
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private leftIdx(idx: number): number {
    return 2 * idx + 1;
  }

  private rightIdx(idx: number): number {
    return 2 * idx + 2;
  }

  private parentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const value = this.data[idx],
      parentIdx = this.parentIdx(idx),
      parentValue = this.data[parentIdx];

    if (value < parentValue) {
      this.data[parentIdx] = value;
      this.data[idx] = parentValue;
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftIdx(idx),
      rightIdx = this.rightIdx(idx);

    if (leftIdx > this.length || idx === this.length) return;

    const leftValue = this.data[leftIdx],
      rightValue = this.data[rightIdx],
      value = this.data[idx];

    if (rightValue > leftValue && value > leftValue) {
      this.data[leftIdx] = value;
      this.data[idx] = leftValue;
      this.heapifyDown(leftIdx);
    } else if (leftValue > rightValue && value > rightValue) {
      this.data[rightIdx] = value;
      this.data[idx] = rightValue;
      this.heapifyDown(rightIdx);
    }
  }
}
