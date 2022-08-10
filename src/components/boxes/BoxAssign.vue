<template>
  <BoxNode title="Assign" @onNodeId="addDataNode($event)">
    <template #icon>
      <BIconBoxArrowInRight class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <label for="Identify" class="text-blue-900 ml-2 font-medium"
        >Identify</label
      >
      <input
        type="text"
        id="Identify"
        name="Identify"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        placeholder="Identify to Assign"
        v-model="nodeInfo.identifier"
      />

      <label for="Value" class="text-blue-900 ml-2 font-medium pt-2"
        >Value</label
      >
      <input
        type="number"
        id="Value"
        name="Value"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        v-model="nodeInfo.value"
        disabled
      />
    </template>
  </BoxNode>
</template>

<script setup>
import BoxNode from './BoxNode.vue'
import useProgramStore from '../../store/program'
import { BIconBoxArrowInRight } from 'bootstrap-icons-vue'
import { reactive, watch, getCurrentInstance } from 'vue'
import { variableDeclarationType } from '../../utilities/constants.js'

const programStore = useProgramStore()
const nodeInfo = reactive({
  type: 'Assign',
  nodeId: '',
  identifier: '',
  nodeRefInput1: null,
  value: null,
  parentNode: null,
  pythonCode: null,
})

const drawFlow =
  getCurrentInstance().appContext.config.globalProperties.$df.value
programStore.addNodeProgram(nodeInfo)

const addDataNode = (event) => {
  nodeInfo.nodeId = event
  const drawNode = drawFlow.getNodeFromId(event)
  if (drawNode.data.type) {
    nodeInfo.identifier = drawNode.data.identifier
    nodeInfo.nodeRefInput1 = drawNode.data.nodeRefInput1
    nodeInfo.value = drawNode.data.value
    nodeInfo.parentNode = drawNode.data.parentNode
    nodeInfo.pythonCode = drawNode.data.pythonCode
  }
}

watch(nodeInfo, (nodeChange) => {
  assingValue(nodeChange.nodeRefInput1)
  toPythonCode(nodeChange)
})

const assingValue = (reference) => {
  const nodeRef = programStore.getNode(reference)
  nodeRef ? (nodeInfo.value = nodeRef.value) : (nodeInfo.value = null)
}

const toPythonCode = (node) => {
  const nodeRef = programStore.getNode(node.nodeRefInput1)
  if (nodeRef) {
    node.pythonCode = assignPythonCode(node, nodeRef)
    return
  }
  node.pythonCode = null
}

const assignPythonCode = (node, nodeRef) => {
  if (variableDeclarationType[nodeRef.type]) {
    return `${node.identifier} = ${nodeRef.identifier}`
  }
  return `${node.identifier} = ${nodeRef.pythonCode}`
}
</script>

<style></style>
