<template>
  <div>
        <router-link to="/Add-Event">Add an event</router-link>
      </div>
      <div>
      <ul>
        <li v-for="event in events" :key="event.id">
          <div>Wann: {{ event.time }}</div>
          <div>Wo: {{ event.place }}</div>
          <div>Was: {{ event.sport }}</div>
          <div>Beschreibung:{{ event.description }}</div>
          <br v-if="index !== events.length - 1">
          <div>
            Teilnehmen:
            <button
              :class="{ 'clicked': event.clicked }"
              @click="toggleClick(event)"
            >
              {{ event.participants }}
            </button>
          </div>
          <br>
        </li>
      </ul>
    </div>
    </template>
  
  
  <script>
  import { getAuth,onAuthStateChanged } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'
  
  export default{
      setup(){
          const router = useRouter()
          const authListener = onAuthStateChanged(getAuth(),function(user) {
              if (!user) { // not logged in
              alert('you must be logged in to view this. redirecting to the home page')
              router.push('/')
      }
  })
  onBeforeUnmount(() => {
        // clear up listener
        authListener()
      })
      },
      data() {
      return {
        events: []
      };
    },
    created() {
  
      this.events = [
        {
          id: 1,
          time: '10:00 AM',
          place: 'Park',
          sport: 'Football',
          description:'Friendly match between Team A and Team B',
          participants: 0,
  photo: 'event1.jpg',
  clicked: false
  },
  {
  id: 2,
  time: '2:00 PM',
  place: 'Gymnasium',
  sport: 'Basketball',
  description: 'Training session for beginners',
  photo: 'event2.jpg',
  participants: 0,
  clicked: false
  
  },
  {
  id: 3,
  time: '4:30 PM',
  place: 'Tennis Court',
  sport: 'Tennis',
  description: 'Tournament for intermediate players',
  photo: 'event3.jpg',
  participants: 0,
  clicked: false
  }
  ];
  },
  methods: {
      toggleClick(event) {
        event.clicked = !event.clicked;
        if (event.clicked) {
          event.participants++;
        } else {
          if (event.participants > 0) {
            event.participants--;
          }
        }
      }}
  }  
  
  
  
  
  </script>
  
  <style>
  button {
    background-color: red;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .clicked {
    background-color: #5cbf88;
  }
  </style>