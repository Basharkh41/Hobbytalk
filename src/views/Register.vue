<template>
    <h1> Create an Account </h1>
  
    <div class="register-form">
    <div class="input-area">
    <p> <input type='text' id="email" placeholder="Email" v-model='email'/> </p>
    <p> <input type='password' id="password" placeholder="Password" v-model='password'/> </p>
    </div>
    <p> <button @click="register" class="register-button"> Register </button> </p>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')

const router = useRouter() // get a reference to our vue router
const register = () => {
    createUserWithEmailAndPassword(getAuth(),email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log('Successfully registered!');
      router.push('/feed') // redirect to the feed
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message);
    });
}

</script>

<style>
h1{
  color: #FE4E69;
  text-align: center;
  margin-top: 100px;
}
.register-form{
  text-align: center;
}
input{
  text-align: center;
  padding-bottom: 10;
  color: #fff;
  border-bottom: 2px solid;
}
.register-button{
  width: 10%;
  padding: 10px;
  background-color: #FE4E69;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding-top: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
}
.register-button:hover{
  background-color: green;
  color: #FE4E69;
  font-weight:bold;
}
.input-area{
  margin-left: 30%;
  margin-right: 30%;
}
</style>