import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import world from '../components/world'
import Au from '../components/Au'
const path = require('path')


// 1.install plugin  
Vue.use(VueRouter)

const routes = [
        {
            path:path.resolve(__dirname,'/'),
            redirect:path.resolve(__dirname,'/au')
        },
        {
            path:path.resolve(__dirname,'/home'),
            component: Home
        },
        {
            path:path.resolve(__dirname,'/world'),
            component: world
        },
        {
            path:path.resolve(__dirname,'/au'),
            component: Au
        }

]
// 2. create a object of VueRouter
const router = new VueRouter({
    routes,
   // mode:'history'    //remove # in url
})

// 3. export router 
export default router