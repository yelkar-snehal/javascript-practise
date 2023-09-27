export default function bubble_sort(arr: number[]): void {
  // last limit exclusive, travered i elements exclusive
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
      }
    }
  }
}

function swap(arr: number[], j: number): void {
  const temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
}
