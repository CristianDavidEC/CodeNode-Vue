const nodesToPython = (nodesProgram) => {
  for (const node of nodesProgram) {
    typeNode(node);
  }
};

function typeNode(node) {
  switch (node.type) {
    case "Variable":
      console.log(node.type);
      break;
    case "Assign":
      console.log(node.type);
      break;
    case "MathOperation":
      console.log(node.type);
      break;
  }
}

export default nodesToPython;
