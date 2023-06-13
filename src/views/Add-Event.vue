<template>
  <div>
    <h1>Add an Event</h1>
    <form @submit.prevent="handleSubmit">
      <input type="datetime-local" v-model="event.time" placeholder="Time" required/>
      <input type="text" v-model="event.place" placeholder="Place" required/>
      <input type="text" v-model="event.sport" placeholder="Sport" required/>
      <input type="text" v-model="event.description" placeholder="Description" />
      <button type="submit">Add Event</button>
    </form>
    <router-link to="/feed">Back to Feed</router-link>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  data() {
    return {
      event: {
        time: "",
        place: "",
        sport: "",
        description: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      const newEventList = [...eventBus.state.eventList, this.event];
      eventBus.setEventList(newEventList);
      this.event = {
        time: "",
        place: "",
        sport: "",
        description: "",
      };
      this.navigatetoFeed();
    },
    navigatetoFeed(){
      this.$router.push("/feed")
    }
  },
};
</script>








