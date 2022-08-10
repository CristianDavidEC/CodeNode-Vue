<template>
  <BoxNode title="Variable" @onNodeId="addDataNode($event)">
    <template #icon>
      <BIconBoxes class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <label for="Identify" class="text-blue-900 ml-2 font-medium">
        Identify
      </label>
      <input
        type="text"
        id="Identify"
        name="Identify"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        placeholder="Identify to Variable"
        v-model="nodeInfo.identifier"
      />

      <label for="Value" class="text-blue-900 ml-2 pt-2 font-medium"
        >Value</label
      >
      <input
        type="number"
        id="Value"
        name="Value"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        placeholder="Numerical Value"
        v-model="nodeInfo.value"
      />
    </template>
  </BoxNode>
</template>

<script setup>
import BoxNode from './BoxNode.vue'
import { BIconBoxes } from 'bootstrap-icons-vue'
import { reactive, watch, getCurrentInstance } from 'vue'
import useProgramStore from '../../store/program.js'

const programStore = useProgramStore()
const nodeInfo = reactive({
  type: 'Variable',
  nodeId: '',
  identifier: '',
  value: 0,
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
    nodeInfo.value = drawNode.data.value
    nodeInfo.parentNode = drawNode.data.parentNode
    nodeInfo.pythonCode = drawNode.data.pythonCode
  }
}

watch(nodeInfo, (nodeChanged) => {
  toPythonCode(nodeChanged)
})

const toPythonCode = (node) => {
  node.identifier
    ? (node.pythonCode = `${node.identifier} = ${node.value}`)
    : (node.pythonCode = null)
}
</script>

<style></style>
