<template>
  <div class="flex justify-between items-center">
    <div class="font-bold text-xl">
      {{ selected.name }} Chat
    </div>
    <div>
      <select
        v-model="selected"
        class="bg-gray-100 border-0 rounded-xl item-focus base-duration"
        @change="$emit('roomChanged', selected)"
      >
        <option
          v-for="(room, index) in rooms"
          :key="index"
          :value="room"
        >
          {{ room.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>import { ref, watchEffect } from 'vue';

const props = defineProps({
  rooms: {
    type: Object,
    default() {
      return {};
    },
  },
  currentRoom: {
    type: Object,
    default() {
      return {};
    },
  },
});

defineEmits(['roomChanged']);

const selected = ref({});
watchEffect(() => {
  selected.value = props.currentRoom;
});
</script>
