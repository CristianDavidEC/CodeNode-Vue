<template>
  <header class="w-full">
    <nav class="flex items-center justify-between bg-color text-white py-2">
      <div class="w-full flex justify-between px-32 font-bold self-center">
        <button
          class="px-5 py-1 rounded-full border-2 transition duration-150 hover:bg-blue-900"
          @click="printState"
        >
          <font-icon icon="fa-solid fa-floppy-disk" />
          Save
        </button>

        <button
          class="px-5 py-1 rounded-full border-2 transition duration-150 hover:bg-blue-900"
        >
          <font-icon icon="fa-solid fa-play" />
          Execute
        </button>

        <button
          class="px-5 py-1 rounded-full border-2 transition duration-150 hover:bg-blue-900"
          @click="toPython"
        >
          <font-icon icon="fa-brands fa-python" />
          To Python
        </button>

        <button
          class="px-5 py-1 rounded-full border-2 transition duration-150 hover:bg-blue-900"
        >
          <font-icon icon="fa-solid fa-circle-question" />
          Help
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import useProgramStore from "../store/program.js";
import nodesToPython from "../functions/toPython.js";
const programStore = useProgramStore();

const printState = () => console.log(programStore.nodesProgram);

const toPython = () => nodesToPython(programStore.nodesProgram);
</script>

<style>
.bg-color {
  background-color: rgb(1, 2, 46);
}
</style>
