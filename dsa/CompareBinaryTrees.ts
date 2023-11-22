export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  // base cases
  // equal till leaves are done
  if (a === null && b === null) return true;

  // structural comparison
  if (a === null || b === null) return false;

  if (a.value !== b.value) return false;
  // above two cases can be combined in js(w/o ts) to a?.value !== b.value

  return compare(a.left, b.left) && compare(a.right, b.right);
}
