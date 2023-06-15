<template>
  <div>
    <h1>Add an Event</h1>
    <form @submit.prevent="handleSubmit">
      <input type="datetime-local" v-model="event.time" placeholder="Time" required/>
      <input type="text" v-model="event.place" placeholder="Place" required/>
      <input type="text" v-model="event.sport" placeholder="Sport" required/>
      <input type="text" v-model="event.description" placeholder="Description" required/>
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

<style scoped>

.button{
  width: 10%;
  padding: 10px;
  background-color: #FE4E69;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding-top: 10px;
  margin-top: 40px;
  cursor: pointer;
  font-weight: bold;

}
</style>






