<template>
  <div class="flex">
    <SidebarMenu />
    <div class="flex-col w-full">
      <HeaderBoard />
      <MainBoard />
    </div>
  </div>
</template>

<script setup>
//----- Components -----//
import SidebarMenu from "../components/SidebarMenu.vue";
import HeaderBoard from "../components/HeaderBoard.vue";
import MainBoard from "../components/MainBoard.vue";
</script>
