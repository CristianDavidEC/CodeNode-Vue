<template></template>
<script setup>
/** This component control all events to drawflow object */

import { getCurrentInstance } from 'vue'
import { controlFlowStructure } from '../utilities/constants.js'
import { getNodesByIdReference } from '../utilities/nodesFunctions.js'
import useProgramStore from '../store/program'

const dfcontrol =
  getCurrentInstance().appContext.config.globalProperties.$df.value
const programStore = useProgramStore()

dfcontrol.on('nodeRemoved', function (id) {
  programStore.removeNodeProgram(id)
})

/**
 * Watch the event connection create and create the connection
 * into programStore, from the type of node connected.
 */
dfcontrol.on('connectionCreated', function (connectionNode) {
  const { type } = programStore.getNode(connectionNode.output_id)
  if (controlFlowStructure[type]) {
    createParentConection(connectionNode)
    return
  }
  createConection(connectionNode)
})
/**
 * Create the connection between nodes which are not Flow Structure
 */
const createConection = (connectionNode) => {
  const node = programStore.getNode(connectionNode.input_id)
  if (connectionNode.input_class == 'input_1') {
    node.nodeRefInput1 = connectionNode.output_id
    return
  }
  node.nodeRefInput2 = connectionNode.output_id
}

/**
 * Links the node to its parent
 * */
const createParentConection = (connectionNode) => {
  const { nodeRef1, nodeRef2 } = getNodesByIdReference(
    connectionNode.output_id,
    connectionNode.input_id
  )

  nodeRef2.parentNode = connectionNode.output_id
  addChildReference(nodeRef1, connectionNode)
}

/**
 * Add the reference the parent node with your child
 * */
const addChildReference = (parentNode, connectionNode) => {
  if (parentNode.type == 'Cicle') {
    parentNode.cicle.push(connectionNode.input_id)
    return
  }

  if (connectionNode.output_class == 'output_1') {
    parentNode.trueCondition.push(connectionNode.input_id)
    return
  }
  parentNode.falseCondition.push(connectionNode.input_id)
}

/**
 * Watch the event connection revomed and remove the connection
 * into programStore, from the type of node connected.
 * */
dfcontrol.on('connectionRemoved', function (connectionNode) {
  const { type } = programStore.getNode(connectionNode.output_id)
  if (controlFlowStructure[type]) {
    removeParentConection(connectionNode)
    return
  }
  removeConecction(connectionNode)
})

/**
 * Remove the connection between nodes which are not Flow Structure
 */
const removeConecction = (connectionNode) => {
  const node = programStore.getNode(connectionNode.input_id)
  if (connectionNode.input_class == 'input_1') {
    node.nodeRefInput1 = null
    return
  }
  node.nodeRefInput2 = null
}

/**
 * Remove the node's link to its parent
 * */
const removeParentConection = (connectionNode) => {
  const { nodeRef1, nodeRef2 } = getNodesByIdReference(
    connectionNode.output_id,
    connectionNode.input_id
  )
  nodeRef2.parentNode = null
  deleteChildrenReference(nodeRef1, connectionNode)
}

/**
 * The parent Node delete the reference of the child node
 */
const deleteChildrenReference = (parentNode, connectionNode) => {
  if (parentNode.type === 'Cicle') {
    parentNode.cicle = parentNode.cicle.filter(
      (node) => node !== connectionNode.input_id
    )
    return
  }

  if (connectionNode.output_class == 'output_1') {
    parentNode.trueCondition = parentNode.trueCondition.filter(
      (node) => node !== connectionNode.input_id
    )
    return
  }

  parentNode.falseCondition = parentNode.falseCondition.filter(
    (node) => node !== connectionNode.input_id
  )
}
</script>
