<template>
  <div class="relative">
    <div
      class="flex items-center justify-center text-center font-semibold p-1 bg-blue-300/50 text-blue-900 h-12 m-3 z-10 rounded-lg"
      v-if="successNotification"
      :class="show ? 'visible' : 'hidden'"
    >
      <font-icon icon="fa-solid fa-square-check" class="text-3xl m-1" />
      <h1>{{message}}</h1>
    </div>

    <div
      class="flex items-center justify-center text-center font-semibold p-1 bg-red-400/50 text-red-800 h-16 m-3 z-10 rounded-lg"
      v-else="successNotification"
      :class="show ? 'visible' : 'hidden'"
    >
      <font-icon icon="fa-solid fa-rectangle-xmark" class="text-3xl m-1" />
      <h1>{{message}}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const successNotification = ref(false)
const message = ref('')
const show = ref(false)
const emitter = inject('emitter')

emitter.on('showNotification', (infoEvent) => {
  message.value = infoEvent.messageFall

  if (infoEvent.status >= 200 && infoEvent.status <= 299 ) {
    successNotification.value = true
    message.value = infoEvent.messageOk
  }

  show.value = true
  setTimeout(() => {
    show.value = false
  }, 3000)
})
</script>
