<template>
  <BoxNode title="Print" @onNodeId="addDataNode($event)">
    <template #icon>
      <BIconPrinter class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="flex flex-col items-center">
        <label for="Identify" class="text-blue-900 ml-2 font-medium"
          >Message</label
        >
        <input
          type="text"
          id="Identify"
          name="Identify"
          class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
          placeholder="Message to Print"
          v-model="nodeInfo.message"
        />
        <h1 class="title-color font-semibold mt-2">Value to Print</h1>

        <h1 class="title-color font-semibold mt-2">{{ nodeInfo.value }}</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch, getCurrentInstance } from 'vue'
import useProgramStore from '../../store/program.js'
import { BIconPrinter } from 'bootstrap-icons-vue'
import BoxNode from './BoxNode.vue'
import { variableDeclarationType } from '../../utilities/constants.js'

const programStore = useProgramStore()

//const dataNode = ref({})
const nodeInfo = reactive({
  type: 'Print',
  nodeId: '',
  message: '',
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
    nodeInfo.message = drawNode.data.message
    nodeInfo.nodeRefInput1 = drawNode.data.nodeRefInput1
    nodeInfo.value = drawNode.data.value
    nodeInfo.parentNode = drawNode.data.parentNode
    nodeInfo.pythonCode = drawNode.data.pythonCode
  }
}

watch(nodeInfo, (nodeChange) => {
  assigValue(nodeChange.nodeRefInput1)
  toPythonCode(nodeChange)
})

const assigValue = (reference) => {
  const nodeRef = programStore.getNode(reference)
  nodeRef ? (nodeInfo.value = nodeRef.value) : (nodeInfo.value = null)
}

const toPythonCode = (node) => {
  const nodeRef = programStore.getNode(node.nodeRefInput1)
  if (nodeRef) {
    node.pythonCode = assignPythonCode(node, nodeRef)
    return
  }
  node.pythonCode = `print("${node.message}")`
  //node.nodeRefInput1 = null
}

const assignPythonCode = (node, nodeRef) => {
  if (variableDeclarationType[nodeRef.type]) {
    return `print("${node.message}" , ${nodeRef.identifier})`
  }
  return `print("${node.message}" , ${nodeRef.pythonCode})`
}
</script>
