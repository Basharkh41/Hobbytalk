<template>
  <div class="ss">
<router-link to="/" exact> <img src="logo.png"> </router-link>
</div>  
<div class="router-link">
    <nav>
      <ul class="nav_links">
      <li><router-link to="/feed" exact> Feed </router-link> </li>
      <li> <router-link to="/Contact" exact> Contact </router-link></li>
      <li v-if="isLoggedIn">
         <button @click="handleSignOut"> Logout </button> 
      </li>
      <li><router-link to="/register" exact> Register </router-link></li> 
      <li><router-link to="/sign-in" exact> Login </router-link></li>
      </ul>
    </nav>    
</div>

<div>
  <router-view/>
</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue' // used for conditional rendering
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = ref(true)

// runs after firebase is initialized
onAuthStateChanged(getAuth(),function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})

const handleSignOut = () => {
  signOut(getAuth())
  router.push('/')
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #2d2e33;
}

li, a{
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: black;
  text-decoration: none;
}

.router-link{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 45px 10%;
  border-bottom: solid #FE4E69;
}
.nav_links{
  list-style: none;
}
img{
  position: absolute; 
}
.nav_links li {
  display: inline-block;
  padding: 0px 20px;
}
.nav_links li a{
  transition: all 0.3s ease 0s;
}
.nav_links li a:hover{
  color: #FE4E69;
}


</style>