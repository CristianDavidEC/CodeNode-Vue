<template>
  <div class="contend h-screen">
    <div
      class="w-full max-h border-2 border-white rounded-2xl overflow-y-scroll relative"
    >
      <header class="sticky top-0 bg-color py-2 px-5">
        <h1
          class="font-bold text-4xl tracking-tight text-white mb-1 text-center border-b-2 pb-2 border-sky-600"
        >
          <font-icon icon="fa-solid fa-laptop-code" class="mr-3" />
          Code:Node
          <p class="text-xl font-medium mt-2">Select a Program or Create One</p>
        </h1>
      </header>
      <main class="grid grid-cols-4 px-6 place-items-center">
        <CardCreateProgram />
        <div v-for="programInfo in listPrograms">
          <CardProgram :program="programInfo" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CardProgram from '../components/CardProgram.vue'
import CardCreateProgram from '../components/CardCreateProgram.vue'
import { getAllPrograms } from '../utilities/api.js'

const listPrograms = ref([])

onMounted(() => {
  getAllPrograms(loadProgramsCard)
})

const loadProgramsCard = (data) => {
  console.log(data)
  listPrograms.value = data
}
</script>

<style>
.contend {
  padding: 40px;
  color: #eff3f8;
  background-color: rgb(1, 2, 46);
}
.bg-color {
  background-color: rgb(1, 2, 46);
}
.max-h {
  max-height: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #205bd1a4;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(43, 120, 245);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(14, 78, 183);
}
</style>
