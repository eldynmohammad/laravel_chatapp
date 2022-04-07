<template>
  <div
    class="px-4 py-1.5 rounded-xl show-up-animation"
    :class="[ message.user_id === currentUser.id ? 'bg-primary text-white text-right'
      : 'bg-gray-100 text-gray-800' ]"
  >
    <p class="text-[.7rem] opacity-80 tracking-wide font-semibold">
      {{ message.user.name }}
    </p>
    <p class="mt-1 tracking-wide leading-tight">
      {{ message.message }}
    </p>
  </div>
</template>

<script setup>import { usePage } from '@inertiajs/inertia-vue3';

defineProps({
  message: {
    type: Object,
    default() {
      return {};
    },
  },
});

const currentUser = usePage().props.value.user;
</script>
