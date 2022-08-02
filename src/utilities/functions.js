const createID = () => {
  return Math.floor(Math.random() * 10000000000).toString()
}

const convertDataPost = (program) => {
  program.idProgram = createID()
  const objetData = {
    id: program.idProgram,
    name: program.nameProgram,
    description: program.descriptionProgram,
    nodes: JSON.stringify(program.nodesProgram),
    drawflow: generateDrawflowData(
      program.drawflowProgram,
      program.nodesProgram
    ),
  }
  return objetData
}

const generateDrawflowData = (drawflow, nodes) => {
  const drawNodes = drawflow.drawflow.Home.data
  for (const index in drawNodes) {
    const drawNode = drawNodes[index]
    const node = nodes.find((node) => node.nodeId == drawNode.id)
    drawNode.data = node
  }
  return JSON.stringify(drawflow)
}

export { createID, convertDataPost }
