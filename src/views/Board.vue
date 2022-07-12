<template>
  <div class="flex flex-row">
    <SidebarMenu />
    <div class="flex flex-col w-full">
      <HeaderBoard />
      <MainBoard />
    </div>
  </div>
</template>

<script setup>
//------ Librerys ------//
import Drawflow from "drawflow";
//----- Components -----//
import SidebarMenu from "../components/SidebarMenu.vue";
import HeaderBoard from "../components/HeaderBoard.vue";
import MainBoard from "../components/MainBoard.vue";
</script>
