<template>
  <div
    class="p-4 w-60 color-card rounded-lg border border-gray-200 m-4 box-shadow"
  >
    <h5
      class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
      <font-icon icon="fa-solid fa-square-plus" />
      Create a New Program
    </h5>

    <div class="flex flex-col justify-between">
      <label for="Identify" class="mb-2 text-lg">
        Name :
        <input
          type="text"
          id="Identify"
          name="Identify"
          class="border-2 border-sky-800 w-full rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-sky-600 focus:outline-none"
          placeholder="Name of the Program"
          maxlength="15"
          v-model="name"
        />
      </label>

      <label for="Identify" class="mb-2 text-lg">
        Description :
        <input
          type="text"
          id="Identify"
          name="Identify"
          class="border-2 border-sky-800 rounded-lg w-full px-2 py-1 text-sm text-blue-900 focus:border-sky-600 focus:outline-none"
          placeholder="A Short Description of the Program"
          maxlength="70"
          v-model="description"
        />
      </label>

      <router-link to="/board">
        <button
          class="transition duration-300 p-1 rounded-lg font-bold border-2 my-2 mr-10 bg-color hover:bg-blue-900"
          @click="createProgram"
          type="submit"
        >
          <font-icon icon="fa-solid fa-terminal" />
          Create Program
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useProgramStrore from '../store/program.js'

const name = ref('')
const description = ref('')
const programStore = useProgramStrore()

const createProgram = () => {
  programStore.resetProgram()
  programStore.nameProgram = name.value
  programStore.descriptionProgram = description.value
}
</script>

<style>
.color-card {
  background-color: #100b36;
}
.box-shadow {
  -webkit-box-shadow: 0px 0px 5px 1px rgba(99, 167, 226, 0.9);
  -moz-box-shadow: 0px 0px 5px 1px rgba(105, 165, 221, 0.9);
  box-shadow: 0px 0px 5px 1px rgba(98, 131, 216, 0.9);
}
</style>
