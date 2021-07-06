<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log In</button>
  </form>
</template>

<script>
    import useLogin from '../composables/useLogin'
    import { ref } from '@vue/reactivity'
    import {useRouter} from 'vue-router'
    export default {
    setup(props,context){
        const email = ref('')
        const password= ref('')
        //not sure if this will fix the issue, when you click on the submit button it doesnt log in, so i will try to use 
        //router to push to the main welcome screen . 
        const router = useRouter()
        const {error,login} = useLogin()

        

        const handleSubmit=  async () =>{

            await login(email.value,password.value)
            if(!error.value) {
                console.log('user logged in')
                context.emit('login')
            }


        }

         return {handleSubmit }
    }
}

</script>

<style>

</style>