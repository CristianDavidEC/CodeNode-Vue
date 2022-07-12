<template>
  <header class="w-full">
    <nav
      class="flex items-center justify-between bg-color shadow-blue-900/30 shadow-lg text-white py-2"
    >
      <div class="w-full flex justify-between px-20 font-bold self-center">
        <button
          class="px-5 py-1 rounded-full border-2 hover:shadow-lg hover:shadow-cyan-600/50"
        >
          <font-icon icon="fa-solid fa-floppy-disk" />
          Save
        </button>
        <button
          class="px-5 py-1 rounded-full border-2 hover:shadow-lg hover:shadow-cyan-600/50"
        >
          <font-icon icon="fa-solid fa-play" />
          Execute
        </button>
        <button
          class="px-5 py-1 rounded-full border-2 hover:shadow-lg hover:shadow-cyan-600/50"
        >
          <font-icon icon="fa-brands fa-python" />
          To Python
        </button>
        <button
          class="px-5 py-1 rounded-full border-2 hover:shadow-lg hover:shadow-cyan-600/50"
        >
          <font-icon icon="fa-solid fa-lightbulb" />
          Ligh/Dark
          <font-icon icon="fa-solid fa-moon" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style>
.bg-color {
  background-color: rgb(1, 2, 46);
}
</style>
