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
          class="py-3 border-b mx-3"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="1"
        >
          Variables
        </li>
        <li
          class="py-3 border-b mx-3"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="2"
        >
          Math Operations
        </li>
        <li
          class="py-3 border-b mx-3"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="3"
        >
          Control
        </li>
        <li
          class="py-3 border-b mx-3"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="4"
        >
          Logic operations
        </li>
        <li
          class="py-3 border-b mx-3"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="5"
        >
          Cycles
        </li>
        <li
          class="py-3 border-b mx-3"
          draggable="true"
          @dragstart="drag($event)"
          :data-node="6"
        >
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
