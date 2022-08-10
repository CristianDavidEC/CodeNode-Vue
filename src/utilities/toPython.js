import useProgramStore from '../store/program.js'
const programStore = useProgramStore()

/**
 * Create the python code string of all nodes
 * from the code that has each node
 */
const nodesToPython = (nodesProgram) => {
  let code = ``

  for (const node of nodesProgram) {
    const { parentNode, pythonCode, type } = node
    if (!parentNode && type !== 'MathOperation') {
      code += `${pythonCode} \n`
    }
  }
  programStore.pythonCode = code
}

export { nodesToPython }
