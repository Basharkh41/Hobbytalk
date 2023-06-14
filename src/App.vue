<template>
  <div class="Logo">
<router-link to="/" exact> <img src="logo.png"> </router-link>
</div>  
<div class="router-link">
    <nav>
      <ul class="nav_links">
      <li><router-link v-if="isLoggedIn || !isLoggedIn" to="/feed" exact> Feed </router-link> </li>
      <li> <router-link v-if="isLoggedIn || !isLoggedIn"  to="/Contact" exact> Contact </router-link></li>
      <li><router-link v-if="!isLoggedIn" to="/register" exact> Register </router-link></li> 
      <li><router-link v-if="!isLoggedIn" to="/sign-in" exact> Login </router-link></li>
      <li v-if="isLoggedIn">
         <button class="Logout-button" @click="handleSignOut"> Logout </button> 
      </li>
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


</style>