<template>
<div class="container">
    <NavBar/>
 </div>

</template>

<script>
import { watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {
  components:{NavBar},
  setup(){  
    const {user } = getUser()
    const router = useRouter()



    watch((user)=>{
      if(!user.value) {
        router.push({name: 'Welcome'})

      }
    })
  }

}
</script>
<style>

nav {
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

nav p.email{
  font-size: 16px;
  color: #999; 
}





</style>