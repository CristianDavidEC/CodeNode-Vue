<template></template>
<script setup>
/** This component control all events to drawflow object */

import { getCurrentInstance } from 'vue'
import useProgramStore from '../store/program'
import { controlFlowStructure } from '../utilities/constants.js'
import { getNodesByIdReference } from '../utilities/nodesFunctions.js'

let dfcontrol =
  getCurrentInstance().appContext.config.globalProperties.$df.value
const programStore = useProgramStore()

dfcontrol.on('nodeRemoved', function (id) {
  programStore.removeNodeProgram(id)
})

/**Watch the connection create for create the conecction into store program */
dfcontrol.on('connectionCreated', function (connectionNode) {
  const { type } = programStore.getNode(connectionNode.output_id)
  if (controlFlowStructure[type]) {
    createParentConection(connectionNode)
    return
  }
  createConection(connectionNode)
})

/**Watch the connection revomed for create the conecction into store program */
dfcontrol.on('connectionRemoved', function (connectionNode) {
  const { type } = programStore.getNode(connectionNode.output_id)
  if (controlFlowStructure[type]) {
    removeParentConection(connectionNode)
    return
  }
  removeConecction(connectionNode)
})

const createConection = (connectionNode) => {
  const node = programStore.getNode(connectionNode.input_id)
  if (connectionNode.input_class == 'input_1') {
    node.nodeRefInput1 = connectionNode.output_id
    return
  }
  node.nodeRefInput2 = connectionNode.output_id
}

const createParentConection = (connectionNode) => {
  const { nodeRef1, nodeRef2 } = getNodesByIdReference(
    connectionNode.output_id,
    connectionNode.input_id
  )

  nodeRef2.parentNode = connectionNode.output_id

  if (nodeRef1.type == 'Cicle') {
    nodeRef1.cicle.push(connectionNode.input_id)
    return
  }

  if (connectionNode.output_class == 'output_1') {
    nodeRef1.trueCondition.push(connectionNode.input_id)
    return
  }
  nodeRef1.falseCondition.push(connectionNode.input_id)
}

const removeConecction = (connectionNode) => {
  const node = programStore.getNode(connectionNode.input_id)
  if (connectionNode.input_class == 'input_1') {
    node.nodeRefInput1 = null
    return
  }
  node.nodeRefInput2 = null
}

const removeParentConection = (connectionNode) => {
  const { nodeRef1, nodeRef2 } = getNodesByIdReference(
    connectionNode.output_id,
    connectionNode.input_id
  )
  nodeRef2.parentNode = null

  if (nodeRef1.type === 'Cicle') {
    nodeRef1.cicle = nodeRef1.cicle.filter(
      (node) => node !== connectionNode.input_id
    )
    return
  }

  if (connectionNode.output_class == 'output_1') {
    nodeRef1.trueCondition = nodeRef1.trueCondition.filter(
      (node) => node !== connectionNode.input_id
    )
    return
  }

  nodeRef1.falseCondition = nodeRef1.falseCondition.filter(
    (node) => node !== connectionNode.input_id
  )
}
</script>
