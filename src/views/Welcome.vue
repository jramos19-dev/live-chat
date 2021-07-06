<template>
  <div class="welcome container">
    <p> Welcome </p>

    <div v-if="showLogin">
        <h2>Log in</h2>
        <LoginForm @login="enterChat"/>
        <p>No account yet ? </p> 
        <span @click="showLogin= false">Sign UP</span>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
    <SignUpForm @signup="enterChat"/>
    <p>Already Registered ? </p> 
        <span @click="showLogin= true">Log in</span>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from '../components/SignUpForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
export default {
  components: {SignUpForm , LoginForm},
  name: 'Welcome',
  setup(props, context){
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () =>{

      router.push({name: 'Chatroom'})
    }
    
    return {showLogin, enterChat}
  }
 
}
</script>
<style> 

.welcome {
  text-align: center;
  padding: 20px 0; 

}

.welcome form {
  width: 300px;
  margin: 20px auto; 
}

.welcome label {
  display: block; 
  margin: 20px 0 10px;

}

.welcome input {
  width: 100px; 
  padding: 10px; 
  border-radius: 20px;
  border: 1px solid #eee; 
  outline: none;
  color: #999;
  margin: 10px auto;  
}

.welcome span {

  font-weight: bold;
  text-decoration: underline;
  cursor: pointer; 
}

.welcome button {
  margin: 20px auto;  
}



</style>