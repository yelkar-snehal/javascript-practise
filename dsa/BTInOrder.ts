/**
 * @param currNode curent node
 * @param path mutable traversed path
 * @returns mutataed path
 */
function traverse(
  currNode: BinaryNode<number> | null,
  path: number[]
): number[] {
  // base case, traversed beyond the tree
  if (currNode === null) return path;

  // pre

  // recurse
  traverse(currNode.left, path);
  path.push(currNode.value);
  traverse(currNode.right, path);

  // post
  return path;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
  return traverse(head, []);
}
