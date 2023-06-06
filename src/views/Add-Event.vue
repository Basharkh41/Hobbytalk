<template>
    <div>
      <h1>Add an Event</h1>
      <form @submit.prevent="addEvent">
        <input type="datetime-local" v-model="time" placeholder="Time" required>
        <input type="text" v-model="place" placeholder="Place" required>
        <input type="text" v-model="sport" placeholder="Sport" required>
        <input type="text" v-model="beschreibung" placeholder="Beschreibung" required>
        <input type="file" @change="onFileChange">
        <button type="submit" @click="addEvent()">Add Event</button>
      </form>
      <router-link to="/">Back to Feed</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      place: '',
      sport: '',
      beschreibung: '',
    };
  },
  methods: {
    addEvent() {
      this.$router.push('/'); // Redirect to the Feed page
      this.$emit('add-event', {
        time: this.time,
        place: this.place,
        sport: this.sport,
        beschreibung: this.beschreibung,
      });
    },
    onFileChange(event) {
      // Handle file change if needed
    },
  },
};
</script>