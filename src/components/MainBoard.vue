<template>
  <div id="drawflow" @drop="drop($event)" @dragover="allowDrop($event)"></div>
</template>

<script setup>
const drop = (ev) => {
  console.log(ev);
};

const allowDrop = (ev) => {
  ev.preventDefault();
};
</script>

<style>
#drawflow {
  width: 100%;
  height: 100%;
  text-align: initial;
  background: #ffffff;
  background-size: 20px 20px;
  background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px),
    linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
}
</style>