import { defineStore } from "pinia";

export default defineStore("program", {
  state: () => ({
    nodesProgram: [],
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
