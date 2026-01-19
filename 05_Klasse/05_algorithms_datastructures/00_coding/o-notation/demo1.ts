for (let i = 0; i < n; i++) {
  // Runs n times: O(n)
  for (let j = 0; j < n; j++) {
    // Runs n times: O(n)
    console.log("Hello"); // Simple work: O(1)
  }
}

// Total time complexity: O(n) * O(n) * O(1) = O(n^2)
