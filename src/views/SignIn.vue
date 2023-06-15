<template>
  <body>
    <div class="login">
    <h1> Login to Your Account </h1>
    <p> <input type='text' placeholder="Email" v-model='email'/> </p>
    <p> <input type='password' placeholder="Password" v-model='password'/> </p>
    <p v-if="errMsg"> {{ errMsg }} </p>
    <p> <button class="login-button" @click="signIn"> Submit </button> </p>
    </div>
    </body>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE

const router = useRouter() // get a reference to our vue router

const signIn = () => { // we also renamed this method 
  signInWithEmailAndPassword(getAuth(),email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      console.log('Successfully logged in!');
      router.push('/feed') // redirect to the feed
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
        case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break  
        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }
    });
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500');
.Logo{
  margin-right: auto;
}
*{
  margin: 0;
  padding: 0;
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
.login-button{
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
.login-button:hover{
  background-color: rgb(0, 0, 0);
  color: #FE4E69;
  font-weight:bold;
}
.input-area{
  margin-left: 30%;
  margin-right: 30%;
}

</style>