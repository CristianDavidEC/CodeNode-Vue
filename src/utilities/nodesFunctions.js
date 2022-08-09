import useProgramStore from '../store/program.js'
const programStore = useProgramStore()

/**
 * Check that both references are not null
 */
const isValidReference = (node) => {
  return node.nodeRefInput1 && node.nodeRefInput2
}

/**
 * Find the reference nodes by id
 */
const getNodesByIdReference = (idReference1, idReference2) => {
  const nodeRef1 = programStore.getNode(idReference1)
  const nodeRef2 = programStore.getNode(idReference2)
  return { nodeRef1, nodeRef2 }
}

/**
 * Generate the python code for control Flow Structure nodes
 * taking the code of the children nodes
 */
const generateControlFlowCode = (arrayChilds, parent) => {
  let pyCode = ''
  for (const idNode of arrayChilds) {
    const nodeChild = programStore.getNode(idNode)
    if (nodeChild.type !== 'MathOperation') {
      pyCode += '\t' + isParent(parent) + nodeChild.pythonCode + '\n'
    }
  }
  return pyCode
}

/**
 * Check if the node has parent
 */
const isParent = (parent) => {
  return parent ? '\t' : ''
}

export {
  isValidReference,
  getNodesByIdReference,
  generateControlFlowCode,
  isParent,
}
