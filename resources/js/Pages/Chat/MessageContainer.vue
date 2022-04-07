<template>
  <div class="h-96 w-full">
    <div class="h-full w-full p-6 flex flex-col-reverse gap-2 overflow-auto">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="w-max"
        :class="{'self-end' : message.user.id === currentUser.id}"
      >
        <MessageItem
          :message="message"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePage } from '@inertiajs/inertia-vue3';
import MessageItem from './MessageItem.vue';

const currentUser = usePage().props.value.user;

defineProps({
  messages: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
