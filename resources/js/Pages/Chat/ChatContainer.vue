<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import ChatRoomSelection from './ChatRoomSelection.vue';
import InputMessage from './inputMessage.vue';
import MessageContainer from './MessageContainer.vue';

const chatRooms = ref([]);
const currentRoom = ref({});
const messages = ref([]);

function getMessages() {
  axios.get(`/chat/room/${currentRoom.value.id}/messages`)
    .then((response) => {
      messages.value = response.data;
    })
    .catch((error) => error);
}

function setRoom(room) {
  currentRoom.value = room;
  getMessages();
}

function getRooms() {
  axios.get('/chat/rooms')
    .then((response) => {
      chatRooms.value = response.data;
      setRoom(response.data[0]);
    })
    .catch((error) => error);
}

getRooms();

function connect() {
  if (currentRoom.value.id) {
    // const vm = this;
    getMessages();
    window.Echo.private(`chat.${currentRoom.value.id}`)
      .listen('.message.new', (e) => {
        getMessages();
      });
  }
}

function disconnet(room) {
  window.Echo.leave(`chat.${room.id}`);
}

watch(() => currentRoom.value, (value, oldValue) => {
  if (oldValue.id) {
    disconnet(oldValue);
  }
  connect();
});

</script>

<template>
  <AppLayout title="Dashboard">
    <template #header>
      <!-- <h2 class="font-semibold text-xl text-gray-800 leading-tight"> -->
      <ChatRoomSelection
        v-if="currentRoom.id"
        :rooms="chatRooms"
        :current-room="currentRoom"
        @room-changed="setRoom"
      />
      <!-- </h2> -->
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <MessageContainer :messages="messages" />
          <InputMessage
            :room="currentRoom"
            @message-sent="getMessages"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>
