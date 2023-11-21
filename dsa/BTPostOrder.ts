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
  traverse(currNode.right, path);

  // post
  path.push(currNode.value);
  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return traverse(head, []);
}
