<template>
  <nav v-if="user">
      <div>
           <p class="email">currently logged in as .. {{user.displayName}}</p>
          <p>{{user.email}}</p>
      </div>
      <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
export default {
    setup(){

        const router = useRouter()
        const {user} = getUser()
        const {error,logout} = useLogout()

        const handleClick = async () =>{
            await logout()
            if(!error.value){
                console.log('user logged out')
                router.push('/')
                
            }


        }

    
        return { handleClick, user }
    }


    }


</script>

<style>

nav{    
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex; 
    justify-content: space-between;
    align-items: center; 

}

nav p {
    margin: 2px auto;
    font-size: 16px; 
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999; 
}



</style>