<template>
  <aside class="w-56 border-r h-screen bg-color" aria-label="Sidebar">
    <div class="py-4 text-white">
      <ul class="space-y-2 overflow-y-auto">
        <div class="flex border-b mx-3">
          <font-icon icon="fa-solid fa-laptop-code" size="2x" class="mr-3" />
          <h1 class="font-bold text-2xl tracking-tight text-white mb-1">
            Code:Node
          </h1>
        </div>
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
          :data-node="2"
        >
          <font-icon icon="fa fa-calculator" />
          Math Operation
        </li>

        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="4"
        >
          <font-icon icon="fa-solid fa-code-merge" />
          Logic operation
        </li>
        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="5"
        >
          <font-icon icon="fa-solid fa-code-compare" />
          Cycle
        </li>
        <li
          class="py-3 border-b mx-3 px-4"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="6"
        >
          <font-icon icon="fa-solid fa-gears" />
          Functions
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
/**
 * When dragstart event is fired, set the data of the event
 * to identify the component to be dragged
 */
const drag = (ev) => {
  ev.dataTransfer.setData("node", ev.target.getAttribute("data-node"));
};
</script>

<style></style>
