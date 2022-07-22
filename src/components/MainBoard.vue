<template>
  <div
    id="drawflow"
    @drop="renderNode($event)"
    @dragover="allowDrop($event)"
  ></div>
</template>

<script setup>
import {
  h,
  render,
  onMounted,
  readonly,
  shallowRef,
  getCurrentInstance,
} from "vue";
import Drawflow from "drawflow";
import DfControl from "./DrawFlowControll.vue";
import BoxVariable from "./boxes/BoxVariable.vue";
import BoxAssign from "./boxes/BoxAssign.vue";
import BoxMath from "./boxes/BoxMath.vue";
import BoxLogic from "./boxes/BoxLogic.vue";
import BoxCicle from "./boxes/BoxCicle.vue";
import BoxPrint from "./boxes/BoxPrint.vue";

const drawFlow = shallowRef({});
const vue = { version: 3, h, render };
const internalInstance = getCurrentInstance();
internalInstance.appContext.app._context.config.globalProperties.$df = drawFlow;
const boxes = readonly([
  {
    name: "variable",
    in: 1,
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
  {
    name: "print",
    in: 1,
    out: 0,
  },
]);

/**
 * Create a instance of Drawflow and register the node components
 */
onMounted(() => {
  const idContainer = document.getElementById("drawflow");
  drawFlow.value = new Drawflow(
    idContainer,
    vue,
    internalInstance.appContext.app._context
  );
  drawFlow.value.reroute = true;
  drawFlow.value.start();

  drawFlow.value.registerNode("variable", BoxVariable, {}, {});
  drawFlow.value.registerNode("assign", BoxAssign, {}, {});
  drawFlow.value.registerNode("math", BoxMath, {}, {});
  drawFlow.value.registerNode("logic", BoxLogic, {}, {});
  drawFlow.value.registerNode("cicle", BoxCicle, {}, {});
  drawFlow.value.registerNode("print", BoxPrint, {}, {});
  drawFlow.value.registerNode("DfControl", DfControl, {}, {});

  drawFlow.value.addNode(
    "DfControl",
    0,
    0,
    0,
    0,
    "dfcontrol",
    {},
    "DfControl",
    "vue"
  );
});

/**
 * Add new node to drawflow after the drop event
 */
const renderNode = (ev) => {
  ev.preventDefault();
  let nameNode = ev.dataTransfer.getData("node");
  const node = boxes.find((box) => box.name == nameNode);
  let { x, y } = positionXY(ev.clientX, ev.clientY);
  drawFlow.value.addNode(
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
      (drawFlow.value.precanvas.clientWidth /
        (drawFlow.value.precanvas.clientWidth * drawFlow.value.zoom)) -
    drawFlow.value.precanvas.getBoundingClientRect().x *
      (drawFlow.value.precanvas.clientWidth /
        (drawFlow.value.precanvas.clientWidth * drawFlow.value.zoom));
  let y =
    posY *
      (drawFlow.value.precanvas.clientHeight /
        (drawFlow.value.precanvas.clientHeight * drawFlow.value.zoom)) -
    drawFlow.value.precanvas.getBoundingClientRect().y *
      (drawFlow.value.precanvas.clientHeight /
        (drawFlow.value.precanvas.clientHeight * drawFlow.value.zoom));
  return { x, y };
}
</script>

<style></style>
