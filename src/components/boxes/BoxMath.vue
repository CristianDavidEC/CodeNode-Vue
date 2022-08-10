<template>
  <BoxNode title="Math Operation" @onNodeId="addDataNode($event)">
    <template #icon>
      <BIconCalculator class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="text-center">
        <h1 class="title-color font-semibold">Value 1</h1>

        <div class="flex justify-between text-2xl my-3 text-blue-900">
          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '+'"
            :class="nodeInfo.operation == '+' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconPlusSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '-'"
            :class="nodeInfo.operation == '-' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconDashSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '*'"
            :class="nodeInfo.operation == '*' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconXSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '/'"
            :class="nodeInfo.operation == '/' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconSlashSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '%'"
            :class="nodeInfo.operation == '%' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconPercent />
          </span>
        </div>
        <h1 class="title-color font-semibold">Value 2</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch, getCurrentInstance } from 'vue'
import useProgramStore from '../../store/program.js'
import {
  BIconCalculator,
  BIconPlusSquare,
  BIconDashSquare,
  BIconXSquare,
  BIconSlashSquare,
  BIconPercent,
} from 'bootstrap-icons-vue'
import {
  isValidReference,
  getNodesByIdReference,
} from '../../utilities/nodesFunctions.js'

import BoxNode from './BoxNode.vue'

const programStore = useProgramStore()
const nodeInfo = reactive({
  type: 'MathOperation',
  nodeId: '',
  operation: '+',
  nodeRefInput1: null,
  nodeRefInput2: null,
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
    nodeInfo.operation = drawNode.data.operation
    nodeInfo.nodeRefInput1 = drawNode.data.nodeRefInput1
    nodeInfo.nodeRefInput2 = drawNode.data.nodeRefInput2
    nodeInfo.value = drawNode.data.value
    nodeInfo.parentNode = drawNode.data.parentNode
    nodeInfo.pythonCode = drawNode.data.pythonCode
  }
}

watch(nodeInfo, (nodeChanged) => {
  if (isValidReference(nodeChanged)) {
    return calculateValue(nodeChanged)
  }
  nodeChanged.pythonCode = null
  nodeChanged.value = null
})

const calculateValue = (node) => {
  const { nodeRef1, nodeRef2 } = getNodesByIdReference(
    node.nodeRefInput1,
    node.nodeRefInput2
  )
  node.pythonCode = `${nodeRef1.identifier} ${node.operation} ${nodeRef2.identifier}`

  switch (node.operation) {
    case '+':
      node.value = nodeRef1.value + nodeRef2.value
      break
    case '-':
      node.value = nodeRef1.value - nodeRef2.value
      break
    case '*':
      node.value = nodeRef1.value * nodeRef2.value
      break
    case '/':
      node.value = nodeRef1.value / nodeRef2.value
      break
    case '%':
      node.value = nodeRef1.value % nodeRef2.value
      break
    default:
      node.value = null
      break
  }
}
</script>

<style></style>
