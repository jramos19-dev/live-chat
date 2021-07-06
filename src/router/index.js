import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'
import { ref } from 'vue'


//ROUTE guard is just a functiont hat runs before a particular route to determine if we are allowed to view the route
const requireAuth = (to, from, next) => {
  
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)

  if (!user) {
    next({name: 'Welcome'})
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    props: true,
    beforeEnter: requireAuth
  } 

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
