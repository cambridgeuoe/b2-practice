// Word Formation (Part 3) Generator
const wordFormationData = {
  "create": ["creation", "creative", "creatively"],
  "decide": ["decision", "decisive", "indecisive"]
};

function generateWordFormation() {
  const roots = Object.keys(wordFormationData);
  const root = roots[Math.floor(Math.random() * roots.length)];
  const sentence = `The {gap} was revolutionary. (${root.toUpperCase()})`;
  
  return {
    sentence: sentence,
    correct: wordFormationData[root][0],
    options: shuffle([...wordFormationData[root], "extra1", "extra2").slice(0, 3)
  };
}

// Helpers
function shuffle(...arrays) {
  const merged = [].concat(...arrays);
  return merged.sort(() => Math.random() - 0.5);
}
