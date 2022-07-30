<template>
  <div
    class="p-4 w-60 color-card rounded-lg border border-gray-200 m-4 box-shadow"
  >
    <h5
      class="mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
      <font-icon icon="fa-solid fa-code" />
      {{ nameProgram }}
    </h5>
    <small class="font-bold"># {{ idProgram }}</small>
    <p class="my-2 h-24 font-normal text-gray-700 dark:text-gray-300">
      <b>Description: </b>{{ description }}
    </p>
    <div class="flex justify-between">
      <router-link to="/board">
        <button
          class="transition duration-300 p-1 rounded-lg font-bold border-2 bg-color hover:bg-blue-900"
          @click="getProgramButton(idProgram)"
        >
          <font-icon icon="fa-solid fa-laptop-code" />
          Go To Board
        </button>
      </router-link>

      <p class="font-bold p-1">
        <font-icon icon="fa-solid fa-sitemap" />
        0
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getProgram } from "../utilities/api.js";

const nameProgram = ref("ProgramaPatito");
const idProgram = ref("00001");
const description = ref(
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
);

const getProgramButton = (idProgram) => {
  getProgram(idProgram);
};
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
