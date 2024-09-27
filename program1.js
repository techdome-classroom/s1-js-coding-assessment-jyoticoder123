function numIslands(grid) {
  if (!grid || grid.length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function for DFS traversal
  function dfs(r, c) {
      // Base case: if out of bounds or in water, stop
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }

      // Mark the current land as visited by changing 'L' to 'W'
      grid[r][c] = 'W';

      // Explore all four directions (up, down, left, right)
      dfs(r - 1, c); // up
      dfs(r + 1, c); // down
      dfs(r, c - 1); // left
      dfs(r, c + 1); // right
  }

  // Traverse the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              // Found a new island, start DFS and count it
              islandCount++;
              dfs(r, c);
          }
      }
  }

  return islandCount;
}

// Example 1:
let grid1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(numIslands(grid1)); // Output: 1

// Example 2:
let grid2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"],
];
console.log(numIslands(grid2)); // Output: 3
  