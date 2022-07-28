<template>
  <aside class="w-56 border-r h-screen bg-color" aria-label="Sidebar">
    <div class="py-4 text-white min-h-screen relative">
      <ul class="space-y-2 overflow-y-auto">
        <router-link to="/">
          <div class="flex border-b mx-3">
            <font-icon icon="fa-solid fa-laptop-code" size="2x" class="mr-3" />
            <h1 class="font-bold text-2xl tracking-tight text-white mb-1">
              Code:Node
            </h1>
          </div>
        </router-link>
        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="'variable'"
        >
          <font-icon icon="fa fa-cubes" />
          Variable
        </li>

        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="'assign'"
        >
          <font-icon icon="fa-solid fa-arrow-right-to-bracket" />
          Assign
        </li>

        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="'math'"
        >
          <font-icon icon="fa fa-calculator" />
          Math Operation
        </li>

        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="'logic'"
        >
          <font-icon icon="fa-solid fa-code-merge" />
          Logic Operation
        </li>
        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="'cicle'"
        >
          <font-icon icon="fa-solid fa-code-compare" />
          Cycle
        </li>
        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="'print'"
        >
          <font-icon icon="fa-solid fa-print" />
          Print
        </li>
        <FooterInfo />
      </ul>
    </div>
  </aside>
</template>

<script setup>
import FooterInfo from "./FooterInfo.vue";

/**
 * When dragstart event is fired, set the data of the event
 * to identify the component to be dragged
 */
const drag = (ev) => {
  ev.dataTransfer.setData("node", ev.target.getAttribute("data-node"));
};
</script>

<style scoped>
li {
  cursor: move;
  transition: background-color 0.3s ease-in-out;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

li:hover {
  background-color: rgb(38, 38, 86);
}
</style>
