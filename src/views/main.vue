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
      <main class="flex flex-wrap justify-items-center p-5">
        <CardProgram />
        <CardProgram />
        <CardProgram />
        <CardProgram />
        <CardProgram />
        <CardProgram />
        <CardProgram />
      </main>
    </div>
  </div>
</template>
<script setup>
import CardProgram from "../components/CardProgram.vue";
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
</style>
