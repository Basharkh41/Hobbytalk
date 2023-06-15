<template>
  <div class="alles">
  
  <div class="add-event">
    <router-link to="/Add-Event">Add an event</router-link>
  </div>
  <div>
    <h2>Event Details</h2>
    <div v-if="eventList.length > 0">
      <div v-for="(event, index) in eventList" :key="index">
        <p>Wann: {{ event.time }}</p>
        <p>Wo: {{ event.place }}</p>
        <p>Was: {{ event.sport }}</p>
        <p>Beschreibung: {{ event.description }}</p>
        <button class="teilnehmen"
          @click="toggleAttendance(event)"
          :class="{ 'attended': event.attended }"
        >
          {{ event.attended ? 'Absagen' : 'Teilnehmen' }}
        </button>
      <p>Wer macht mit: {{ event.attendanceCount }}</p>
        <hr v-if="index !== eventList.length - 1" />
      </div>
    </div>
    <div v-else>
      <p>No events added yet.</p>
    </div>

  </div>
</div>
</template>

<script>
import { onBeforeUnmount, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import eventBus from "@/eventBus";


export default {
  setup() {
    const router = useRouter();
    const authListener = onAuthStateChanged(getAuth(), function (user) {
      if (!user) {
        // not logged in
        alert(
          "You must be logged in to view this. Redirecting to the home page."
        );
        router.push("/");
      }
    });

    onBeforeUnmount(() => {
      // clear up listener
      authListener();
    });
    const eventList = ref([]);

eventList.value = eventBus.state.eventList;

const toggleAttendance = (event) => {
      event.attended = !event.attended;
      event.attendanceCount = event.attendanceCount || 0;
      event.attendanceCount += event.attended ? 1 : -1;
    };

return {
  eventList,
  toggleAttendance,
};
},
};
</script>


<style scoped>
button {
  background-color: #FE4E69;

  border: none;
  color: white;
  padding: 10px 60px;
  
  border-radius: 499px;
  cursor: pointer;
  display: flex;
  
}

.alles{
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #000000;
  font-size: 20px;
  text-align: center;
  margin-top: 5%;
  position: center;
}
h2{
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #fe4e69;
  font-size: 60px;
  text-align: center;
  margin-top: 5%;
}

.attended {
  background-color: red;
}

.add-event{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  
  padding: 10px;
  background-color: #FE4E69;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}


.teilnehmen {
  display: block;
  margin: 0 auto;
}
</style>
