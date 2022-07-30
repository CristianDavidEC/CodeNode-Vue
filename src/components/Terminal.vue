<template>
  <button
    class="absolute bottom-5 right-5 z-10 bg-color text-white p-3 rounded-lg transition duration-300 hover:bg-blue-900"
    v-if="isOpen == false"
    @click="isOpen = !isOpen"
  >
    <font-icon icon="fa-solid fa-terminal" />
  </button>

  <div
    class="absolute bottom-0 right-0 bg-color w-1/3 h-1/2 px-5 pb-2 z-10 text-white rounded-tl-xl font"
    v-else
  >
    <div
      class="sticky top-0 border-b bg-color pt-2 flex justify-between items-center"
    >
      <font-icon icon="fa-solid fa-terminal" />
      Terminal Code:Node/home/board@
      <button
        class="transition duration-300 hover:bg-blue-900 p-1 rounded-md m-1"
        @click="isOpen = !isOpen"
      >
        <font-icon icon="fa-regular fa-rectangle-xmark" class="text-xl" />
      </button>
    </div>
    <textarea
      readonly="readonly"
      class="w-full h-5/6 bg-color text-white p-1 focus:outline-0"
      >{{ programStore.pythonCode }}
    </textarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useProgramStore from "../store/program.js";
const programStore = useProgramStore();

const isOpen = ref(true);
</script>

<style scoped>
.font {
  font-family: "Cascadia Code", monospace;
}
textarea {
  resize: none;
}
</style>
