<template>
  <div class="relative bg-gray-200 p-6">
    <div class="flex items-center gap-4">
      <input
        v-model="message"
        type="text"
        class="flex-1 input"
        placeholder="Say something..."
        @keyup.enter="sendMessage()"
      >
      <button
        class="button"
        @click="sendMessage()"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const props = defineProps({
  room: {
    type: Object,
    default() {
      return {};
    },
  },
});

const emit = defineEmits('messageSent');

const message = ref('');

function sendMessage() {
  axios.post(`chat/room/${props.room.id}/message`, { message: message.value })
    .then((response) => {
      if (response.status === 201) {
        message.value = '';
        emit('messageSent');
      }
    })
    .catch((error) => error);
}
</script>
