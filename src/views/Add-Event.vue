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

<style>

.button{
  

}


li, a{
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  font-weight: 800;
  font-size: 20px;
  color: black;
  text-decoration: none;
}

.router-link{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 45px 0%;
  border-bottom: solid #FE4E69;
}
.nav_links{
  list-style: none;
}
.Logo img{
  position: absolute; 
}
.nav_links li {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  display: inline-block;
  padding: 0px 20px;
}
.nav_links li a{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  transition: all 0.3s ease 0s;
}
.nav_links li a:hover{
  color: #FE4E69;
}

.Logout-button{
  font-size: 18px;
  height: 40px;
  width: 70px;
}

.Logout-button:hover{
  color: #FE4E69;
  background-color: black;
  cursor: pointer;
}

</style>






