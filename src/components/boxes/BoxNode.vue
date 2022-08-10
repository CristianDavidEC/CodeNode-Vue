<template>
  <div class="flex-col justify-center w-full" ref="element">
    <div
      class="flex justify-center items-center text-center py-1 bg-blue-100 border-b border-blue-900 rounded-t-xl"
    >
      <slot name="icon"></slot>
      <h1 class="title-color font-semibold ml-2">{{ title }}</h1>
    </div>
    <div class="p-2 flex flex-col">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  title: String,
})

const element = ref(null)
const idNode = ref(0)

const emitId = defineEmits(['onNodeId'])

/**Get the id of the component assigned by drawflow */
onMounted(async () => {
  await nextTick()
  idNode.value = element.value.parentElement.parentElement.id.slice(5)
  emitId('onNodeId', idNode.value)
})
</script>

<style>
.title-color {
  color: darkblue;
}
</style>
