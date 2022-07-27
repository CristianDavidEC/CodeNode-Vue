<template></template>
<script setup>
/** This component control all events to drawflow object */
import { faL } from "@fortawesome/free-solid-svg-icons";
import { BIconChevronCompactLeft } from "bootstrap-icons-vue";
import { getCurrentInstance, watch } from "vue";
import useProgramStore from "../store/program";

let dfcontrol =
  getCurrentInstance().appContext.config.globalProperties.$df.value;
const programStore = useProgramStore();

dfcontrol.on("nodeRemoved", function (id) {
  programStore.removeNodeProgram(id);
});

/**Watch the connection create for create the conecction into store program */
dfcontrol.on("connectionCreated", function (connectionNode) {
  const { type } = programStore.getNode(connectionNode.output_id);
  if (type == "LogicOperation" || type == "Cicle") {
    createParentConection(connectionNode);
  } else {
    createConection(connectionNode);
  }
});

/**Watch the connection revomed for create the conecction into store program */
dfcontrol.on("connectionRemoved", function (connectionNode) {
  const { type } = programStore.getNode(connectionNode.output_id);
  if (type == "LogicOperation" || type == "Cicle") {
    removeParentConection(connectionNode);
  } else {
    removeConecction(connectionNode);
  }
});

const createConection = (connectionNode) => {
  const nodeInput = programStore.getNode(connectionNode.input_id);
  if (connectionNode.input_class == "input_1") {
    nodeInput.nodeRefInput1 = connectionNode.output_id;
  } else {
    nodeInput.nodeRefInput2 = connectionNode.output_id;
  }
};

const createParentConection = (connectionNode) => {
  const nodeOutput = programStore.getNode(connectionNode.output_id);
  const nodeInput = programStore.getNode(connectionNode.input_id);

  nodeInput.parentNode = connectionNode.output_id;

  if (nodeOutput.type == "Cicle") {
    nodeOutput.cicle.push(connectionNode.input_id);
  } else {
    if (connectionNode.output_class == "output_1") {
      nodeOutput.trueCondition.push(connectionNode.input_id);
    } else {
      nodeOutput.falseCondition.push(connectionNode.input_id);
    }
  }
};

const removeConecction = (connectionNode) => {
  const node = programStore.getNode(connectionNode.input_id);
  if (connectionNode.input_class == "input_1") {
    node.nodeRefInput1 = null;
  } else {
    node.nodeRefInput2 = null;
  }
};

const removeParentConection = (connectionNode) => {
  const nodeOutput = programStore.getNode(connectionNode.output_id);
  const nodeInput = programStore.getNode(connectionNode.input_id);
  nodeInput.parentNode = null;

  if (nodeOutput.type == "Cicle") {
    nodeOutput.cicle = nodeOutput.cicle.filter(
      (node) => node !== connectionNode.input_id
    );
  } else {
    if (connectionNode.output_class == "output_1") {
      nodeOutput.trueCondition = nodeOutput.trueCondition.filter(
        (node) => node !== connectionNode.input_id
      );
    } else {
      nodeOutput.falseCondition = nodeOutput.falseCondition.filter(
        (node) => node !== connectionNode.input_id
      );
    }
  }
};
</script>
