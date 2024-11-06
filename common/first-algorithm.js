const network = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "David"],
  Charlie: ["Alice", "Eve"],
  David: ["Bob"],
  Eve: ["Charlie"],
};

function friendRecommendations(network, user) {
  const visited = new Set();
  visited.add(user);
  const queue = [];
  const result = new Set();

  network[user].forEach((friend) => {
    visited.add(friend);
    queue.push(friend);
  });

  while (queue.length > 0) {
    const current = queue.shift();
    network[current].forEach((friend) => {
      if (!visited.has(friend)) {
        visited.add(friend);
        if (!network[user].includes(friend)) {
          result.add(friend);
        }
        queue.push(friend);
      }
    });
  }

  return Array.from(result);
}

console.log(friendRecommendations(network, "Alice"));
// 출력: ["David", "Eve"]
