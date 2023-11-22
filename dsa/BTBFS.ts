export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue: (BinaryNode<number> | undefined | null)[] = [head];
  while (queue.length) {
    const curr = queue.shift() as BinaryNode<number> | undefined | null;
    // empty
    if (!curr) continue;

    if (curr.value === needle) return true;

    queue.push(curr.left);
    queue.push(curr.right);
  }
  return false;
}
