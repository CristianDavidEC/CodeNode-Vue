<template>
  <div id="drawflow" @drop="drop($event)" @dragover="allowDrop($event)"></div>
</template>

<script setup>
import {
  h,
  render,
  onMounted,
  shallowRef,
  readonly,
  getCurrentInstance,
} from "vue";
import Drawflow from "drawflow";
import BoxVariable from "./boxes/BoxVariable.vue";
import BoxAssign from "./boxes/BoxAssign.vue";
import BoxMath from "./boxes/BoxMath.vue";
import BoxLogic from "./boxes/BoxLogic.vue";
import BoxCicle from "./boxes/BoxCicle.vue";

let editor = shallowRef({});
const Vue = { version: 3, h, render };
const internalInstance = getCurrentInstance();
internalInstance.appContext.app._context.config.globalProperties.$df = editor;

const boxes = readonly([
  {
    name: "variable",
    in: 0,
    out: 1,
  },
  {
    name: "assign",
    in: 1,
    out: 1,
  },
  {
    name: "math",
    in: 2,
    out: 1,
  },
  {
    name: "logic",
    in: 2,
    out: 2,
  },
  {
    name: "cicle",
    in: 2,
    out: 1,
  },
]);

/**
 * Create a instance of Drawflow and register the node components
 */
onMounted(() => {
  const id = document.getElementById("drawflow");
  editor = new Drawflow(id, Vue, internalInstance.appContext.app._context);
  editor.start();
  editor.registerNode("variable", BoxVariable, {}, {});
  editor.registerNode("assign", BoxAssign, {}, {});
  editor.registerNode("math", BoxMath, {}, {});
  editor.registerNode("logic", BoxLogic, {}, {});
  editor.registerNode("cicle", BoxCicle, {}, {});
});

/**
 * Add new node to drawflow after the drop event
 */
const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("node");
  const node = boxes.find((box) => box.name == data);
  let { x, y } = positionXY(ev.clientX, ev.clientY);
  editor.addNode(
    node.name,
    node.in,
    node.out,
    x,
    y,
    node.name,
    {},
    node.name,
    "vue"
  );
};

const allowDrop = (ev) => {
  ev.preventDefault();
};

/**
 * Get the position of the node to be dropped
 */
function positionXY(posX, posY) {
  let x =
    posX *
      (editor.precanvas.clientWidth /
        (editor.precanvas.clientWidth * editor.zoom)) -
    editor.precanvas.getBoundingClientRect().x *
      (editor.precanvas.clientWidth /
        (editor.precanvas.clientWidth * editor.zoom));
  let y =
    posY *
      (editor.precanvas.clientHeight /
        (editor.precanvas.clientHeight * editor.zoom)) -
    editor.precanvas.getBoundingClientRect().y *
      (editor.precanvas.clientHeight /
        (editor.precanvas.clientHeight * editor.zoom));
  return { x, y };
}
</script>

<style></style>
