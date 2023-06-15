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
<style>
.login{
  text-align: center;
  
}
.login-button{
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
.login-button:hover{
  background-color: rgb(0, 0, 0);
  color: #FE4E69;
  font-weight:bold;
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