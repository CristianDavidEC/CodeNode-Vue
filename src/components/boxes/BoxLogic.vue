<template>
  <BoxNode title="Logic Operation" @onNodeId="addDataNode($event)">
    <template #icon>
      <BIconShuffle class="title-color font-bold text-lg" />
    </template>
    <template #content>
      <div class="text-center">
        <div class="flex justify-between pl-6">
          <h1 class="title-color font-semibold">Value 1</h1>
          <h1 class="title-color font-semibold">True</h1>
        </div>

        <div
          class="flex justify-between items-center px-1 my-3 mr-8 text-2xl text-blue-900"
        >
          <span
            value="Add"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-8 h-8 font-bold border-2 border-blue-900"
            @click="nodeInfo.operation = '<'"
            :class="nodeInfo.operation == '<' ? 'bg-blue-900 text-white' : ''"
          >
            &lt;
          </span>

          <span
            value="Subtract"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-8 h-8 after:first:font-bold border-2 border-blue-900"
            @click="nodeInfo.operation = '>'"
            :class="nodeInfo.operation == '>' ? 'bg-blue-900 text-white' : ''"
          >
            &gt;
          </span>

          <span
            value="Multiply"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-8 h-8 font-bold border-2 border-blue-900"
            @click="nodeInfo.operation = '!='"
            :class="nodeInfo.operation == '!=' ? 'bg-blue-900 text-white' : ''"
          >
            !=
          </span>

          <span
            value="Divide"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-8 h-8 font-bold border-2 border-blue-900"
            @click="nodeInfo.operation = '=='"
            :class="nodeInfo.operation == '==' ? 'bg-blue-900 text-white' : ''"
          >
            =
          </span>
        </div>
        <div class="flex justify-between pl-6">
          <h1 class="title-color font-semibold">Value 2</h1>
          <h1 class="title-color font-semibold">False</h1>
        </div>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch, getCurrentInstance } from 'vue'
import useProgramStore from '../../store/program.js'
import { BIconShuffle } from 'bootstrap-icons-vue'
import BoxNode from './BoxNode.vue'
import {
  isValidReference,
  getNodesByIdReference,
  generateControlFlowCode,
  isParent,
} from '../../utilities/nodesFunctions.js'
import { getDrawflow } from '../../utilities/functions.js'

const programStore = useProgramStore()
const nodeInfo = reactive({
  type: 'LogicOperation',
  nodeId: '',
  operation: '==',
  nodeRefInput1: null,
  nodeRefInput2: null,
  trueCondition: [],
  falseCondition: [],
  parentNode: null,
  pythonCode: null,
})

const drawFlow = getDrawflow(getCurrentInstance)
programStore.addNodeProgram(nodeInfo)

const addDataNode = (event) => {
  nodeInfo.nodeId = event
  const drawNode = drawFlow.getNodeFromId(event)
  if (drawNode.data.type) {
    nodeInfo.operation = drawNode.data.operation
    nodeInfo.nodeRefInput1 = drawNode.data.nodeRefInput1
    nodeInfo.nodeRefInput2 = drawNode.data.nodeRefInput2
    nodeInfo.trueCondition = drawNode.data.trueCondition
    nodeInfo.falseCondition = drawNode.data.falseCondition
    nodeInfo.parentNode = drawNode.data.parentNode
    nodeInfo.pythonCode = drawNode.data.pythonCode
  }
}

watch(nodeInfo, (nodeChange) => {
  toPytonCode(nodeChange)
})

const toPytonCode = (node) => {
  if (isValidReference(node)) {
    node.pythonCode = assignPythonCode(node)
    return
  }
  node.pythonCode = null
}

const assignPythonCode = (node) => {
  const { nodeRef1, nodeRef2 } = getNodesByIdReference(
    node.nodeRefInput1,
    node.nodeRefInput2
  )

  let code =
    'if ' +
    nodeRef1.identifier +
    ' ' +
    node.operation +
    ' ' +
    nodeRef2.identifier +
    ':\n' +
    generateControlFlowCode(node.trueCondition, node.parentNode) +
    '\n' +
    isParent(node.parentNode) +
    'else:\n' +
    generateControlFlowCode(node.falseCondition, node.parentNode)

  return code
}
</script>
