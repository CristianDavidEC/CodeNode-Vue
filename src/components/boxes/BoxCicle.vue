<template>
  <BoxNode title="Cicle" @onNodeId="addDataNode($event)">
    <template #icon>
      <BIconArrowRepeat class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="flex flex-col items-center">
        <h1 class="title-color font-semibold">From</h1>
        <BIconArrowRepeat class="title-color font-bold text-2xl my-1" />
        <h1 class="title-color font-semibold">To</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch, getCurrentInstance } from 'vue'
import useProgramStore from '../../store/program.js'
import { BIconArrowRepeat } from 'bootstrap-icons-vue'
import BoxNode from './BoxNode.vue'
import {
  getNodesReferences,
  generateStatementCode,
} from '../../utilities/functionsNodes.js'

const programStore = useProgramStore()

const nodeInfo = reactive({
  type: 'Cicle',
  nodeId: '',
  nodeRefInput1: null,
  nodeRefInput2: null,
  cicle: [],
  parentNode: null,
  pythonCode: null,
})
let drawFlow = getCurrentInstance().appContext.config.globalProperties.$df.value
programStore.addNodeProgram(nodeInfo)

const addDataNode = (event) => {
  nodeInfo.nodeId = event
  const drawNode = drawFlow.getNodeFromId(event)
  if (drawNode.data.type) {
    nodeInfo.nodeRefInput1 = drawNode.data.nodeRefInput1
    nodeInfo.nodeRefInput2 = drawNode.data.nodeRefInput2
    nodeInfo.cicle = drawNode.data.cicle
    nodeInfo.parentNode = drawNode.data.parentNode
    nodeInfo.pythonCode = drawNode.data.pythonCode
  }
}

watch(nodeInfo, (nodeChange) => {
  toPytonCode(nodeChange)
})

const toPytonCode = (node) => {
  if (node.nodeRefInput1 && node.nodeRefInput2) {
    node.pythonCode = formatCode(node)
  } else {
    node.pythonCode = null
  }
}

const formatCode = (node) => {
  let { nodeRef1, nodeRef2 } = getNodesReferences(node)

  let code =
    'for i in range( ' +
    nodeRef1.identifier +
    ', ' +
    nodeRef2.identifier +
    ' + 1 ):\n' +
    generateStatementCode(node.cicle, node.parentNode)

  return code
}
</script>
