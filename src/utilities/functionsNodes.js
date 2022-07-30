import useProgramStore from "../store/program.js";
const programStore = useProgramStore();

const isValidReference = (node) => {
  return node.nodeRefInput1 && node.nodeRefInput2;
};

const getNodesReferences = (node) => {
  const nodeRef1 = programStore.getNode(node.nodeRefInput1);
  const nodeRef2 = programStore.getNode(node.nodeRefInput2);
  return { nodeRef1, nodeRef2 };
};

const generateStatementCode = (arrayChilds, parent) => {
  let pyCode = "";
  for (const idNode of arrayChilds) {
    const nodeChild = programStore.getNode(idNode);
    pyCode += "\t" + isParent(parent) + nodeChild.pythonCode + "\n";
  }
  return pyCode;
};

const isParent = (parent) => {
  return parent ? "\t" : "";
};

export {
  isValidReference,
  getNodesReferences,
  generateStatementCode,
  isParent,
};
