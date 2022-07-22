import { defineStore } from "pinia";

export default defineStore("program", {
  state: () => ({
    nodesProgram: [],
  }),

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
