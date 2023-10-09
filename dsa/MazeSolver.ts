function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][]
): boolean {
  // base case
  // 1. off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze[0].length
  ) {
    return false;
  }

  // 2. on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // 3. at the end
  if (curr.y === end.y && curr.x === end.x) {
    return true;
  }

  // 4, already visited
  if (seen[curr.y][curr.x]) {
    return false;
  }
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {}
