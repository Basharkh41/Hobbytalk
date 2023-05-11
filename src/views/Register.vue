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
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  font-size: 80px;
  color: #FE4E69;
  margin-top: 5%;
  text-align: center;
  margin-bottom: 40px;
}
.register-form{
  text-align: center;
}
input{
  text-align: center;
  font-size: 20px;
  color: #000000;
  border-bottom: 2px solid;
  border-color: #ffffff;
}
.register-button{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  width: 10%;
  padding: 10px;
  background-color: #FE4E69;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding-top: 10px;
  margin-top: 40px;
  cursor: pointer;
  font-weight: bold;
}
.register-button:hover{
  background-color: rgb(0, 0, 0);
  color: #FE4E69;
  font-weight:bold;
}
.input-area{
  margin-left: 30%;
  margin-right: 30%;
}
</style>