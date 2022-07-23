import { defineStore } from "pinia";

export default defineStore("program", {
  state: () => ({
    idProgram: "00001",
    nameProgram: "ProgramaPatitoFrito",
    descriptionProgram: "ProgramaPatitoFrito",
    nodesProgram: [],
    drawflowProgram: [],
  }),

  getters: {
    getNode: (state) => (id) => {
      return state.nodesProgram.find((node) => node.nodeId === id);
    },
  },

  actions: {
    addNodeProgram(node) {
      this.nodesProgram.push(node);
    },

    removeNodeProgram(id) {
      this.nodesProgram = this.nodesProgram.filter(
        (node) => node.nodeId !== id
      );
    },
  },
});
