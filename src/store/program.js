import { defineStore } from 'pinia'

export default defineStore('program', {
  state: () => ({
    idProgram: '',
    nameProgram: '',
    descriptionProgram: '',
    nodesProgram: [],
    drawflowProgram: { drawflow: { Home: { data: {} } } },
    pythonCode: '',
  }),

  getters: {
    getNode: (state) => (id) => {
      return state.nodesProgram.find((node) => node.nodeId === id)
    },
  },

  actions: {
    addNodeProgram(node) {
      this.nodesProgram.push(node)
    },

    removeNodeProgram(id) {
      this.nodesProgram = this.nodesProgram.filter((node) => node.nodeId !== id)
    },

    resetProgram() {
      this.idProgram = ''
      this.nameProgram = ''
      this.descriptionProgram = ''
      this.nodesProgram = []
      this.drawflowProgram = { drawflow: { Home: { data: {} } } }
      this.pythonCode = ''
    },

    setProgram(program) {
      this.idProgram = program.id
      this.nameProgram = program.name
      this.descriptionProgram = program.description
      this.drawflowProgram = JSON.parse(program.drawflow)
      this.pythonCode = ''
      this.nodesProgram = []
    },
  },
})
