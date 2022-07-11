<template>
  <header class="w-fulllocal">
    <nav
      class="flex items-center justify-between bg-blue-900 shadow-blue-900/25 shadow-lg text-white p-5"
    >
      <div class="flex">
        <font-icon icon="fa-solid fa-laptop-code" size="2x" class="mr-3" />
        <h1 class="font-bold text-2xl tracking-tight text-white">Code:Node</h1>
      </div>
      <div class="w-full flex justify-between px-32 font-bold self-center">
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
hover:shadow
